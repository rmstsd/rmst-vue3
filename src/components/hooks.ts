import { ref, watch } from 'vue'

export const watchDeep = (wv, cb) => {
  watch(wv, cb, { deep: true })
}

export const useRequest = (service, option = {}) => {
  const { initialResData, onSuccess } = option

  const loading = ref(false)
  const resData = ref(initialResData === undefined ? {} : initialResData)

  const run = parameter => {
    loading.value = true
    return service(parameter)
      .then(res => {
        resData.value = res

        onSuccess && onSuccess(res)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return { loading, resData, run }
}
