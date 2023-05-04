import { ApolloError } from '@apollo/client/errors';
import { Ref } from 'vue';

export interface RowsResult {
  error: Ref<ApolloError | null>;
  rows: Ref<any[]>;
}
