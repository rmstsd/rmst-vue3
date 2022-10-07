import { reactive, ref, toRefs } from 'vue'

export function useRequest<TResData, TParameter extends any[]>(
  service: (...args: TParameter) => Promise<TResData>,
  option: { initialResData?: any; onSuccess?: (res: TResData) => void } = {}
) {
  const { initialResData, onSuccess } = option

  const state = reactive<{ loading: boolean; resData: TResData }>({
    loading: false,
    resData: initialResData === undefined ? {} : initialResData
  })

  const run = async (...args: TParameter) => {
    state.loading = true

    return service(...args)
      .then(res => {
        state.resData = res // todo: 解决类型问题
        onSuccess && onSuccess(res)
      })
      .finally(() => {
        state.loading = false
      })
  }

  return { ...toRefs(state), run }
}
