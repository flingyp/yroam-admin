<template>
  <div class="signin-container">
    <div class="signin__weclome-label">欢迎登录</div>
    <NForm
      class="signin__form-container"
      ref="formRef"
      size="medium"
      :show-feedback="false"
      :model="LoginFormData"
      :rules="LoginRules"
    >
      <NFormItem path="username">
        <NInput v-model:value="LoginFormData.username" placeholder="请输入个人账号："></NInput>
      </NFormItem>
      <NFormItem path="password">
        <NInput
          v-model:value="LoginFormData.password"
          placeholder="请输入密码："
          type="password"
          show-password-on="click"
        ></NInput>
      </NFormItem>
      <NFormItem>
        <NButton type="primary" @click="handlerUserLogin" style="width: 100%">登录</NButton>
      </NFormItem>
    </NForm>
    <!-- <div class="signin__register-container">还没有账号,去注册</div> -->
  </div>
</template>

<script setup lang="ts">
  import { setLocalKey } from '@utils/LocalStorage'
  import { FormInst, FormRules, NButton, NForm, NFormItem, NInput, useNotification } from 'naive-ui'
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { fetchUserLogin } from '@https/index'

  import { AuthKey, SystemHomeKey } from '@/CONSTANT'

  const router = useRouter()

  const LoginFormData = reactive({
    username: 'admin',
    password: '123456'
  })

  const LoginRules: FormRules = {
    username: [
      {
        required: true,
        message: '请输入用户名',
        trigger: ['input', 'blur']
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: ['blur']
      }
    ]
  }
  const formRef = ref<FormInst | null>(null)

  const notification = useNotification()

  const handlerUserLogin = () => {
    // 验证
    formRef.value?.validate(async errors => {
      if (errors) return
      const loginResData = await fetchUserLogin(LoginFormData.username, LoginFormData.password)
      if (loginResData) {
        setLocalKey(AuthKey, loginResData?.token)
        notification.success({
          content: '提示：',
          meta: '登录成功！ 即将进行系统，请稍等',
          duration: 2000,
          onAfterLeave: () => {
            router.push({ name: SystemHomeKey })
          }
        })
      } else {
        notification.error({
          content: '提示：',
          meta: '用户名或密码错误',
          duration: 3000
        })
      }
    })
  }
</script>

<style scoped lang="scss">
  .n-form-item {
    display: block;
    width: 300px;
  }
  .n-form-item:not(:last-child) {
    margin-bottom: 10px;
  }

  .signin-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & > .signin__weclome-label {
      font-size: 22px;
      font-weight: 700;
    }

    & > .signin__form-container {
      margin: 20px 0 12px 0;
    }

    & > .signin__register-container {
      text-align: right;
      font-size: 14px;
      color: #a0aec0;
      cursor: pointer;
    }
  }
</style>
