import { DocumentNode } from 'graphql';
import { Ref } from 'vue';

import { RowsResult } from '../types/RowsResult';

import { ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { extend } from 'quasar';

export const getRows = (query: DocumentNode, variables: any): RowsResult => {
  const rows: Ref<any[]> = ref([]);

  const { error, onResult } = useQuery(query, variables);

  onResult((queryResult) => {
    rows.value = extend(true, [], queryResult.data.tableRows);
  });

  return {
    error,
    rows,
  }
}
