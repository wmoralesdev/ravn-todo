import { useQuery } from '@apollo/client';
import { TaskCard } from '@components/Card';
import { GET_TASKS } from '@gql/queries.graph';
import { Task } from '@models/task.model';
import classNames from 'classnames';
import React, {
    Dispatch, FC, PropsWithChildren, SetStateAction, Suspense, useContext,
} from 'react';
import { formatTag as formatSpecialChars } from '@utils/tags';
import { Status, Tag } from '@models/common.model';
import { TaskContext } from '@ctx/task.ctx';
import Loader from '../Loader';

interface ColumnProps extends PropsWithChildren {
    className: string;
    status: Status;
    updateTask: Dispatch<SetStateAction<Task | undefined>>;
}

const TaskColumn: FC<ColumnProps> = ({ status, updateTask }) => {
    const { tasks, setTasks } = useContext(TaskContext)!;

    // Suspense will not be able to detect data fetching, apollo is in the works
    // for useSuspenseQuery, so a template behaviour will be used
    const { data, loading } = useQuery<{ tasks: Task[] }>(GET_TASKS, {
        variables: {
            status,
        },
        onCompleted: (info) => {
            setTasks((prev) => {
                const currentStatus = tasks.findIndex(({ status: st }) => st === status);
                const withItem = [...prev];
                withItem[currentStatus] = {
                    status,
                    items: info.tasks,
                };

                return withItem;
            });
        },
    });

    return (
        <Suspense fallback={<Loader />}>
            {/* As above stated template Suspense is used, but to keep the loading behaviour */}
            { loading ? <Loader /> : null }
            <div className={classNames('flex flex-col items-start gap-y-2 min-w-[24rem]')}>
                <h1 className="text-m font-bold sticky top-0 bg-neutral-500 w-full pb-4">
                    {`${formatSpecialChars(status as Tag)} (${data?.tasks?.length ?? 0})`}
                </h1>
                <div className="w-full overflow-auto scrollbar space-y-2">
                    {
                        data?.tasks?.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            />
                        ))
                    }
                </div>
            </div>
        </Suspense>
    );
};

export default TaskColumn;
