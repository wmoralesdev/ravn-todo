import { useQuery } from '@apollo/client';
import { GET_PROFILE, GET_TASKS } from '@gql/queries.graph';
import useWindowSize from '@hooks/useWindowSize';
import { statusAsArray } from '@models/common.model';
import { Task } from '@models/task.model';
import { User } from '@models/user.model';
import React, {
    createContext, FC, PropsWithChildren, useEffect, useMemo, useState,
} from 'react';
import { toast } from 'react-hot-toast';
import { Device, AppCtx, LayoutMode } from './props';

export const AppContenxt = createContext<AppCtx | undefined>(undefined);

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const tasks = statusAsArray.map(
        (status) => {
            const {
                data, loading, error, refetch,
            } = useQuery<{ tasks: Task[] }>(GET_TASKS, {
                variables: {
                    status,
                },
            });

            return {
                data, loading, error, status, refetch,
            };
        },
    );
    const { data, error } = useQuery<{ profile: Partial<User> }>(GET_PROFILE);
    const { width } = useWindowSize();
    const [navbarStatus, setNavbarStatus] = useState<boolean>(false);
    const [mode, setMode] = useState<LayoutMode>();
    const [device, setDevice] = useState<Device>('mobile');

    useEffect(() => {
        setDevice(width < 768 ? 'mobile' : 'desktop');
    }, [width]);

    useEffect(() => {
        if (error) toast.error(error.message, { id: 'profile-retrieve' });
    }, [error]);

    const ctxValue = useMemo(() => ({
        user: data?.profile ?? {},
        mode,
        setMode,
        device,
        navbarStatus,
        setNavbarStatus,
        tasks,
    }), [data, device, mode, setMode, navbarStatus, setNavbarStatus, tasks]);

    return (
        <AppContenxt.Provider value={ctxValue}>
            { children }
        </AppContenxt.Provider>
    );
};

export default AppContextProvider;
