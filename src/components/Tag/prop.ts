import { IconType } from 'react-icons';

export interface TagProps {
    Icon?: IconType;
    text: string;
    variant?: 'tag-neutral' | 'tag-green' | 'tag-blue' | 'tag-yellow' | 'tag-red';
}
