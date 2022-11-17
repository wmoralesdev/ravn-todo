import { Dispatch, SetStateAction } from 'react';

export type Device = 'mobile' | 'desktop';

export type LayoutMode = 'kanban' | 'list';

export interface LayoutCtx {
    mode?: LayoutMode;
    setMode?: Dispatch<SetStateAction<LayoutMode | undefined>>;
    device?: Device;
    navbarStatus?: boolean;
    setNavbarStatus?: Dispatch<SetStateAction<boolean>>;
}
