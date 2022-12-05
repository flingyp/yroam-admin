<template>
  <NDataTable
    :columns="TableColumns"
    :data="TableData"
    :bordered="IsBorder"
    :single-line="ColumnSingleLine"
    :single-column="RawSingleLine"
    :size="TableSize"
    :striped="IsStriped"
    :maxHeight="TableMaxHeight"
    :scroll-x="ScrollX"
    :loading="IsLoading"
    :pagination="IsPagination"
  />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { NDataTable } from 'naive-ui'
  import type { PaginationProps } from 'naive-ui'

  defineOptions({ name: 'DataTable' })

  interface DataTableProps {
    TableColumns: Array<any> // 表头数据
    TableData: Array<any> // 表格数据
    IsHaveRawSingleLine?: boolean // 是否有行分割线
    IsHaveColumnSingleLine?: boolean // 是否有列分割线
    IsBorder?: boolean // 是否有边框
    IsPagination?: PaginationProps // 是否分页
    TableSize?: 'small' | 'medium' | 'large' // 表格整体大小
    IsStriped?: boolean // 表格条纹
    TableMaxHeight: number | undefined // 设置数据内容最大高度来固定头部
    ScrollX: number | undefined // 设置表格是否横向滚动
    IsLoading: boolean // 是否显示loading状态
  }

  interface DataTableEmits {
    (e: 'update:IsLoading', show: boolean): boolean
  }

  const props = withDefaults(defineProps<DataTableProps>(), {
    IsBorder: true,
    IsHaveRawSingleLine: true,
    IsHaveColumnSingleLine: true,
    TableSize: 'medium',
    IsStriped: true,
    TableMaxHeight: undefined,
    ScrollX: undefined,
    IsShowLoading: false
  })
  defineEmits<DataTableEmits>()

  const RawSingleLine = computed(() => !props.IsHaveRawSingleLine)
  const ColumnSingleLine = computed(() => !props.IsHaveColumnSingleLine)
</script>
