import Avatar from '@components/Common/Avatar';
import classNames from 'classnames';
import React, { FC, useContext, useState } from 'react';
import {
    AiOutlineCloseCircle, AiOutlineBell, AiOutlineMenu, AiOutlinePlus,
} from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { LayoutContext } from 'src/ctx/layout';
import { HeaderProps } from './props';

const HeaderMobile: FC<HeaderProps<{ search: string }>> = (
    {
        handleSubmit, register, resetField, onSubmit,
    },
) => {
    const { setNavbarStatus } = useContext(LayoutContext)!;
    const [showInput, setShowInput] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 text-neutral-200 bg-neutral-400 p-2 pb-0">
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl w-full h-fit flex-x justify-between items-center gap-4 p-2 px-4">
                <button type="button" onClick={() => setNavbarStatus!(true)}>
                    <Avatar
                        alt="avatar"
                        variant="sm"
                    />
                </button>
                <div className={classNames('center-row-x w-full bg-neutral-300 rounded-lg overflow-hidden trans-200', showInput ? 'w-full px-2 py-3' : 'w-0 p-0')}>
                    <input
                        {...register('search')}
                        className={classNames('border-none bg-transparent text-s peer focus-visible:outline-0', showInput ? 'w-full' : 'w-0')}
                        placeholder="Search"
                    />
                    <button type="button" onClick={() => resetField('search')} className="transition-all opacity-0 peer-focus:opacity-100">
                        <AiOutlineCloseCircle className="text-l" />
                    </button>
                </div>
                <div className="center-row-x gap-3">
                    <button type="button" onClick={() => setShowInput(!showInput)}>
                        <FiSearch className="text-2xl" />
                    </button>
                    <AiOutlineBell className="text-2xl hover:animate-wiggle" />
                </div>
            </form>
            <div className="w-full text-xl mt-4 center-row-x justify-between text-white">
                <button type="button" className="py-3 pb-4 border-b-4 border-primary-400 text-primary-400 text-m w-1/2 h-full">Dashboard</button>
                <button type="button" className="py-3 pb-4 text-m w-1/2 h-full">Task</button>
            </div>
        </header>
    );
};

export default HeaderMobile;
