import React, { FunctionComponent } from 'react'
import Hero from './Hero';
import { gql } from "apollo-boost";
import { useGetSettingQuery } from '../../api/graphql-client';

interface Props {

}
interface State {

}

const GET_SETTING = gql`
   query getSetting($slug: String!){
    allSettings(where: {slug: $slug}, first: 1){
        name,
        value
    }
}
`;

const SongPage: FunctionComponent<Props> = () => {

    const { loading, error, data } = useGetSettingQuery({
        variables: {
            slug: "site-title"
        }
    });

    let siteName = data ? (data.allSettings.length ? data.allSettings[0].value : "") : "";

    return (
        <Hero imageUrl="/images/hero-bg.jpg" text={siteName}></Hero>
    )

}

export default SongPage;