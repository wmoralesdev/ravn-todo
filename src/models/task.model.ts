import { PointEstimate, Status, Tag } from './common.model';
import { User } from './user.model';

export interface Task {
    assignee: Partial<User>;
    createdAt: string;
    creator: Partial<User>;
    dueDate: string;
    id: string;
    name: string;
    pointEstimate: PointEstimate;
    position: number;
    status: Status;
    tags: Tag[];
}

export interface CreateTask {
    assignee: User;
    dueDate: Date;
    name: string;
    pointEstimate: {
        name: string;
        value: PointEstimate;
    }
    status: Status;
    tags: Tag[];
}
