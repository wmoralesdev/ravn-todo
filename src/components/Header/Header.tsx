import React, { FC, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContenxt } from '@ctx/app.ctx';
import useModal from '@hooks/useModal';
import { ManageTaskModal } from '@components/Modal';
import HeaderDesktop from './Hader.desktop';
import HeaderMobile from './Header.mobile';

const Header: FC = () => {
    const { device } = useContext(AppContenxt)!;
    const { modalStatus, openModal, closeModal } = useModal();
    const { register, handleSubmit, resetField } = useForm<{ search: string }>({
        defaultValues: {
            search: '',
        },
    });

    const onSubmit = (data) => {};

    return (
        <>
            <ManageTaskModal
                mode="new"
                modalStatus={modalStatus}
                openModal={openModal}
                closeModal={closeModal}
            />
            {
                device === 'desktop' ? (
                    <HeaderDesktop
                        register={register}
                        handleSubmit={handleSubmit}
                        resetField={resetField}
                        onSubmit={onSubmit}
                        openModal={openModal}
                    />
                ) : (
                    <HeaderMobile
                        register={register}
                        handleSubmit={handleSubmit}
                        resetField={resetField}
                        onSubmit={onSubmit}
                        openModal={openModal}
                    />
                )
            }
        </>
    );
};

export default Header;
