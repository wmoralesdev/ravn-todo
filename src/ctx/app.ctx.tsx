import { useQuery } from '@apollo/client';
import { GET_PROFILE } from '@gql/queries.graph';
import useWindowSize from '@hooks/useWindowSize';
import { User } from '@models/user.model';
import React, {
    createContext, FC, PropsWithChildren, useEffect, useMemo, useState,
} from 'react';
import { toast } from 'react-hot-toast';
import { Device, AppCtx, LayoutMode } from './props';

export const AppContenxt = createContext<AppCtx | undefined>(undefined);

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
    // Suspense at individual column with fallback
    const { data, error } = useQuery<{ profile: Partial<User> }>(GET_PROFILE);

    const [navbarStatus, setNavbarStatus] = useState<boolean>(false);
    const [mode, setMode] = useState<LayoutMode>();
    const [device, setDevice] = useState<Device>('mobile');

    const { width } = useWindowSize();

    useEffect(() => {
        setDevice(width < 768 ? 'mobile' : 'desktop');
    }, [width]);

    useEffect(() => {
        if (error) toast.error(error.message, { id: 'profile-retrieve' });
    }, [error]);

    // Minimal ctx is preferred
    const ctxValue = useMemo(() => ({
        user: data?.profile ?? {},
        mode,
        setMode,
        device,
        navbarStatus,
        setNavbarStatus,
    }), [data, device, mode, setMode, navbarStatus, setNavbarStatus]);

    return (
        <AppContenxt.Provider value={ctxValue}>
            { children }
        </AppContenxt.Provider>
    );
};

export default AppContextProvider;
