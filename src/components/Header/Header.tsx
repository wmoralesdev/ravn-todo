import React, { FC, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
    AiOutlineCloseCircle, AiOutlineBell, AiOutlineMenu, AiOutlinePlus,
} from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import Avatar from '@components/Common/Avatar';
import { useForm } from 'react-hook-form';
import { LayoutContext } from 'src/ctx/layout';
import HeaderDesktop from './Hader.desktop';
import HeaderMobile from './Header.mobile';

const Header: FC = () => {
    const { device } = useContext(LayoutContext)!;
    const { register, handleSubmit, resetField } = useForm<{ search: string }>({
        defaultValues: {
            search: '',
        },
    });

    const onSubmit = (data) => {};

    return device === 'desktop' ? (
        <HeaderDesktop
            register={register}
            handleSubmit={handleSubmit}
            resetField={resetField}
            onSubmit={onSubmit}
        />
    ) : (
        <HeaderMobile
            register={register}
            handleSubmit={handleSubmit}
            resetField={resetField}
            onSubmit={onSubmit}
        />
    );
};

export default Header;
