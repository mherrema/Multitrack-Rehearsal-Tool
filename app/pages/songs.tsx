import React, { Component } from 'react'
import Layout from '../components/general/Layout';
import CSS from 'csstype';
import AllSongs from '../components/song/list/AllSongs';

interface Props {

}
interface State {

}

const h4Styles: CSS.Properties = {
    marginBottom: "2rem",
    marginTop: "2rem"
}

export default class songs extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Layout>
                <div className="container">
                    <h4 style={h4Styles}>All Songs</h4>
                    <AllSongs></AllSongs>
                </div>
            </Layout>
        )
    }
}
