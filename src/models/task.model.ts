import { Status, Tag } from './common.model';
import { User } from './user.model';

export interface Task {
    assignee: Partial<User>;
    createdAt: Date;
    creator: Partial<User>;
    dueDate: Date;
    id: string;
    name: string;
    pointEstimate: string;
    position: number;
    status: Status;
    tags: Tag[];
}
