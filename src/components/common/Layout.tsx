import React, { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
    <main className="min-h-screen h-screen flex-y
    lg:p-8"
    >
        {children}
    </main>
);

export default Layout;
