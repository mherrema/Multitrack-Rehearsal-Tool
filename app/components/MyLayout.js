import Header from './header/Header';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

const client = new ApolloClient({
    uri: "http://localhost:3000/admin/api",
});

const layoutStyle = {
    // margin: 20,
    // padding: 20,
    // border: '1px solid #DDD'
};

const Layout = props => (
    <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
            <div style={layoutStyle}>
                <Header />
                {props.children}
            </div>
        </ApolloHooksProvider>
    </ApolloProvider>
);

export default Layout;