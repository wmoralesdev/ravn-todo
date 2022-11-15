import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

const Column: FC<PropsWithChildren & { className?: string }> = ({ children, className }) => (
    <div className={classNames(className, 'flex flex-col items-start gap-y-2')}>
        { children }
    </div>
);

export default Column;
