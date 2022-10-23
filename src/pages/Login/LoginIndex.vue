<template>
  <div class="login-page-container">
    <main class="login-form-container">
      <div class="form-container-left">
        <SvgIcon name="LoginCover"></SvgIcon>
      </div>
      <div class="form-container-right">
        <h1>YRoam Admin 后台管理系统</h1>
        <n-form class="form-container" ref="formRef" :label-width="80" :model="formValue" :rules="rules" :size="size">
          <n-form-item label="姓名" path="user.name">
            <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
          </n-form-item>
          <n-form-item label="年龄" path="user.age">
            <n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
          </n-form-item>
          <n-form-item label="电话号码" path="phone">
            <n-input v-model:value="formValue.phone" placeholder="电话号码" />
          </n-form-item>
          <n-form-item>
            <n-button attr-type="button" @click="handleValidateClick"> 验证 </n-button>
          </n-form-item>
        </n-form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { FormInst, NButton, NForm, NFormItem, NInput, useMessage } from 'naive-ui'
  import { ref } from 'vue'

  const size = ref<'small' | 'medium' | 'large'>('medium')
  const formRef = ref<FormInst | null>(null)
  const message = useMessage()
  const formValue = ref({
    user: {
      name: '',
      age: ''
    },
    phone: ''
  })
  const rules = {
    user: {
      name: {
        required: true,
        message: '请输入姓名',
        trigger: 'blur'
      },
      age: {
        required: true,
        message: '请输入年龄',
        trigger: ['input', 'blur']
      }
    },
    phone: {
      required: true,
      message: '请输入电话号码',
      trigger: ['input']
    }
  }
  const handleValidateClick = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate(errors => {
      if (!errors) {
        message.success('Valid')
      } else {
        console.log(errors)
        message.error('Invalid')
      }
    })
  }
</script>

<style scoped lang="scss">
  @import './Login.scss';
</style>
