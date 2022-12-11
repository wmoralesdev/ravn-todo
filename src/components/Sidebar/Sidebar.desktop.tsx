import React, { FC, PropsWithChildren } from 'react';

const SidebarDesktop: FC<PropsWithChildren> = ({ children }) => (
    <nav className="navbar center-col-x h-full w-[15vw] min-w-[15vw]">
        {children}
    </nav>
);

export default SidebarDesktop;
// Prioritize behaviour
// Colocating things where they're needed
