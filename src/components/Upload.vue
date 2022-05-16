<template>
  <section class="image-container">
    <div class="image-item-wrapper" v-for="(item, idx) in viewList" :key="item">
      <el-image :src="item" class="image-item" />

      <div class="operate">
        <el-icon :size="20" color="#fff" @click="deleteItem(idx)">
          <Delete />
        </el-icon>
      </div>
    </div>

    <el-button @click="inputRef.click()" :icon="Plus" style="width: 100px; height: 100px" />

    <input ref="inputRef" type="file" @change="change" v-show="false" />
  </section>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue'
  import { Plus, Delete } from '@element-plus/icons-vue'
  import { getUploadUrl, uploadFileToOSS } from '@/api/_upload'

  const props = defineProps({
    fileList: Array as PropType<string[]>,
    fileUrl: String,
    multiple: { type: Boolean, default: false }
  })
  const emit = defineEmits(['update:fileList', 'update:fileUrl'])

  const viewList = computed(() => {
    if (props.multiple) return props.fileList
    else return props.fileUrl ? [props.fileUrl] : []
  })
  const inputRef = $ref<HTMLInputElement>(null)

  const deleteItem = (idx: number) => {
    if (props.multiple)
      emit(
        'update:fileList',
        props.fileList.filter((_, index) => index !== idx)
      )
    else emit('update:fileUrl', '')
  }

  const change = async (evt: Event) => {
    // @ts-ignore
    const [file] = evt.target.files
    inputRef.value = null

    const { url, uploadUrl } = await getUploadUrl({ type: 'BANNER', contentType: file.type })
    uploadFileToOSS(file, uploadUrl, file.type).then(() => {
      if (props.multiple) emit('update:fileList', props.fileList.concat(url))
      else emit('update:fileUrl', url)
    })
  }
</script>

<style scoped lang="scss">
  .image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .image-item-wrapper {
      width: 100px;
      height: 100px;
      position: relative;
      border-radius: 5px;
      overflow: hidden;

      .image-item {
        width: 100%;
        height: 100%;
      }

      .operate {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba($color: #000000, $alpha: 0.5);
        transition: all 0.3s;
        cursor: pointer;
        opacity: 0;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
