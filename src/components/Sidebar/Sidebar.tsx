import classNames from 'classnames';
import React, { PropsWithChildren, useContext } from 'react';
import { ReactComponent as RavnLogo } from '@assets/ravn.svg';
import { AppContenxt } from '@ctx/app.ctx';
import SidebarMobile from './Sidebar.mobile';
import SidebarDesktop from './Sidebar.desktop';

export type SidebarItemType = React.FunctionComponent<PropsWithChildren & { isActive?: boolean }>;
export type SidebarType = React.FunctionComponent<PropsWithChildren> & { Item: SidebarItemType };

const Sidebar: SidebarType = ({ children }) => {
    const { device } = useContext(AppContenxt)!;

    return device === 'mobile' ? (
        <SidebarMobile>
            <RavnLogo className="mb-8" />
            <ul className="w-full">
                {children}
            </ul>
        </SidebarMobile>
    ) : (
        <SidebarDesktop>
            <RavnLogo className="mb-8" />
            <ul className="w-full">
                {children}
            </ul>
        </SidebarDesktop>
    );
};

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
