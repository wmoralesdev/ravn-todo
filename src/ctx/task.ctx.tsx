import { statusAsArray } from '@models/common.model';
import { Task, TaskGroup } from '@models/task.model';
import React, {
    createContext, FC, PropsWithChildren, useMemo, useState,
} from 'react';
import { TaskCtx } from './props';

export const TaskContext = createContext<TaskCtx | undefined>(undefined);

const TaskContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [editableTask, setEditableTask] = useState<Task>();
    const [tasks, setTasks] = useState<TaskGroup[]>(statusAsArray.map((status) => ({
        status,
        items: [],
    })));

    const ctxValue = useMemo(() => ({
        tasks, setTasks, editableTask, setEditableTask,
    }), [tasks, editableTask]);

    return (
        <TaskContext.Provider value={ctxValue}>
            { children }
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;
