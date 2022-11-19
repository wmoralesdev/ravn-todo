import { Task } from '@models/task.model';
import { Dispatch, SetStateAction } from 'react';

export interface TaskCardProps {
    task: Task;
    setEdit: Dispatch<SetStateAction<Task | undefined>>;
}
