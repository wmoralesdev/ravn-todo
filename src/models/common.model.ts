export type Status = 'BACKLOG' | 'CANCELLED' | 'DONE' | 'IN_PROGRESS' | 'TODO';

export type Tag = 'ANDROID' | 'IOS' | 'NODE_JS' | 'RAILS' | 'REACT';

export const statusAsArray: Status[] = ['BACKLOG', 'TODO', 'IN_PROGRESS', 'DONE', 'CANCELLED'];
