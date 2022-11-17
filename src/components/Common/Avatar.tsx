import classNames from 'classnames';
import React, { FC } from 'react';
import { AvatarProps } from './props';

const Avatar: FC<AvatarProps> = ({
    variant,
    src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    alt,
}) => (
    <img
        src={src}
        alt={alt}
        className={classNames(
            'rounded-full transition-all aspect-square hover:scale-105',
            variant === 'sm' && 'min-w-[2rem] w-8 min-h-[2rem] h-8',
            variant === 'md' && 'min-w-[2.5rem] w-10 min-h-[2.5rem] h-10',
            variant === 'lg' && 'min-w-[3rem] w-12 min-h-[3rem] h-12',
        )}
    />
);

export default Avatar;
