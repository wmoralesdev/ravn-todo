import classNames from 'classnames';
import React, { FC } from 'react';

const Loader: FC = () => (
    <div className={classNames('bg-black w-screen h-screen fixed top-0 left-0 z-50 bg-opacity-50 center-row-xy')}>
        <div className="animate-stuttered-spin w-12 h-12 bg-white shadow-xl" />
    </div>
);

export default Loader;
