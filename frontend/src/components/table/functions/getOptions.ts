import { DocumentNode } from 'graphql';
import { Ref } from 'vue';

import { OptionsResult } from '../types/OptionsResult';

import { ref } from 'vue';
import gql from 'graphql-tag';
import * as gqlBuilder from 'gql-query-builder';
import pluralize from 'pluralize';
import { useQuery } from '@vue/apollo-composable';

export const getOptions = (entity?: string, nameField?: string, query?: DocumentNode): OptionsResult => {
  const options: Ref<any[]> = ref([]);

  const _query = gqlBuilder.query({
    operation: `entities: ${pluralize.plural(entity ?? 'entity')}`,
    fields: ['id', nameField ?? 'name'],
  });

  const $query = gql`
    ${_query.query}
  `;

  const { onResult, loading, error } = useQuery(query ?? $query);

  onResult((queryResult) => {
    options.value = queryResult.data.entities
  })

  return {
    options,
    loading,
    error,
  }
}
