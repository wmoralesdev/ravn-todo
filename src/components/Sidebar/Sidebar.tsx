import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { ReactComponent as RavnLogo } from '@assets/ravn.svg';

type SidebarItemType = React.FunctionComponent<PropsWithChildren & { isActive?: boolean }>;
type SidebarType = React.FunctionComponent<PropsWithChildren> & { Item: SidebarItemType };

const Sidebar: SidebarType = ({ children }) => (
    <nav className="bg-neutral-400 center-col-x py-4 w-[80vw] h-full gap-4
    lg:w-[15vw] lg:rounded-xl"
    >
        <RavnLogo className="mb-8" />
        <ul className="w-full">
            {children}
        </ul>
    </nav>
);

const SidebarItem: SidebarItemType = ({ children, isActive }) => (
    <li className="w-full font-bold hover:text-primary-400">
        <a
            href="/"
            className={classNames('flex-x items-center p-4 pr-3 gap-4 transition-all quick bg-none text-l uppercase', isActive && 'gradient-primary')}
        >
            { children }
        </a>
    </li>
);

Sidebar.Item = SidebarItem;

export default Sidebar;
