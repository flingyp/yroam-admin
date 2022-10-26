<template>
  <div class="login-page-container">
    <main class="login-form-container">
      <div class="form-container-left">
        <SvgIcon name="LoginCover"></SvgIcon>
      </div>
      <div class="form-container-right">
        <h1>
          <img src="@assets/Img/YRoamLogo.png" alt="YRoam Logo" />
          <span>YRoam Admin 后台管理系统</span>
        </h1>
        <n-form
          class="form-container"
          ref="formRef"
          :label-width="80"
          :model="LoginFormData"
          :rules="LoginRules"
          :size="FormSize"
        >
          <n-form-item path="username">
            <n-input v-model:value="LoginFormData.username" placeholder="请输入个人账号："></n-input>
          </n-form-item>
          <n-form-item path="password">
            <n-input
              v-model:value="LoginFormData.password"
              placeholder="请输入密码："
              type="password"
              show-password-on="click"
            ></n-input>
          </n-form-item>
          <n-form-item>
            <n-button type="primary" @click="handlerUserLogin" style="width: 100%">登录</n-button>
          </n-form-item>
        </n-form>
      </div>
    </main>
    <div class="theme-switch-container">
      <ThemeSwitch></ThemeSwitch>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { userLoginHttp } from '@https/SystemHttps'
  import { setLocalKey } from '@utils/LocalStorage'
  import { FormInst, FormRules, NButton, NForm, NFormItem, NInput, useNotification } from 'naive-ui'
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import { AuthKey } from '@/CONSTANT'

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
  const FormSize = ref<'small' | 'medium' | 'large'>('large')
  const formRef = ref<FormInst | null>(null)

  const notification = useNotification()

  const handlerUserLogin = () => {
    // 验证
    formRef.value?.validate(async errors => {
      if (errors) return

      const loginResData = await userLoginHttp(LoginFormData.username, LoginFormData.password)

      if (loginResData) {
        setLocalKey(AuthKey, loginResData?.token)
        notification.success({
          content: '提示：',
          meta: '登录成功！ 即将进行系统，请稍等',
          duration: 2000,
          onAfterLeave: () => {
            router.push({ name: 'PermissionCommonIndex' })
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
    display: inline;
  }
  @import './Login.scss';
</style>
