import { QTableColumn } from 'quasar';
import { DocumentNode } from 'graphql';

export interface TableColumn extends QTableColumn {
  fieldName: string;
  input: 'text' | 'select' | 'boolean';
  entity?: string;
  nameField?: string;
  query?: DocumentNode;
  multiple?: boolean;
}

export interface TableConfig {
  entity: string;
  rowKey?: string;
  query: {
    gql: DocumentNode;
    variables: any;
  };
  columns: TableColumn[];
  visibleColumns?: string[];
  selection?: 'single' | 'multiple';
}
