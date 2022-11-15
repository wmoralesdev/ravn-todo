import { TaskCard } from '@components/card';
import { BaseLayout, Column } from '@components/common/layout';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import React, { FC } from 'react';
import { BsGrid } from 'react-icons/bs';
import {
    ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery,
} from '@apollo/client';

const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    cache: new InMemoryCache(),
});

const App: FC = () => {
    const { loading, error, data } = useQuery();

    return (
        <ApolloProvider client={client}>
            <BaseLayout>
                <div className="w-full h-full flex gap-x-8">
                    <Sidebar>
                        <Sidebar.Item isActive>
                            <BsGrid />
                            {' '}
                            Dashboard
                        </Sidebar.Item>
                    </Sidebar>
                    <div className="flex-1 w-full h-full center-col-y overflow-hidden">
                        <Header />
                        <div className="mt-auto w-full h-4/5 flex-x gap-x-8 overflow-x-auto scrollbar">
                            <Column className="min-w-[24rem] overflow-auto scrollbar">
                                <h1 className="text-m font-bold sticky top-0 bg-neutral-500 w-full pb-4">Working (03)</h1>
                                <TaskCard />
                                <TaskCard />
                            </Column>
                            <Column className="min-w-[24rem] overflow-auto scrollbar">
                                <h1 className="text-m font-bold sticky top-0 bg-neutral-500 w-full pb-4">Working (03)</h1>
                                <TaskCard />
                                <TaskCard />
                                <TaskCard />
                                <TaskCard />
                            </Column>
                            <Column className="min-w-[24rem] overflow-auto scrollbar">
                                <h1 className="text-m font-bold sticky top-0 bg-neutral-500 w-full pb-4">Working (03)</h1>
                                <TaskCard />
                                <TaskCard />
                                <TaskCard />
                                <TaskCard />
                            </Column>
                            <Column className="min-w-[24rem] overflow-auto scrollbar">
                                <h1 className="text-m font-bold sticky top-0 bg-neutral-500 w-full pb-4">Working (03)</h1>
                                <TaskCard />
                                <TaskCard />
                                <TaskCard />
                                <TaskCard />
                            </Column>
                            <Column className="min-w-[24rem] overflow-auto scrollbar">
                                <h1 className="text-m font-bold sticky top-0 bg-neutral-500 w-full pb-4">Working (03)</h1>
                                <TaskCard />
                                <TaskCard />
                                <TaskCard />
                                <TaskCard />
                            </Column>
                            <Column className="min-w-[24rem] overflow-auto scrollbar">
                                <h1 className="text-m font-bold sticky top-0 bg-neutral-500 w-full pb-4">Working (03)</h1>
                                <TaskCard />
                                <TaskCard />
                                <TaskCard />
                                <TaskCard />
                            </Column>
                        </div>
                    </div>
                </div>
            </BaseLayout>
        </ApolloProvider>
    );
};

export default App;
