import React, {
    FC, Fragment, useContext, useId,
} from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Tag } from '@components/Tag';
import { IoMdStopwatch } from 'react-icons/io';
import Avatar from '@components/Common/Avatar';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { RiNodeTree } from 'react-icons/ri';
import { FiMessageCircle } from 'react-icons/fi';
import { formatTag, getTagColor } from '@utils/tags';
import { toDigit } from '@utils/task';
import { formatDate, getScheduleColor } from '@utils/date';
import { Listbox, Transition } from '@headlessui/react';
import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '@gql/mutations.graph';
import { toast } from 'react-hot-toast';
import { AppContenxt } from '@ctx/app.ctx';
import { Loader } from '@components/Common';
import { TaskCardProps } from './props';

const TaskCard: FC<TaskCardProps> = ({
    task, setEdit,
}) => {
    const { tasks } = useContext(AppContenxt)!;
    const [mutateDeleteFn, { loading: deleteLoading }] = useMutation(DELETE_TASK);
    const id = useId();

    const pointAsDigit = toDigit(task.pointEstimate);

    const handleOptions = async (value: string) => {
        try {
            if (value === 'delete') {
                await mutateDeleteFn({
                    variables: {
                        id: task.id,
                    },
                });

                toast.success('Task deleted', { id: `delete-task-${task.id}` });
                tasks.forEach((current) => current.status === task.status && current.refetch());
            } else {
                setEdit(task);
            }
        } catch (err) {
            toast.error('Something went wrong, please try again', {
                id: 'failed-create-request',
            });
        }
    };

    return (
        <section className="w-full min-h-[13rem] rounded-xl bg-neutral-400 px-4 py-3 flex-y justify-between">
            { deleteLoading ? <Loader /> : null }
            <div className="center-row-x justify-between">
                <h1 className="text-l font-bold">{task.name}</h1>
                <Listbox value="edit" onChange={handleOptions}>
                    <div className="relative">
                        <Listbox.Button>
                            <BiDotsHorizontalRounded />
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                className="cursor-pointer absolute z-50 right-0 mt-1 overflow-auto shadow-xl
                                bg-neutral-300 rounded center-col-y font-medium gap-2 px-4 py-2"
                            >
                                <Listbox.Option value="delete">Delete</Listbox.Option>
                                <Listbox.Option value="update">Update</Listbox.Option>
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
            <div className="flex-y gap-4">
                <div className="center-row-x justify-between">
                    <h2 className="text-m font-bold">
                        {pointAsDigit}
                        {' '}
                        { pointAsDigit === 1 ? 'Point' : 'Points' }
                    </h2>
                    <Tag
                        text={formatDate(task.dueDate)}
                        Icon={IoMdStopwatch}
                        variant={getScheduleColor(task.dueDate)}
                    />
                </div>
                <div className="flex gap-2">
                    { task?.tags?.map(
                        (tag, idx) => <Tag key={`${id}-${idx}`} text={formatTag(tag)} variant={getTagColor(tag)} />,
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
};

export default TaskCard;
