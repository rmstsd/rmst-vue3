<template>
  <el-form ref="formRef" :model="form" :rules="rules" label-width="120px">
    <el-form-item label="banner名称" prop="bannerName">
      <el-input v-model="form.bannerName" />
    </el-form-item>
    <el-form-item label="banner类型" prop="bannerType">
      <el-select v-model="form.bannerType" @change="bannerTypeChange">
        <el-option v-for="[value, label] of bannerTypeMap" :label="label" :value="value" />
      </el-select>
    </el-form-item>

    <el-form-item v-if="form.bannerType === '1'" label="banner值" prop="bannerValue">
      <el-input v-model="form.bannerValue" />
    </el-form-item>

    <el-form-item v-if="form.bannerType === '2'" label="应用" prop="bannerValue">
      <el-select v-model="form.bannerValue" placeholder="请选应用">
        <el-option v-for="item in appList" :key="item.id" :label="item.appName" :value="item.id" />
      </el-select>
    </el-form-item>

    <el-form-item v-if="form.bannerType === '3'" label="标签" prop="bannerValue">
      <el-select v-model="form.bannerValue" placeholder="请选标签">
        <el-option v-for="item in labelList" :key="item.id" :label="item.labelName" :value="item.id" />
      </el-select>
    </el-form-item>

    <el-form-item v-if="form.bannerType === '4'" label="专题" prop="bannerValue">
      <el-select v-model="form.bannerValue" placeholder="请选专题">
        <el-option v-for="item in topicList" :key="item.id" :label="item.topicName" :value="item.id" />
      </el-select>
    </el-form-item>

    <el-form-item label="banner描述">
      <el-input v-model="form.bannerDesc" type="textarea" />
    </el-form-item>

    <el-form-item label="banner图" prop="imageUrl">
      <Upload v-model:fileUrl="form.imageUrl" />
    </el-form-item>

    <el-form-item>
      <el-button @click="router.back()">返回</el-button>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Upload from '@/components/Upload.vue'
  import { getAppList, getLabelList, getTopicList, saveBanner } from '@/api/appStore.api'

  const bannerTypeMap = new Map([
    ['1', 'Url'],
    ['2', '应用'],
    ['3', '标签'],
    ['4', '专题']
  ])

  const router = useRouter()

  const formRef = ref(null)
  const form = ref({
    bannerName: '',
    bannerType: null,
    bannerValue: null,
    bannerDesc: '',
    imageUrl: ''
  })
  const rules = {
    bannerName: { required: true, message: '请输入', trigger: 'blur' },
    bannerType: { required: true, message: '请输入', trigger: 'change' },
    bannerValue: { required: true, message: '不能为空', trigger: 'blur' },
    imageUrl: { required: true, message: '请上传图片', trigger: 'change' }
  }

  const appList = ref([])
  const labelList = ref([])
  const topicList = ref([])

  const bannerTypeChange = v => {
    form.value.bannerValue = null
    if (v === '2') !appList.length && getAppList().then(res => (appList.value = res))
    if (v === '3') !labelList.length && getLabelList().then(res => (labelList.value = res))
    if (v === '4') !topicList.length && getTopicList().then(res => (topicList.value = res))
  }

  const submit = () => {
    formRef.validate(valid => {
      if (!valid) return

      saveBanner(form).then(() => router.back())
    })
  }
</script>

<style></style>
