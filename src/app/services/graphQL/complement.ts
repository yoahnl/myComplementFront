import {gql} from '@apollo/client/core';

export const GET_COMPLEMENT = gql `
query complement($input: String!)
{
  complements(where: {
    type: $input
  }) {
    id
    name
    description
    type
    image
    dosage
    dosage_description
  }
}
`;
