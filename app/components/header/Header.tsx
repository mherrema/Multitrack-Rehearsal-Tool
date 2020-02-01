import Link from 'next/link';
import styles from './Header';
import CSS from 'csstype';
import { gql } from "apollo-boost";
import { useGetPagesQuery, GetPagesQuery } from '../../api/graphql-client';

const headerStyle: CSS.Properties = {
    width: "100%",
    height: "50px",
    background: "black"
};

const headerRowStyle: CSS.Properties = {
    height: "100%"
}

const headerLogoStyle: CSS.Properties = {
    maxHeight: "50px"
}

const leftNavStyle: CSS.Properties = {
    listStyle: "none",
    marginBottom: "0"
}

const GET_PAGES = gql`
   query getPages{
    allPages(where: { state: published }, first: 3){
        title,
        url
    }
}
`;

const Header = () => {
    const { loading, error, data } = useGetPagesQuery();

    let pages: GetPagesQuery["allPages"] = [];
    if (data) {
        pages = data.allPages;
    }

    return (

        <header className="containerFluid" style={headerStyle}>
            <div className="row align-items-center" style={headerRowStyle}>

                <div className="col">
                    <div className="row justify-content-center">
                        <ul style={leftNavStyle}>
                            <li >
                                <Link href="/songs" as={`/songs`}>
                                    <a className="header__link" >Songs</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1">
                    <Link href="/" as={`/`}>
                        <a><img src="/images/logo.svg" className="img-fluid" style={headerLogoStyle} /></a>
                    </Link>

                </div>
                <div className="col">
                    <div className="row justify-content-center">
                        <ul style={leftNavStyle}>
                            {pages.map(p => {
                                return <li key={p.title}>
                                    <Link href="/pages/[slug]" as={`/pages/${p.url}`}>
                                        <a className="header__link">{p.title}</a>
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div >
            <style jsx>{`
            header{
                width: 100%;
                background: black;
                   height: 50px;
                   marg
            }
            `}</style>
        </header >
    )
};

export default Header;