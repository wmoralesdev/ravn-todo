import React, { FC } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Tag } from '@components/tags';
import { IoMdStopwatch } from 'react-icons/io';
import Avatar from '@components/common/Avatar';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { RiNodeTree } from 'react-icons/ri';
import { FiMessageCircle } from 'react-icons/fi';

const TaskCard: FC = () => (
    <section className="w-full h-52 rounded-xl bg-neutral-400 px-4 py-3 flex-y justify-between">
        <div className="center-row-x justify-between">
            <h1 className="text-l font-bold">Slack</h1>
            <button type="button" className="text-2xl">
                <BiDotsHorizontalRounded />
            </button>
        </div>
        <div className="flex-y gap-4">
            <div className="center-row-x justify-between">
                <h2 className="text-m font-bold">4 Points</h2>
                <Tag text="Yesterday" Icon={IoMdStopwatch} />
            </div>
            <div className="flex gap-2">
                <Tag text="ios app" variant="green" />
                <Tag text="label" variant="yellow" />
            </div>
            <div className="center-row-x justify-between">
                <Avatar variant="sm" alt="avatar" />
                <div className="flex-x gap-2 text-m">
                    <AiOutlinePaperClip className="text-xl" />
                    <span className="center-row-x gap-1">
                        3
                        {' '}
                        <RiNodeTree className="text-xl" />
                    </span>
                    <span className="center-row-x gap-1">
                        3
                        {' '}
                        <FiMessageCircle className="text-xl" />
                    </span>
                </div>
            </div>
        </div>
    </section>
);

export default TaskCard;
