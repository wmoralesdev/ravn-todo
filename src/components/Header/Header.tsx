import React, { FC } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineBell, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import Avatar from '@components/common/Avatar';

const Header: FC = () => (
    <header className="w-full text-neutral-200">
        <div className="bg-neutral-400 rounded-xl w-full h-fit center-row-x gap-4 p-2 px-4">
            <FiSearch className="text-xl" />
            <input className="border-none bg-transparent w-full text-s focus-visible:outline-0" placeholder="Search" />
            <AiOutlineBell className="text-xl hover:animate-wiggle" />
            <Avatar
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt="avatar"
                variant="sm"
            />
        </div>
        <div className="w-full text-xl my-8 center-row-x justify-between text-white">
            <div>
                <button type="button" className="p-2 rounded-lg">
                    <AiOutlineMenu />
                </button>
                <button type="button" className="p-2 border-2 border-primary-400 text-primary-400 rounded-lg">
                    <BsGrid />
                </button>
            </div>
            <button type="button" className="p-2 bg-primary-400 text-white rounded-lg">
                <AiOutlinePlus />
            </button>
        </div>
    </header>
);

export default Header;
