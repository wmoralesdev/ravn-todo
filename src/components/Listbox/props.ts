import { ReactElement } from 'react';
import { UseControllerProps } from 'react-hook-form';

export interface ListboxProps {
    controller: UseControllerProps;
    items: any;
    renderOption: (item: any, key: string) => ReactElement;
    renderDefault: (value?: any) => ReactElement;
    multiple?: boolean;
}
