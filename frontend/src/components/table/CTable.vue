<template>
  <div
    class="q-pa-md"
  >
    <template
      v-if="error"
    >
      <div class="text-h2">
        Something went wrong...
      </div>
    </template>
    <q-table
      v-else
      :columns="columns"
      :visible-columns="visibleColumns"
      :rows="rows"
      :row-key="config.rowKey ?? 'id'"
      separator="cell"
      v-model:selected="$selected"
      :selection="config.selection || 'single'"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <div
              class="row no-wrap justify-center items-center"
            >
              <div
                v-if="!props.selected"
              >
                {{ props.rowIndex }}
              </div>
            </div>
          </q-td>
          <q-td
            v-for="column in columns"
            :key="column.name"
            :props="props"
          >
            <CCell
              v-model="props.row[column.name]"
              :column-config="column"
            />
          </q-td>
        </q-tr>
      </template>
      <template v-slot:bottom>
        <div
          class="row no-wrap justify-end full-width"
        >
          <q-btn round size="sm" color="primary" icon="add" @click="onAddRow" />
        </div>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';

import { TableConfig } from './types/TableConfig';

import { ref } from 'vue';

import { getColumns } from './functions/getColumns';
import { getRows } from './functions/getRows';
import { createRow } from './functions/createRow';

import CCell from './components/CCell.vue';

const props = defineProps<{
  config: TableConfig;
  selected?: any[];
}>();

const { columns, visibleColumns } = getColumns(
  props.config.columns,
  props.config.visibleColumns ?? [],
);

const { error, rows } = getRows(
  props.config.query.gql,
  props.config.query.variables,
);

const $selected: Ref<any[]> = ref([]);

const onAddRow = () => {
  rows.value.push(createRow(columns.value));
}
</script>
