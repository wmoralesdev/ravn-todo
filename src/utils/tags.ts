/* eslint-disable indent */
import { Tag } from '@models/common.model';

export const getTagColor = (tag: Tag) => {
    switch (tag) {
        case 'ANDROID': return 'tag-yellow';
        case 'IOS': return 'tag-green';
        case 'NODE_JS': return 'tag-neutral';
        case 'RAILS': return 'tag-red';
        case 'REACT': return 'tag-blue';
        default: return 'tag-neutral';
    }
};

export const formatTag = (tag: Tag) => tag.replace('_', ' ');
