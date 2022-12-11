import { BaseLayout, TaskColumn } from '@components/Common/Layout';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import React, {
    FC, useEffect, useId, useState,
} from 'react';
import { BsGrid } from 'react-icons/bs';
import useModal from '@hooks/useModal';
import { ManageTaskModal } from '@components/Modal';
import { statusAsArray as taskStatus } from '@models/common.model';
import TaskContextProvider from '@ctx/task.ctx';

const Dashboard: FC = () => {
    const [update, setUpdate] = useState<string>();
    const { modalStatus, openModal, closeModal } = useModal();
    const groupId = useId();

    useEffect(() => {
        if (update !== undefined) openModal();
    }, [update]);

    // Maintain state for selected task (id) and instead of create it should get it from id
    return (
        <BaseLayout isLoading={false}>
            <div className="w-full h-full flex gap-x-8">
                <Sidebar>
                    <Sidebar.Item isActive>
                        <BsGrid />
                        {' '}
                        Dashboard
                    </Sidebar.Item>
                </Sidebar>
                <div className="flex-1 w-full h-full center-col-y overflow-hidden">
                    <Header />
                    <div className="mt-auto w-full h-4/5 flex-x gap-x-8 overflow-x-auto scrollbar">
                        <TaskContextProvider>
                            {
                                taskStatus.map((status, index) => (
                                    <TaskColumn key={`${groupId}-${index}`} status={status} className="min-w-[24rem]" />
                                ))
                            }
                            <ManageTaskModal
                                mode="edit"
                                modalStatus={modalStatus}
                                openModal={openModal}
                                closeModal={() => {
                                    closeModal();
                                    setUpdate(undefined);
                                }}
                            />
                        </TaskContextProvider>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Dashboard;
