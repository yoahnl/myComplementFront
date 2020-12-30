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

export const GET_USERINFO = gql `
query user($input: ID!) {
  user(id: $input)
  {
      id
      username
      email
      boarded
      age
      weight
      gender
      workout
      Height
      type
  }
}
`;

export const UPDATE_USERINFO = gql `
mutation updateUser($input: updateUserInput)
{
  updateUser(input: $input)
  {
    user {
      id
      age
      weight
      gender
      workout
    }
  }
}
`;
