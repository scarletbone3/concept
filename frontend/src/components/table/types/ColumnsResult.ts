import { Ref } from 'vue';

import { TableColumn } from './TableConfig';

export interface ColumnsResult {
  columns: Ref<TableColumn[]>;
  visibleColumns: Ref<string[]>;
}
