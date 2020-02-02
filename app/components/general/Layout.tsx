import React, { Component } from 'react'
import Header from '../header/Header';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import 'bootstrap/dist/css/bootstrap.css';
import Fonts from './Fonts'
import "../../styles/styles.scss";
import Emitter from "../../js/emitter";
import WaveformPlaylist from "../../js/waveform-playlist.var";

interface Props {

}
interface State {

}

const client = new ApolloClient({
    uri: "http://localhost:3000/admin/api",
});

const layoutStyle = {
    marginBottom: "6rem"
};

class Layout extends Component<Props, State>{
    componentDidMount() {
        Fonts();

        // let playlist = WaveformPlaylist.init({
        //     samplesPerPixel: 12000,
        //     waveHeight: 90,
        //     container: document.getElementById("playlist"),
        //     timescale: true,
        //     state: 'cursor',
        //     colors: {
        //         waveOutlineColor: '#efefef'
        //     },
        //     controls: {
        //         show: true, //whether or not to include the track controls
        //         width: 200 //width of controls in pixels
        //     },
        //     zoomLevels: [500, 1000, 3000, 12000],
        // });
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <ApolloHooksProvider client={client}>
                    <div style={layoutStyle}>
                        <Header />
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </ApolloHooksProvider>
            </ApolloProvider>
        );
    }
}
export default Layout;