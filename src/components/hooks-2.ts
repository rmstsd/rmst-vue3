import { onMounted, ref } from 'vue'

// type Service<TData> = (...args: any) => Promise<TData>

function useRequest<TResData>(service: () => Promise<TResData>) {
  const loading = ref(false)
  const resData = ref<TResData>(undefined)

  const run = () => {
    // return service(2)
  }

  onMounted(() => {})

  return { loading, run, resData }
}

const service = () => {
  const p = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('1')
    }, 1000)
  })

  return p
}

const { loading, resData, run } = useRequest(service)
