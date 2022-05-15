const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

// 传入时间戳 计算出是 几小时 几分 几秒
export function parseTime(time) {
  const days = Math.floor(time / DAY)
  const hours = Math.floor((time % DAY) / HOUR)
  const minutes = Math.floor((time % HOUR) / MINUTE)
  const seconds = Math.floor((time % MINUTE) / SECOND)
  const milliseconds = Math.floor(time % SECOND)

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  }
}

// 返回当天日期 20220409
export function getCurrDate() {
  const date = new Date()
  const Y = date.getFullYear()
  const M = date.getMonth()
  const D = date.getDate()

  const dateStr = [Y, M + 1, D].map(item => item.toString().padStart(2, '0')).join('')

  return dateStr
}
