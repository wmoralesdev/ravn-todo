import classNames from 'classnames';
import React, { FC } from 'react';
import { AvatarProps } from './props';

const Avatar: FC<AvatarProps> = ({ variant, src, alt }) => (
    <img
        src={src}
        alt={alt}
        className={classNames(
            'rounded-full transition-all hover:scale-105',
            variant === 'sm' && 'w-8 h-8',
            variant === 'md' && 'w-10 h-10',
            variant === 'lg' && 'w-12 h-12',
        )}
    />
);

export default Avatar;
