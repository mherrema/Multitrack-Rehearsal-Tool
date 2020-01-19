import React, { Component } from 'react'
import Header from './header/Header';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import 'bootstrap/dist/css/bootstrap.css';
import Fonts from './general/Fonts'
import "../styles/styles.scss";

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
        Fonts()
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