export interface ModalProps {
    modalStatus: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export interface ManageTaskModalProps extends ModalProps {
    mode: 'new' | 'edit';
}
