<template>
  <MdEditor
    v-model="moduleValue"
    @change="onChange"
    @onUploadImg="onUploadImg"
    :toolbars="toolbars"
    previewTheme="vuepress"
  />
</template>

<script setup lang="ts">
  import MdEditor from 'md-editor-v3'
  import 'md-editor-v3/lib/style.css'

  const toolbars = [
    'bold',
    'underline',
    'italic',
    '-',
    'strikeThrough',
    'quote',
    'unorderedList',
    'orderedList',
    '-',
    'codeRow',
    'code',
    'link',
    'image',
    'table',
    'mermaid',
    '=',
    'pageFullscreen',
    'preview',
    'catalog'
  ]

  defineProps({
    moduleValue: { type: String, default: '' }
  })

  const emit = defineEmits(['update:modelValue'])

  const onChange = v => {
    emit('update:modelValue', v)
  }

  const onUploadImg = (files, callback) => {
    callback(['https://dream-unicorn.gitee.io/leilei-study-gather/static/media/baidu-logo.3f2f6d5a.png'])
  }
</script>

<style scoped></style>
