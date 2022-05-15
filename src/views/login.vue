<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" :rules="rules" size="large" class="form-wrapper">
      <el-form-item prop="username">
        <el-input v-model.trim="form.username" placeholder="用户名" :prefix-icon="User" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model.trim="form.password" placeholder="密码" show-password :prefix-icon="Lock" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :loading="loading" @click="onSubmit" style="width: 100%">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { User, Lock } from '@element-plus/icons-vue'
  import { login } from '@/api/user.api'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const formRef = ref(null)
  const loading = ref(false)
  const form = reactive({ username: 'chunlei.lcl@naturobot.com', password: '123456' })
  const rules = {
    username: { required: true, message: '请输入用户名', trigger: 'blur' },
    password: { required: true, message: '请输入密码', trigger: 'blur' }
  }

  const onSubmit = async () => {
    await formRef.value.validate()

    loading.value = true

    login(form)
      .then(res => {
        localStorage.token = res.token
        router.push('/')
      })
      .finally(() => (loading.value = false))
  }
</script>

<style scoped lang="scss">
  .login-container {
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    :deep(.form-wrapper) {
      max-width: 100%;
      width: 500px;

      padding: 50px;
      border-radius: 10px;
      box-shadow: 1px 5px 20px 0px #eeeeee;
    }
  }
</style>
