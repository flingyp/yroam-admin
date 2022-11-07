<template>
    <DataTable :TableColumns="Columns" :TableData="Data"></DataTable>
</template>

<script setup lang="ts">
import { tableMockHttp, UserDemo } from '@https/index';
import type { DataTableColumns } from 'naive-ui';
import { NButton, useMessage, NTag } from 'naive-ui';
import { h, onMounted, ref } from 'vue';

const createColumns = ({ play }: { play: (row: UserDemo) => void }): DataTableColumns<UserDemo> => [
    {
        title: '姓名',
        key: 'name',
    },
    {
        title: '出生日期',
        key: 'date',
    },
    {
        title: '地址',
        key: 'address',
    },
    {
        title: '账号状态',
        key: 'status',
        render(row) {
            const CurrentStatus = row.status === 1 ? 'success' : 'warning';
            const CurrentLabel = row.status === 1 ? '正常' : '已禁用';
            return h(
                NTag,
                {
                    type: CurrentStatus,
                },
                { default: () => CurrentLabel },
            );
        },
    },
    {
        title: '行为',
        key: 'actions',
        render(row) {
            return [
                h(
                    NButton,
                    {
                        size: 'small',
                        type: 'primary',
                        style: {
                            marginRight: '6px',
                        },
                        onClick: () => play(row),
                    },
                    { default: () => '添加' },
                ),
                h(
                    NButton,
                    {
                        strong: true,
                        tertiary: true,
                        size: 'small',
                        style: {
                            marginRight: '6px',
                        },
                        onClick: () => play(row),
                    },
                    { default: () => '修改' },
                ),
                h(
                    NButton,
                    {
                        strong: true,
                        tertiary: true,
                        size: 'small',
                        onClick: () => play(row),
                    },
                    { default: () => '删除' },
                ),
            ];
        },
    },
];

const message = useMessage();

const Columns = createColumns({
    play(row: UserDemo) {
        message.info(`Play ${row.name}`);
    },
});

const Data = ref<UserDemo[]>([]);
onMounted(async () => {
    const TableData = await tableMockHttp();
    if (TableData) Data.value = TableData;
});
</script>
