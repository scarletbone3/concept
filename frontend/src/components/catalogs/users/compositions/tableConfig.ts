import { TableConfig } from 'src/components/table/types/TableConfig';

import { GET_USERS } from '../graphql/getUsers';

export const tableConfig: TableConfig = {
  entity: 'user',
  query: {
    gql: GET_USERS,
    variables: {},
  },
  columns: [
    {
      name: 'name',
      label: 'Name',
      field: 'name',
      fieldName: 'name',
      input: 'text',
      align: 'left',
    },
    {
      name: 'email',
      label: 'Email',
      field: 'email',
      fieldName: 'email',
      input: 'text',
      align: 'left',
    },
    {
      name: 'posts',
      label: 'Posts',
      field: 'posts',
      fieldName: 'posts',
      input: 'select',
      align: 'left',
      entity: 'post',
      nameField: 'title',
      multiple: true,
    }
  ],
  selection: 'multiple',
};
