import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_URL,
});

const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
}));

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
