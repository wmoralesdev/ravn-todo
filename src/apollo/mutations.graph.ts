import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
    mutation createTask($input: CreateTaskInput!) {
        createTask(input: $input) {
            id
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

export const UPDATE_TASK = gql`
    mutation deleteTask($input: DeleteTaskInput!) {
        deleteTask(input: $input) {
            id
        }
    }
`;
