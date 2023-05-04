<template>
  <q-input
    v-if="columnConfig.input === 'text'"
    :model-value="modelValue"
    @update:model-value="onUpdate"
    borderless
    dense
  />
  <q-select
    v-if="columnConfig.input === 'select'"
    :model-value="modelValue"
    @update:model-value="onUpdate"
    :options="options"
    :multiple="Boolean(columnConfig.multiple)"
    borderless
    dense
    option-value="id"
    :option-label="columnConfig.nameField || 'name'"
  >
    <template v-slot:no-option>
      <div
        v-if="loading"
      >
        Loading...
      </div>
      <div
        v-if="error"
      >
        Internal server error...
      </div>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import { TableColumn } from '../types/TableConfig';

import { getOptions } from '../functions/getOptions'

const props = defineProps<{
  modelValue: any;
  columnConfig: TableColumn;
}>();

const emits = defineEmits(['update:modelValue']);

const { options, loading, error } = getOptions(
  props.columnConfig.entity,
  props.columnConfig.nameField,
  props.columnConfig.query,
);

const onUpdate = (value: any) => {
  emits('update:modelValue', value);
}
</script>
