import request from './_service'
import axios from 'axios'

export function getUploadUrl(params) {
  return request.get('/store/store/getUploadUrl', { params })
}

export function uploadFileToOSS(file, url, contentType) {
  return axios({
    url: url,
    method: 'PUT',
    data: file,
    headers: { 'Content-Type': contentType }
  }).then(res => (res.status === 200 ? Promise.resolve() : Promise.reject()))
}
