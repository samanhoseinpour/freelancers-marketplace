export const getUserQuery = `
    query GetUser($email: Email!) {
        user(by: { email: $email }) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedInUrl
        }
    }
`;

export const createUserMutation = `
    mutation CreateUser($input: UserCreateInput!) {
        userCreate(input: $input) {
            user {
                id
                name
                email
                avatarUrl
                description
                githubUrl
                linkedInUrl
            }
        }
    }
`;
