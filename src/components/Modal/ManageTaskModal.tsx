import DatePicker from 'react-datepicker';
import { Dialog, Listbox } from '@headlessui/react';
import React, {
    FC, useContext, useState,
} from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';
import { ReactComponent as PointEstimateIcon } from '@assets/estimate.svg';
import { ReactComponent as LabelIcon } from '@assets/label.svg';
import { ReactComponent as AssigneeIcon } from '@assets/assignee.svg';
import { ReactComponent as CalendarIcon } from '@assets/calendar.svg';
import { CreateTask } from '@models/task.model';
import { CustomListbox } from '@components/Listbox';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ASSIGNEES } from '@gql/queries.graph';
import { Loader } from '@components/Common';
import { User } from '@models/user.model';
import Avatar from '@components/Common/Avatar';
import { toast } from 'react-hot-toast';
import { CREATE_TASK, UPDATE_TASK } from '@gql/mutations.graph';
import { AppContenxt } from '@ctx/app.ctx';
import 'react-datepicker/dist/react-datepicker.css';
import { toDigit } from '@utils/task';
import { formatTag } from '@utils/tags';
import { Tag } from '@models/common.model';
import { ManageTaskModalProps } from './props';
import Modal from './Modal';

const ManageTaskModal: FC<ManageTaskModalProps> = (
    {
        modalStatus, openModal, closeModal, task, mode,
    },
) => {
    const { tasks } = useContext(AppContenxt)!;
    const [dueDate, setDueDate] = useState<Date>();
    const { data, loading } = useQuery(GET_ASSIGNEES);
    const [mutateFn, { loading: mutateLoading }] = useMutation(CREATE_TASK);
    const [mutateUpdateFn, { loading: mutateUpdating }] = useMutation(UPDATE_TASK);
    const {
        control, handleSubmit, register,
    } = useForm<Partial<CreateTask>>({
        defaultValues: {
            name: task?.name,
            pointEstimate: task && task.pointEstimate ? {
                name: `${toDigit(task.pointEstimate)} Points`,
                value: task.pointEstimate,
            } : undefined,
            status: task?.status,
            tags: task && task.tags ? (
                task.tags.map((tag) => (formatTag(tag) as Tag))
            ) : [],
            assignee: task ? task.assignee : undefined,
        },
    });

    const onSubmit = async (formData: Partial<CreateTask>) => {
        try {
            const body = {
                variables: {
                    input: {
                        assigneeId: formData?.assignee?.id,
                        dueDate,
                        name: formData.name,
                        pointEstimate: formData?.pointEstimate?.value,
                        status: 'TODO',
                        tags: formData?.tags?.map((tag) => tag.replace(' ', '_')),
                    },
                },
            };

            if (mode === 'edit') await mutateUpdateFn(body);
            else await mutateFn(body);

            closeModal();
            toast.success(`Task ${mode === 'edit' ? 'updated' : 'created'}`, { id: mode === 'new' ? 'task-created' : `task-updated-${task?.id}` });
            tasks?.forEach((current) => current.status === 'TODO' && current.refetch());
        } catch (err) {
            toast.error('Something went wrong, please try again', {
                id: 'failed-create-request',
            });
        }
    };

    const onErrors = (errors: FieldErrors) => {
        const error = Object.values(errors)[0]?.message;
        toast.error(error as string, { id: `failed-create-${error}` });
    };

    return (
        <Modal modalStatus={modalStatus} openModal={openModal} closeModal={closeModal}>
            { loading || mutateLoading || mutateUpdating ? <Loader /> : null }
            <Dialog.Panel className="mx-auto w-full h-full bg-neutral-500 p-8 lg:p-4 lg:rounded-xl lg:shadow-xl lg:max-w-2xl lg:h-auto">
                <form onSubmit={handleSubmit(onSubmit, onErrors)}>
                    <div className="flex-x items-end justify-between lg:hidden">
                        <button className="" type="button" onClick={closeModal}>
                            <IoMdClose className="text-xl" />
                        </button>
                        <button className="disabled:text-neutral-200" type="submit">
                            Create
                        </button>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <input
                            type="text"
                            className="w-full border-none bg-transparent disp-xs peer focus:ring-0 focus-visible:outline-0"
                            placeholder="Task Title"
                            {...register('name', {
                                required: 'Task title is required',
                            })}
                        />
                        <div className="w-fulll flex-y mt-8 gap-4 lg:flex-x">
                            <CustomListbox
                                items={[
                                    { name: '0 Points', value: 'ZERO' },
                                    { name: '1 Points', value: 'ONE' },
                                    { name: '2 Points', value: 'TWO' },
                                    { name: '4 Points', value: 'FOUR' },
                                    { name: '8 Points', value: 'EIGHT' },
                                ]}
                                controller={{
                                    name: 'pointEstimate',
                                    control,
                                    rules: { required: 'Point estimate is required' },
                                    defaultValue: undefined,
                                }}
                                renderDefault={(current) => (
                                    <>
                                        <PointEstimateIcon />
                                        <span>{current?.name || 'Estimate'}</span>
                                    </>
                                )}
                                renderOption={(option, key: string) => (
                                    <Listbox.Option
                                        className="center-row-x gap-x-2 px-4 py-2 ui-active:bg-neutral-400"
                                        key={key}
                                        value={option}
                                    >
                                        <PointEstimateIcon />
                                        <span>{option.name}</span>
                                    </Listbox.Option>
                                )}
                            />
                            <CustomListbox
                                multiple
                                items={[
                                    'ANDROID',
                                    'IOS',
                                    'NODE JS',
                                    'RAILS',
                                    'REACT',
                                ]}
                                controller={{
                                    name: 'tags',
                                    control,
                                    rules: { required: 'At least one tag should be selected' },
                                }}
                                renderDefault={(value?: string | string[]) => (
                                    <>
                                        <LabelIcon />
                                        <span>{(value as string[]).length === 0 ? 'Label' : (value as string[]).join(', ')}</span>
                                    </>
                                )}
                                renderOption={(option: string, key: string) => (
                                    <Listbox.Option
                                        className="center-row-x gap-x-2 px-4 py-2 ui-selected:bg-neutral-400"
                                        key={key}
                                        value={option}
                                    >
                                        <LabelIcon />
                                        <span>{option}</span>
                                    </Listbox.Option>
                                )}
                            />
                            <CustomListbox
                                items={data?.users ?? []}
                                controller={{
                                    name: 'assignee',
                                    control,
                                    rules: { required: 'Assignee is required' },
                                    defaultValue: undefined,
                                }}
                                renderDefault={(value?: Partial<User> | 'Assignee') => (value === undefined ? (
                                    <>
                                        <AssigneeIcon />
                                        <span>Assignee</span>
                                    </>
                                ) : (
                                    <>
                                        <Avatar src={(value as Partial<User>)?.avatar} alt={(value as Partial<User>)?.fullName || 'assignee'} variant="sm" />
                                        <span>{(value as Partial<User>)?.fullName}</span>
                                    </>
                                ))}
                                renderOption={(option: Partial<User>, key: string) => (
                                    <Listbox.Option
                                        className="center-row-x gap-x-2 px-4 py-2 ui-selected:bg-neutral-400"
                                        key={key}
                                        value={option}
                                    >
                                        <Avatar src={option.avatar} alt={option.fullName || 'assignee'} variant="sm" />
                                        <span>{option.fullName}</span>
                                    </Listbox.Option>
                                )}
                            />
                            <div className="bg-neutral-300 rounded font-medium center-row-x px-4 lg:flex-1">
                                <CalendarIcon />
                                <DatePicker
                                    className="w-full bg-transparent border-none text-white placeholder:text-white focus:ring-0"
                                    placeholderText="Due Date"
                                    startDate={new Date()}
                                    selected={dueDate}
                                    onChange={(date) => setDueDate(date!)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex-x items-center justify-end mt-8 gap-x-6">
                        <button className="disabled:text-neutral-200" type="button" onClick={closeModal}>
                            Cancel
                        </button>
                        <button className="rounded bg-primary-200 font-medium p-2 px-4" type="submit">
                            Create
                        </button>
                    </div>
                </form>
            </Dialog.Panel>
        </Modal>
    );
};

export default ManageTaskModal;
