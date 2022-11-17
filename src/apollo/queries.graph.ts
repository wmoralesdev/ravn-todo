import { gql } from '@apollo/client';

export const GET_TASKS = gql`
    query getTasksByStatus($status: Status) {
        tasks(input: {
            status: $status
        }) {
            id
            name
            dueDate
            pointEstimate
            tags
            position
            assignee {
                avatar
            }
        }
    }
`;
