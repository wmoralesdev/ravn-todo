import React, { FC } from 'react';
import {
    ApolloProvider,
} from '@apollo/client';
import Dashboard from '@pages/Dashboard';
import client from '@gql/client';
import AppContextProvider from './ctx/app.ctx';

const App: FC = () => (
    <ApolloProvider client={client}>
        <AppContextProvider>
            <Dashboard />
        </AppContextProvider>
    </ApolloProvider>
);
export default App;
