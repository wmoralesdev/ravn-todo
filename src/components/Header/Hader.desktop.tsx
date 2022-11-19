import Avatar from '@components/Common/Avatar';
import { AppContenxt } from '@ctx/app.ctx';
import React, { FC, useContext } from 'react';
import {
    AiOutlineCloseCircle, AiOutlineBell, AiOutlineMenu, AiOutlinePlus,
} from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { HeaderProps } from './props';

const HeaderDesktop: FC<HeaderProps<{ search: string }>> = (
    {
        handleSubmit, register, resetField, onSubmit, openModal,
    },
) => {
    const { user } = useContext(AppContenxt)!;

    return (
        <header className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-neutral-400 rounded-xl w-full h-fit center-row-x gap-4 p-2 px-4">
                <FiSearch className="text-xl" />
                <input
                    {...register('search')}
                    className="border-none bg-transparent w-full text-s focus-visible:outline-0 peer"
                    placeholder="Search"
                />
                <button type="button" onClick={() => resetField('search')} className="transition-all opacity-0 peer-focus:opacity-100">
                    <AiOutlineCloseCircle className="text-l" />
                </button>
                <AiOutlineBell className="text-xl hover:animate-wiggle" />
                <Avatar
                    alt="avatar"
                    variant="sm"
                    src={(user && user.avatar) || undefined}
                />
            </form>
            <div className="w-full text-xl my-8 center-row-x justify-between text-white">
                <div>
                    <button type="button" className="p-2 rounded-lg trans-200 hover:scale-110">
                        <AiOutlineMenu />
                    </button>
                    <button type="button" className="p-2 border-2 border-primary-400 text-primary-400 rounded-lg trans-200 hover:scale-110">
                        <BsGrid />
                    </button>
                </div>
                <button
                    onClick={openModal}
                    type="button"
                    className="p-2 bg-primary-400 text-white rounded-lg trans-200 hover:scale-110"
                >
                    <AiOutlinePlus />
                </button>
            </div>
        </header>
    );
};

export default HeaderDesktop;
