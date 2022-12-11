import { gql } from '@apollo/client';

// Fragment for all of these
// Have this mutation with same data requirement as completed task
export const CREATE_TASK = gql`
    mutation createTask($input: CreateTaskInput!) {
        createTask(input: $input) {
            id
            name
            dueDate
            pointEstimate
            tags
            position
            assignee {
                id
                avatar
                fullName
            }
        }
    }
`;

export const DELETE_TASK = gql`
    mutation deleteTask($input: DeleteTaskInput!) {
        deleteTask(input: $input) {
            id
        }
    }
`;

// Modify
export const UPDATE_TASK = gql`
    mutation update($input: UpdateTaskInput!) {
        updateTask(input: $input) {
            id
            name
            dueDate
            pointEstimate
            tags
            position
            assignee {
                id
                avatar
                fullName
            }
        }
    }
`;
