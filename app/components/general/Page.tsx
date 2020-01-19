import React, { FunctionComponent } from 'react'
import { gql } from "apollo-boost";
import { useGetPageQuery } from '../../api/graphql-client';
import CSS from 'csstype';
import Hero from '../hero/Hero'
import { Tab, Tabs } from 'react-bootstrap'

interface Props {
    slug: string
}
interface State {

}

const pageBodyContainerStyle: CSS.Properties = {
    marginTop: "2rem"
}

const GET_PAGE = gql`
   query getPage($url: String!){
    allPages(where: {url: $url}, first: 1){
        id,
        title,
        state,
        image{
            publicUrl
        },
        content,
        contactEmail
    }
}
`;

const Page: FunctionComponent<Props> = ({ slug }) => {
    const { loading, error, data } = useGetPageQuery({
        variables: {
            url: slug
        }
    });

    let pageData, title, imageUrl;

    if (loading || error) {
        pageData = <div>Loading...</div>
    }

    if (data) {
        if (data.allPages.length) {
            let page = data.allPages[0];
            title = page.title;
            imageUrl = imageUrl ? page.image.publicUrl : "/images/hero-bg-2.jpg";
            pageData = <div dangerouslySetInnerHTML={{ __html: page.content }} />
        }
    }
    return (
        <div>
            <Hero imageUrl={imageUrl} text={title}></Hero>
            <div className="container" style={pageBodyContainerStyle}>
                {pageData}
            </div>
        </div>
    )
}

export default Page;
