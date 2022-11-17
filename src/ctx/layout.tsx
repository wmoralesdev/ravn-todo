import useWindowSize from '@hooks/useWindowSize';
import React, {
    createContext, FC, PropsWithChildren, useEffect, useMemo, useState,
} from 'react';
import { Device, LayoutCtx, LayoutMode } from './props';

export const LayoutContext = createContext<LayoutCtx | undefined>(undefined);

const LayoutContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const { width } = useWindowSize();
    const [navbarStatus, setNavbarStatus] = useState<boolean>(false);
    const [mode, setMode] = useState<LayoutMode>();
    const [device, setDevice] = useState<Device>('mobile');

    useEffect(() => {
        setDevice(width < 768 ? 'mobile' : 'desktop');
    }, [width]);

    const ctxValue = useMemo(() => ({
        mode,
        setMode,
        device,
        navbarStatus,
        setNavbarStatus,
    }), [device, mode, setMode, navbarStatus, setNavbarStatus]);

    return (
        <LayoutContext.Provider value={ctxValue}>
            { children }
        </LayoutContext.Provider>
    );
};

export default LayoutContextProvider;
