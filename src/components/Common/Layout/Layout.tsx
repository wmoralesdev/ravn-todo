import React, { FC, PropsWithChildren } from 'react';
import Loader from '../Loader';

const Layout: FC<PropsWithChildren & { isLoading: boolean }> = ({ children, isLoading }) => (
    <main className="min-h-screen h-screen flex-y p-8">
        { isLoading ? <Loader /> : null }
        {children}
    </main>
);

export default Layout;
