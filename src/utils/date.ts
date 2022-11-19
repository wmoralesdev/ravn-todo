import dayjs from 'dayjs';

export const formatDate = (date: string) => new Date(date).toLocaleDateString('en-us', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
});

export const getScheduleColor = (date: string) => {
    const dueDate = dayjs(date);
    const today = dayjs(new Date().toLocaleDateString());

    if (today.isAfter(dueDate, 'd')) return 'tag-red';
    if (today.add(2, 'd').isSame(dueDate, 'd') || today.isSame(dueDate, 'd')) return 'tag-yellow';

    return 'tag-neutral';
};
