import {
    FieldValues, SubmitHandler, UseFormHandleSubmit, UseFormRegister, UseFormResetField,
} from 'react-hook-form';

export interface HeaderProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    resetField: UseFormResetField<T>;
    handleSubmit: UseFormHandleSubmit<T>;
    onSubmit: SubmitHandler<T>;
    openModal: () => void;
}
