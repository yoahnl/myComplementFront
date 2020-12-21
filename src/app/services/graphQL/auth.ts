import {gql} from '@apollo/client/core';

export const LOGIN_AUTH = gql `
mutation login($input: UsersPermissionsLoginInput!)
{
  login(input: $input)
  {
    jwt
    user {
      username
      email
      id
      confirmed
    }
  }
}
`;

export const REGISTRER_AUTH = gql `
mutation newUser($input: createUserInput) {
  createUser(input: $input) {
    user {
      username
      email
    }
  }
}
`;

export const GET_USER = gql `
query user($input: ID!) {
  user(id: $input)
  {
    username
    email
    boarded
  }
}
`;
