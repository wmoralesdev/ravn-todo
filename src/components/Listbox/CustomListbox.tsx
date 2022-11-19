import { Listbox as ListBox, Transition } from '@headlessui/react';
import React, { FC, Fragment, useId } from 'react';
import { useController } from 'react-hook-form';
import { ListboxProps } from './props';

const CustomListbox: FC<ListboxProps> = ({
    controller, items, renderOption: renderOptions, renderDefault, multiple = false,
}) => {
    const id = useId();
    const {
        field: { value, onChange },
    } = useController(controller);

    return (
        <ListBox
            value={value}
            onChange={onChange}
            multiple={multiple}
        >
            <div className="relative bg-neutral-300 rounded center-row-x font-medium gap-2 px-4 py-2 lg:flex-1 lg:py-1 lg:px-2">
                <ListBox.Button className="relative w-full center-row-x font-medium gap-2">
                    { renderDefault(value) }
                </ListBox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <ListBox.Options className="cursor-pointer w-full absolute z-50 left-0 top-10 mt-1 overflow-auto bg-neutral-300 rounded center-col-y font-medium gap-2">
                        { items.map((current: any, index: number) => renderOptions(current, `${id}-${index}`)) }
                    </ListBox.Options>
                </Transition>
            </div>
        </ListBox>
    );
};

export default CustomListbox;
