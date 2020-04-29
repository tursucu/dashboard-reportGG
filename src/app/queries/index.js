const gql = require('graphql-tag');

export const GET_CURRENT_USER = gql`
  query {
    currentUser {
      email
      name
      role
    }
  }
`;

export const GET_LOGIN_USER = gql`
  mutation($email: String!, $password: String!) {
    signIn(data: { password: $password, email: $email }) {
      token
    }
  }
`;

export const GET_LEAGUE = gql`
  mutation(
    $region: String!
    $tier: String!
    $division: String!
    $queue: String!
  ) {
    leagueV1(
      data: { region: $region, tier: $tier, division: $division, queue: $queue }
    ) {
      status
    }
  }
`;
