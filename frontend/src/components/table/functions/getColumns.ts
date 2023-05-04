import { Ref } from 'vue';

import { TableColumn } from '../types/TableConfig';
import { ColumnsResult } from '../types/ColumnsResult';

import { ref } from 'vue';
import { extend } from 'quasar';

export const getColumns = (_columns: TableColumn[], _visibleColumns: string[]): ColumnsResult => {
  const columns: Ref<TableColumn[]> = ref(extend(true, [], _columns));
  const visibleColumns: Ref<string[]> = ref(
    _visibleColumns?.length > 0
      ? [..._visibleColumns]
      : [..._columns.map(column => column.name)]
  );

  columns.value.unshift({
    name: 'id',
    label: 'id',
    field: 'id',
    fieldName: 'id',
    input: 'text',
  });

  return {
    columns,
    visibleColumns,
  }
}
