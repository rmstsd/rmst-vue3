import request, { IPageParameter, PagingResult } from './_service'

// 运行日志
type IRunTimeSearch = { search?: string; runSource?: number; userSource?: number; runStatus?: number }
type IRunTimeItem = {
  appName: string
  appVersion: string
  createdTime: string
  endTime: string
  id: number
  name: string
  phone: string
  runSource: number
  runStatus: number
  runTime: number
  startTime: string
  userSource: number
}
export function getRunTimeList(data: IPageParameter & IRunTimeSearch): Promise<PagingResult<IRunTimeItem>> {
  return request.get('/store/runTime/pageList', { params: data })
}

export function exportRunTimeExcel(data: IRunTimeSearch): Promise<Blob> {
  return request.get('/store/runTime/exportExcel', {
    params: data,
    responseType: 'blob' // 下载 excel 后端返回的是字节流
  })
}

// --

// 运行时长统计
type IRunTimeReportSearch = { tenantId: null; startTime: string; endTime: string }
type IRunTimeReportItem = { id: number; enterpriseName: string; runDate: string; runTime: number }
export function getRunTimeReportList(
  data: IPageParameter & IRunTimeReportSearch
): Promise<PagingResult<IRunTimeReportItem>> {
  return request.get('/store/runTimeReport/pageList', { params: data })
}

export function exportRunDurationExcel(data: IRunTimeReportSearch) {
  return request.get('/store/runTimeReport/exportExcel', {
    params: data,
    responseType: 'blob' // 下载 excel 后端返回的是字节流
  })
}
