import { Task } from '@models/task.model';

export interface ModalProps {
    modalStatus: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export interface ManageTaskModalProps extends ModalProps {
    mode: 'new' | 'edit';
    task?: Partial<Task>;
}
