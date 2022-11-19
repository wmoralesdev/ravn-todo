import { Dialog, Transition } from '@headlessui/react';
import React, { FC, Fragment, PropsWithChildren } from 'react';
import { ModalProps } from './props';

const Modal: FC<ModalProps & PropsWithChildren> = ({ modalStatus, closeModal, children }) => (
    <Transition
        show={modalStatus}
        as={Fragment}
    >
        <Dialog className="relative z-50" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
            </Transition.Child>

            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 flex items-center justify-center">
                    {children}
                </div>
            </Transition.Child>
        </Dialog>
    </Transition>

);

export default Modal;
