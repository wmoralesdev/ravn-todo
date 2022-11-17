import { Status } from './common.model';

export interface User {
    avatar: string;
    createdAt: Date;
    email: string;
    fullName: string;
    id: string;
    type: string;
    updatedAt: Date;
}
