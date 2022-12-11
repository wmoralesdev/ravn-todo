import { Task, TaskGroup } from '@models/task.model';
import { User } from '@models/user.model';
import { Dispatch, SetStateAction } from 'react';

export type Device = 'mobile' | 'desktop';

export type LayoutMode = 'kanban' | 'list';

export interface AppCtx {
    user?: Partial<User>;

    mode?: LayoutMode;

    setMode?: Dispatch<SetStateAction<LayoutMode | undefined>>;

    device?: Device;

    navbarStatus?: boolean;
    setNavbarStatus?: Dispatch<SetStateAction<boolean>>;
}

export interface TaskCtx {
    tasks: TaskGroup[];
    setTasks: Dispatch<SetStateAction<TaskGroup[]>>;

    editableTask: Task | undefined;
    setEditableTask: Dispatch<SetStateAction<Task | undefined>>;
}
