<template>
    <NDataTable :columns="TableColumns" :data="TableData" :bordered="isBorder" :pagination="isPagination"
        :single-line="ColumnSingleLine" :single-column="RawSingleLine" :size="TableSize" :striped="isStriped" />

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NDataTable } from 'naive-ui';
import type { PaginationProps, DataTableColumns } from 'naive-ui';

interface DataTableProps {
    TableColumns: Array<any> // 表头数据
    TableData: Array<any> // 表格数据
    isHaveRawSingleLine?: boolean // 是否有行分割线
    isHaveColumnSingleLine?: boolean // 是否有列分割线
    isBorder?: boolean // 是否有边框
    isPagination?: false | PaginationProps // 是否分页
    TableSize?: 'small' | 'medium' | 'large'
    isStriped?: boolean
}

const props = withDefaults(defineProps<DataTableProps>(), {
    isBorder: true,
    isPagination: false,
    isHaveRawSingleLine: true,
    isHaveColumnSingleLine: true,
    TableSize: 'medium',
    isStriped: true,
});

const RawSingleLine = computed(() => (!props.isHaveRawSingleLine));
const ColumnSingleLine = computed(() => (!props.isHaveColumnSingleLine));

</script>

<script lang="ts">
export default { name: 'DataTable' };
</script>
