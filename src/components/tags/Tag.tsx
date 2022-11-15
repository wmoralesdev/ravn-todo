import classNames from 'classnames';
import React, { FC } from 'react';
import { TagProps } from './prop';

const Tag: FC<TagProps & { className?: string }> = ({
    Icon, text, className, variant = 'neutral',
}) => (
    <span
        className={
            classNames(
                'rounded p-2 center-row-x gap-1 font-bold uppercase bg-opacity-10',
                className,
                `tag-${variant}`,
            )
        }
    >
        { Icon ? <Icon className="text-2xl" /> : null }
        <span>{ text }</span>
    </span>
);

export default Tag;
