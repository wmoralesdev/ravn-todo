import { IconType } from 'react-icons';

export interface TagProps {
    Icon?: IconType;
    text: string;
    variant?: 'neutral' | 'green' | 'blue' | 'yellow' | 'red';
}
