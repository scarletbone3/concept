<template>
  <CTable
    :config="tableConfig"
  />
</template>

<script setup lang="ts">
import { tableConfig } from './compositions/tableConfig';

import CTable from 'src/components/table/CTable.vue';
</script>
