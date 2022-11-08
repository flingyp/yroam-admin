<template>
  <div>
    <DataTable
      v-model:IsLoading="IsShowLoading"
      :TableColumns="Columns"
      :TableData="Data"
      :TableMaxHeight="620"
      :ScrollX="2000"
      :IsPagination="TablePagination"
    ></DataTable>

    <NModal v-model:show="ModifyInfoModal">
      <NCard style="width: 700px" title="修改用户" :bordered="false" size="huge" role="dialog" aria-modal="true">
        <NForm
          class="form-container"
          ref="formRef"
          :model="ModifyModelData"
          label-placement="left"
          label-width="auto"
          require-mark-placement="right-hanging"
          size="medium"
        >
          <NFormItem label="用户名" path="usernameValue">
            <NInput v-model:value="ModifyModelData.username" placeholder="please input username"></NInput>
          </NFormItem>
          <NFormItem label="家庭地址" path="inputValue">
            <NInput v-model:value="ModifyModelData.address" placeholder="please input address"></NInput>
          </NFormItem>
          <NFormItem label="年龄" path="inputValue">
            <NInputNumber v-model:value="ModifyModelData.age" placeholder="please select your age"> </NInputNumber>
          </NFormItem>
          <NFormItem label="邮箱地址" path="inputValue">
            <NInput v-model:value="ModifyModelData.email" placeholder="please input email"></NInput>
          </NFormItem>
        </NForm>
        <div style="text-align: right">
          <NButton style="margin-right: 10px" secondary @click="() => (ModifyInfoModal = false)">取消</NButton>
          <NButton type="info" @click="ModifyUserData">确定</NButton>
        </div>
      </NCard>
    </NModal>
  </div>
</template>

<script setup lang="ts">
  import { fetchTableUser, MockTableUser } from '@https/index'
  import type { DataTableColumns } from 'naive-ui'
  import { NButton, useMessage, NTag, NModal, NCard, NForm, NFormItem, NInput, NInputNumber, useDialog } from 'naive-ui'
  import { h, onMounted, ref, reactive } from 'vue'

  const createColumns = ({
    play
  }: {
    play: (row: MockTableUser, type: 'modify' | 'delete') => void
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
  ]

  const message = useMessage()
  const dialog = useDialog()
  const IsShowLoading = ref(true)
  const TablePagination = reactive({
    page: 1,
    pageSize: 15,
    showSizePicker: true,
    pageSizes: [5, 10, 15, 20],
    onChange: (page: number) => {
      TablePagination.page = page
    },
    onUpdatePageSize: (pageSize: number) => {
      TablePagination.pageSize = pageSize
      TablePagination.page = 1
    }
  })
  const Data = ref<MockTableUser[]>([])
  const ModifyModelData = reactive<MockTableUser>({
    id: '',
    birthday: '',
    status: 0,
    username: '',
    age: 0,
    email: '',

    address: ''
  })
  const ModifyInfoModal = ref(false)
  const Columns = createColumns({
    play(row: MockTableUser, type: 'modify' | 'delete') {
      if (type === 'modify') {
        Object.assign(ModifyModelData, row)
        ModifyInfoModal.value = true
      } else if (type === 'delete') {
        dialog.warning({
          title: '删除用户',
          content: '确定删除用户？',
          positiveText: '删除',
          negativeText: '取消',
          onPositiveClick: () => {
            const findUserIndex = Data.value.findIndex(item => item.id === row.id)
            if (findUserIndex === -1) {
              message.error('用户不存在')
            } else {
              Data.value.splice(findUserIndex, 1)
              message.success('删除成功！')
            }
          },
          onNegativeClick: () => {
            console.log('点击取消删除用户')
          }
        })
      }
    }
  })

  const ModifyUserData = () => {
    Data.value.forEach(item => {
      if (item.id === ModifyModelData.id) {
        Object.assign(item, ModifyModelData)
        message.success('修改成功')
      }
    })
    setTimeout(() => {
      ModifyInfoModal.value = false
    }, 1000)
  }

  onMounted(async () => {
    const TableData = await fetchTableUser()
    if (TableData) {
      Data.value = TableData
      IsShowLoading.value = false
    }
  })
</script>

<style scoped lang="scss">
  .form-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px 10px;
  }
</style>
