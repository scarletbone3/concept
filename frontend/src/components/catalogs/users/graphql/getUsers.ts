import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export const GET_USERS: DocumentNode = gql`
  query GET_USERS (
    $where: UserWhereInput,
    $orderBy: [UserOrderByInput!],
    $take: Int,
    $skip: Int
  ) {
    tableRows: users (
      where: $where,
      orderBy: $orderBy,
      take: $take,
      skip: $skip,
    ) {
      id
      name
      email
      posts {
        id
        title
      }
    }
  }
` as DocumentNode;
