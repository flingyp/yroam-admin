<template>
  <div>
    <slot name="search"></slot>
    <slot name="handle"></slot>
    <NDataTable
      :bordered="border"
      :loading="loading"
      :single-line="columnSingleLine"
      :single-column="rawSingleLine"
      :size="tableSize"
      :striped="striped"
      :maxHeight="tableMaxHeight"
      :scroll-x="scrollX"
      :pagination="isPagination"
      :columns="tableColumns"
      :data="tableData"
    />
  </div>
</template>

<script setup lang="ts">
  import { NDataTable } from 'naive-ui'
  import type { PaginationProps } from 'naive-ui'

  defineOptions({ name: 'CommonCurd' })

  interface CommonCurdProps {
    tableColumns: Array<any> // 表头数据
    tableData: Array<any> // 表格数据
    loading?: boolean // 是否显示loading状态
    border?: boolean // 是否有边框
    rawSingleLine?: boolean // 是否有行分割线
    columnSingleLine?: boolean // 是否有列分割线
    tableSize?: 'small' | 'medium' | 'large' // 表格整体大小
    striped?: boolean // 表格条纹
    tableMaxHeight?: number | undefined // 设置数据内容最大高度来固定头部
    scrollX?: number | undefined // 设置表格是否横向滚动
    isPagination?: PaginationProps | undefined // 是否分页
  }
  interface CommonCurdEmits {
    (e: 'update:loading', show: boolean): boolean
  }

  withDefaults(defineProps<CommonCurdProps>(), {
    loading: false,
    border: true,
    rawSingleLine: true,
    columnSingleLine: true,
    tableSize: 'medium',
    striped: true,
    tableMaxHeight: undefined,
    scrollX: undefined,
    isPagination: undefined
  })
  defineEmits<CommonCurdEmits>()
</script>
