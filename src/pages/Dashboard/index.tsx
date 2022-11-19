import { useQuery } from '@apollo/client';
import { TaskCard } from '@components/Card';
import { BaseLayout, Column } from '@components/Common/Layout';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import React, {
    FC, useContext, useEffect, useId, useMemo, useState,
} from 'react';
import { BsGrid } from 'react-icons/bs';
import { formatTag as formatSpecialChars } from '@utils/tags';
import useModal from '@hooks/useModal';
import { ManageTaskModal } from '@components/Modal';
import { AppContenxt } from '@ctx/app.ctx';
import { Task } from '@models/task.model';

const Dashboard: FC = () => {
    const [update, setUpdate] = useState<Task>();
    const { tasks: queries } = useContext(AppContenxt)!;
    const { modalStatus, openModal, closeModal } = useModal();
    const groupId = useId();

    const isLoading = useMemo(() => queries.some((q) => q.loading === true), [queries]);

    useEffect(() => {
        if (update !== undefined) openModal();
    }, [update]);

    return (
        <BaseLayout isLoading={isLoading}>
            <ManageTaskModal
                mode="edit"
                modalStatus={modalStatus}
                openModal={openModal}
                closeModal={() => {
                    closeModal();
                    setUpdate(undefined);
                }}
                task={update}
            />
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
                        {
                            !isLoading && queries.length > 0 ? (
                                queries.map(({ data, status }, index) => (
                                    <Column key={`${groupId}-${index}`} className="min-w-[24rem]">
                                        <h1 className="text-m font-bold sticky top-0 bg-neutral-500 w-full pb-4">
                                            {`${formatSpecialChars(status)} (${data?.tasks?.length})`}
                                        </h1>
                                        <div className="w-full overflow-auto scrollbar space-y-2">
                                            {
                                                data?.tasks?.map((task) => (
                                                    <TaskCard
                                                        setEdit={setUpdate}
                                                        key={task.id}
                                                        task={task}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </Column>
                                ))
                            ) : null
                        }
                    </div>
                    {/* <ManageTaskModal /> */}
                </div>
            </div>
        </BaseLayout>
    );
};

export default Dashboard;
