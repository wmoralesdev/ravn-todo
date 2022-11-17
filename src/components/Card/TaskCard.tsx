import React, { FC } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Tag } from '@components/Tag';
import { IoMdStopwatch } from 'react-icons/io';
import Avatar from '@components/Common/Avatar';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { RiNodeTree } from 'react-icons/ri';
import { FiMessageCircle } from 'react-icons/fi';
import { formatTag, getTagColor } from '@utils/tags';
import { toDigit } from '@utils/task';
import { TaskCardProps } from './props';

const TaskCard: FC<TaskCardProps> = ({ task }) => (
    <section className="w-full min-h-[13rem] rounded-xl bg-neutral-400 px-4 py-3 flex-y justify-between">
        <div className="center-row-x justify-between">
            <h1 className="text-l font-bold">{task.name}</h1>
            <button type="button" className="text-2xl">
                <BiDotsHorizontalRounded />
            </button>
        </div>
        <div className="flex-y gap-4">
            <div className="center-row-x justify-between">
                <h2 className="text-m font-bold">
                    {toDigit(task.pointEstimate)}
                    {' '}
                    Points
                </h2>
                <Tag text="Yesterday" Icon={IoMdStopwatch} />
            </div>
            <div className="flex gap-2">
                { task?.tags?.map(
                    (tag) => <Tag text={formatTag(tag)} variant={getTagColor(tag)} />,
                )}
            </div>
            <div className="center-row-x justify-between">
                <Avatar variant="sm" src={task.assignee.avatar} alt="avatar" />
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
