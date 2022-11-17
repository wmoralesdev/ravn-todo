/* eslint-disable indent */
export const toDigit = (number: string) => {
    switch (number) {
        case 'EIGHT': return 8;
        case 'FOUR': return 4;
        case 'ONE': return 1;
        case 'TWO': return 2;
        case 'ZERO': return 0;
        default: return -1;
    }
};
