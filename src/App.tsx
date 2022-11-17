import React, { FC } from 'react';
import {
    ApolloProvider,
} from '@apollo/client';
import Dashboard from '@pages/Dashboard';
import client from '@gql/client';
import LayoutContextProvider from './ctx/layout';

const App: FC = () => (
    <ApolloProvider client={client}>
        <LayoutContextProvider>
            <Dashboard />
        </LayoutContextProvider>
    </ApolloProvider>
);
export default App;
