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
                id
                avatar
                fullName
            }
        }
    }
`;

export const GET_PROFILE = gql`
    query getProfile {
        profile {
            avatar
            fullName
            id
        }
    }
`;

export const GET_ASSIGNEES = gql`
    query getAssignees {
        users {
            avatar
            fullName
            id
        }
    }
`;
