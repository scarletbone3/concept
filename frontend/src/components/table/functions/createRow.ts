import { TableColumn } from '../types/TableConfig';

export const createRow = (columns: TableColumn[]): any => {
  return columns.reduce((acc, i) => {
    acc[i.name] = i.input === 'text'
      ? ''
      : i.multiple
        ? []
        : null;
    return acc;
  }, {} as any);
}
