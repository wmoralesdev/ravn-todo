import React, { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import Loader from '../Loader';

const Layout: FC<PropsWithChildren & { isLoading: boolean }> = ({ children, isLoading }) => (
    <main className="min-h-screen h-screen flex-y p-8">
        <Toaster />
        { isLoading ? <Loader /> : null }
        {children}
    </main>
);

export default Layout;
