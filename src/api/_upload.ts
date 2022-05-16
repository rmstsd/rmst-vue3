import request from './_service'
import axios from 'axios'

type IUploadUrl = { type: 'BANNER'; contentType: string }
type IUploadUrlResult = { uploadUrl: string; url: string }
export function getUploadUrl(params: IUploadUrl): Promise<IUploadUrlResult> {
  return request.get('/store/store/getUploadUrl', { params })
}

export function uploadFileToOSS(file: File, url: string, contentType: string): Promise<void> {
  return axios({
    url: url,
    method: 'PUT',
    data: file,
    headers: { 'Content-Type': contentType }
  }).then(res => (res.status === 200 ? Promise.resolve() : Promise.reject()))
}
