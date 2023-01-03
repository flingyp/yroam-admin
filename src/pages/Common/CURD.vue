<template>
  <div>
    <CommonCurd
      v-model:loading="tableLoading"
      :tableColumns="tableColumns"
      :tableData="tableData"
      :isPagination="tablePagination"
    >
      <template #search>
        <div class="search-list-container">
          <div v-for="(item, index) in searchList" :key="index">
            <span>{{ item.label }}</span>
            <n-input v-model:value="item.value" type="text" :placeholder="item.placeholder" />
          </div>
          <n-button type="primary" :render-icon="renderIcon('search', 14)" @click="search"> 搜索 </n-button>
          <n-button type="info" :render-icon="renderIcon('clear', 14)" @click="reset"> 重置 </n-button>
        </div>
      </template>

      <template #handle>
        <div class="handle-container">
          <n-button type="primary" :render-icon="renderIcon('add-one', 14)" @click="addData"> 新增 </n-button>
          <n-button type="info" :render-icon="renderIcon('modify', 14)" @click="modifyData"> 修改 </n-button>
          <n-button type="error" :render-icon="renderIcon('delete', 14)" @click="deleteData"> 删除 </n-button>
        </div>
      </template>
    </CommonCurd>

    <NModal v-model:show="modifyInfoModal">
      <NCard style="width: 600px" title="修改用户" :bordered="false" size="huge" role="dialog" aria-modal="true">
        <NForm
          class="form-container"
          ref="formRef"
          :model="modifyModelData"
          label-placement="left"
          label-width="auto"
          require-mark-placement="right-hanging"
          size="medium"
        >
          <NFormItem label="用户名" path="usernameValue">
            <NInput v-model:value="modifyModelData.username" placeholder="please input username"></NInput>
          </NFormItem>
          <NFormItem label="家庭地址" path="inputValue">
            <NInput v-model:value="modifyModelData.address" placeholder="please input address"></NInput>
          </NFormItem>
          <NFormItem label="年龄" path="inputValue">
            <NInputNumber v-model:value="modifyModelData.age" placeholder="please select your age"> </NInputNumber>
          </NFormItem>
          <NFormItem label="邮箱地址" path="inputValue">
            <NInput v-model:value="modifyModelData.email" placeholder="please input email"></NInput>
          </NFormItem>
        </NForm>
        <div style="text-align: right">
          <NButton style="margin-right: 10px" secondary @click="() => (modifyInfoModal = false)">取消</NButton>
          <NButton type="info" @click="modifyUserData">确定</NButton>
        </div>
      </NCard>
    </NModal>
  </div>
</template>

<script setup lang="ts">
  import { h, onMounted, ref, reactive } from 'vue'
  import { NButton, useMessage, NTag, NModal, NCard, NForm, NFormItem, NInput, NInputNumber, useDialog } from 'naive-ui'
  import type { DataTableColumns, PaginationProps } from 'naive-ui'
  import { fetchTableUser, MockTableUser } from '@https/index'
  import { renderIcon } from '@components/index'

  const message = useMessage()
  const dialog = useDialog()
  type PlayActions = 'modify' | 'delete'
  const createColumns = ({
    play
  }: {
    play: (row: MockTableUser, type: PlayActions) => void
  }): DataTableColumns<MockTableUser> => [
    {
      title: 'id',
      key: 'id',
      fixed: 'left',
      width: 200
    },
    {
      title: '姓名',
      key: 'username',
      width: 100
    },
    {
      title: '年龄',
      key: 'age',
      width: 60
    },
    {
      title: '出生日期',
      key: 'birthday',
      width: 120
    },
    {
      title: '地址',
      key: 'address'
    },
    {
      title: '邮箱',
      key: 'email'
    },
    {
      title: '账号状态',
      key: 'status',
      width: 100,
      render(row) {
        const CurrentStatus = row.status === 1 ? 'success' : 'warning'
        const CurrentLabel = row.status === 1 ? '正常' : '已禁用'
        return h(
          NTag,
          {
            type: CurrentStatus
          },
          { default: () => CurrentLabel }
        )
      }
    },
    {
      title: '行为',
      key: 'actions',
      width: 200,
      fixed: 'right',
      render(row) {
        return [
          h(
            NButton,
            {
              type: 'primary',
              size: 'small',
              style: {
                marginRight: '6px'
              },
              onClick: () => play(row, 'modify')
            },
            { default: () => '修改' }
          ),
          h(
            NButton,
            {
              strong: true,
              tertiary: true,
              size: 'small',
              onClick: () => play(row, 'delete')
            },
            { default: () => '删除' }
          )
        ]
      }
    }
  ] // 创建表头的函数

  /**
   * 表格部分
   */
  const tableLoading = ref(false) // 表格是否Loading
  const modifyInfoModal = ref(false) // 修改信息模态框
  const modifyModelData = reactive<MockTableUser>({
    id: '',
    birthday: '',
    status: 0,
    username: '',
    age: 0,
    email: '',
    address: ''
  })
  const tablePagination = reactive<PaginationProps>({
    page: 1,
    pageSize: 10,
    showSizePicker: true,
    pageSizes: [5, 10, 15, 20],
    onChange: (page: number) => {
      tablePagination.page = page
    },
    onUpdatePageSize: (pageSize: number) => {
      tablePagination.pageSize = pageSize
      tablePagination.page = 1
    }
  }) // 分页配置
  const tableData = ref<MockTableUser[]>([]) // 表格数据
  const tableColumns = createColumns({
    play(row: MockTableUser, type: PlayActions) {
      if (type === 'modify') {
        Object.assign(modifyModelData, row)
        modifyInfoModal.value = true
      } else if (type === 'delete') {
        dialog.warning({
          title: '删除用户',
          content: '确定删除用户？',
          positiveText: '删除',
          negativeText: '取消',
          onPositiveClick: () => {
            const findUserIndex = tableData.value.findIndex(item => item.id === row.id)
            if (findUserIndex === -1) {
              message.error('用户不存在')
            } else {
              tableData.value.splice(findUserIndex, 1)
              message.success('删除成功！')
            }
          },
          onNegativeClick: () => {
            console.log('点击取消删除用户')
          }
        })
      }
    }
  }) // 表头部分

  // 修改用户数据
  const modifyUserData = () => {
    tableData.value.forEach(item => {
      if (item.id === modifyModelData.id) {
        Object.assign(item, modifyModelData)
        message.success('修改成功')
      }
    })
    setTimeout(() => {
      modifyInfoModal.value = false
    }, 1000)
  }

  /**
   * 搜索部分
   */
  type SearchKeys = 'userid' | 'username' | 'useremail'
  interface Search {
    label: string
    key: SearchKeys
    placeholder: string
    value: string
  }
  const searchList = reactive<Search[]>([
    {
      label: '用户ID',
      key: 'userid',
      placeholder: '请输入用户ID',
      value: ''
    },
    {
      label: '用户姓名',
      key: 'username',
      placeholder: '请输入用户姓名',
      value: ''
    },
    {
      label: '用户邮箱',
      key: 'useremail',
      placeholder: '请输入用户邮箱',
      value: ''
    }
  ])
  // 点击搜索
  const search = () => {}
  // 点击重置
  const reset = () => {
    searchList.forEach(item => {
      item.value = ''
    })
  }

  /**
   * 操作按钮部分
   */
  // 点击新增
  const addData = () => {}
  // 点击修改
  const modifyData = () => {}
  // 点击删除
  const deleteData = () => {}

  onMounted(async () => {
    const TableData = await fetchTableUser()
    if (TableData) {
      tableData.value = TableData
      tableLoading.value = false
    }
  })
</script>

<style lang="scss" scoped>
  .n-input:not(.n-input--autosize) {
    width: auto;
  }

  .search-list-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .search-list-container {
    & > div {
      margin-right: 20px;

      & > span {
        display: inline-block;
        margin-right: 5px;
      }
    }

    & > .n-button:not(:last-child) {
      margin-right: 10px;
    }
  }

  .handle-container {
    margin-bottom: 20px;

    & > .n-button {
      width: 100px;
    }
    & > .n-button:not(:last-child) {
      margin-right: 10px;
    }
  }

  .form-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px 10px;
  }
</style>
