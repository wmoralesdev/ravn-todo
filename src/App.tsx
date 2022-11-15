import { Layout } from '@components/common';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import React, { FC } from 'react';
import { BsGrid } from 'react-icons/bs';

const App: FC = () => (
    <Layout>
        <div className="w-full h-full flex gap-x-8">
            <Sidebar>
                <Sidebar.Item isActive>
                    <BsGrid />
                    {' '}
                    Dashboard
                </Sidebar.Item>
            </Sidebar>
            <Header />
        </div>
    </Layout>
);

export default App;
