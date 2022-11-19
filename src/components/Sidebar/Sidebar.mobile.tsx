import classNames from 'classnames';
import React, { FC, PropsWithChildren, useContext } from 'react';
import { AppContenxt } from '@ctx/app.ctx';
import { IoMdClose } from 'react-icons/io';

const SidebarMobile: FC<PropsWithChildren> = ({ children }) => {
    const { navbarStatus: isOpen, setNavbarStatus: setIsOpen } = useContext(AppContenxt)!;

    return (
        <>
            <nav
                className={
                    classNames(
                        'navbar center-col-x fixed left-0 top-0 z-50 trans-300 h-full',
                        isOpen ? 'w-[80vw]' : 'w-0 overflow-hidden',
                    )
                }
            >
                <button type="button" onClick={() => setIsOpen!(false)} className="absolute top-0 right-0 p-4">
                    <IoMdClose className="text-2xl" />
                </button>
                {children}
            </nav>
            <div className={classNames('fixed left-0 top-0 h-screen w-screen trans-200 bg-black', isOpen ? 'z-20 bg-opacity-50' : '-z-10 bg-opacity-0')} />
        </>
    );
};

export default SidebarMobile;
