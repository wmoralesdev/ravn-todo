import { useQuery } from '@apollo/client';
import { TaskCard } from '@components/Card';
import { BaseLayout, Column } from '@components/Common/Layout';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import React, { FC, useId, useMemo } from 'react';
import { BsGrid } from 'react-icons/bs';
import { GET_TASKS } from '@gql/queries.graph';
import { statusAsArray } from '@models/common.model';
import { Task } from '@models/task.model';

const Dashboard: FC = () => {
    const groupId = useId();
    const queries = statusAsArray.map(
        (status) => {
            const { data, loading, error } = useQuery<{ tasks: Task[] }>(GET_TASKS, {
                variables: {
                    status,
                },
            });

            return {
                data, loading, error, status,
            };
        },
    );

    const isLoading = useMemo(() => queries.some((q) => q.loading === true), [queries]);

    console.log(queries);

    return (
        <BaseLayout isLoading={isLoading}>
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
                                            {`${status} ${data?.tasks?.length}`}
                                        </h1>
                                        <div className="w-full overflow-auto scrollbar space-y-2">
                                            {
                                                data?.tasks?.map((task) => (
                                                    <TaskCard key={task.id} task={task} />
                                                ))
                                            }
                                        </div>
                                    </Column>
                                ))
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Dashboard;
