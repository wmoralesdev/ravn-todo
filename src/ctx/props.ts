import { ApolloError, OperationVariables } from '@apollo/client';
import { Status } from '@models/common.model';
import { Task } from '@models/task.model';
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
    tasks: {
        data: {
            tasks: Task[];
        } | undefined;
        loading: boolean;
        error: ApolloError | undefined;
        status: Status;
        refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<any>;
    }[];
}
