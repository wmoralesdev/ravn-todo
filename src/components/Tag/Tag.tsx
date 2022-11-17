import classNames from 'classnames';
import React, { FC } from 'react';
import { TagProps } from './prop';

const Tag: FC<TagProps & { className?: string }> = ({
    Icon, text, className, variant = 'tag-neutral',
}) => (
    <span
        className={
            classNames(
                className,
                variant,
            )
        }
    >
        { Icon ? <Icon className="text-2xl" /> : null }
        <span>{ text }</span>
    </span>
);

export default Tag;
