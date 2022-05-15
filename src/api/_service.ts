import axios from 'axios'

type IResponse<T> = {
  code: 'success'
  msg: string
  result: T
}

export type IPageParameter = {
  pageNo: number
  pageSize: number
}

export type PagingResult<T = any> = {
  list: T[]
  total: number
}

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    const token = localStorage.token
    if (token) config.headers.Authorization = token

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const { status, data } = response

    if (data instanceof Blob) return Promise.resolve(data)

    const { code, msg, result } = data
    if (code === 'success') return Promise.resolve(result)
    else return Promise.reject(data)
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
