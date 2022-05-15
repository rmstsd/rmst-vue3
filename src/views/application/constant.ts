import { parseTime } from '@/utils/parseTime'

export const userSourceMap = new Map([
  [1, '企业'],
  [2, '个人']
])

export const runSourceMap = new Map([
  [1, 'studio'],
  [2, 'robot']
])

export const runStatusMap = new Map([
  [1, '开始'],
  [2, '成功'],
  [3, '失败'],
  [4, '取消'],
  [5, '运行中'],
  [6, '异常']
])

export const handleRunTime = (timestamp: number) => {
  const { hours, minutes, seconds } = parseTime(timestamp)
  const h = String(hours).padStart(2, '0')
  const m = String(minutes).padStart(2, '0')
  const s = String(seconds).padStart(2, '0')
  return `${h}:${m}:${s}`
}
