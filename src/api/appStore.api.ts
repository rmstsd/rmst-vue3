import request from './_service'

export function getBannerList(data) {
  return request({
    url: '/store/banner/list',
    method: 'get',
    params: data
  })
}

export function pushBanner(data) {
  return request({
    url: '/store/banner/push',
    method: 'post',
    data
  })
}

export function unPush(data) {
  return request({
    url: '/store/banner/notPush',
    method: 'post',
    data
  })
}

export function deleteBanner(data) {
  return request({
    url: '/store/banner/delete',
    method: 'post',
    data
  })
}

export function getAppList() {
  return request({
    url: '/store/storeApp/info',
    method: 'get'
  })
}

export function getLabelList() {
  return request({
    url: '/store/label/index',
    method: 'get'
  })
}

export function getTopicList() {
  return request({
    url: '/store/topic/pushList',
    method: 'get'
  })
}

export function saveBanner(data) {
  return request({
    url: '/store/banner/add',
    method: 'post',
    data
  })
}

export function getLableListPage(data) {
  return request({
    url: '/store/label/page',
    method: 'get',
    params: data
  })
}

export function addLabel(data) {
  return request({
    url: '/store/label/add',
    method: 'post',
    data
  })
}

export function editLabel(data) {
  return request({
    url: '/store/label/modify',
    method: 'post',
    data
  })
}

export function deleteLabel(data) {
  return request({
    url: '/store/label/delete',
    method: 'post',
    data
  })
}

export function getTopicListPage(data) {
  return request({
    url: '/store/topic/list',
    method: 'get',
    params: data
  })
}

export function pushTopic(data) {
  return request({
    url: '/store/topic/push',
    method: 'post',
    data
  })
}

export function unPushTopic(data) {
  return request({
    url: '/store/topic/notPush',
    method: 'post',
    data
  })
}

export function deleteTopic(data) {
  return request({
    url: '/store/topic/delete',
    method: 'post',
    data
  })
}

export function saveTopic(data) {
  return request({
    url: '/store/topic/add',
    method: 'post',
    data
  })
}

export function getTopicInfo(data) {
  return request({
    url: '/store/topic/info',
    method: 'get',
    params: data
  })
}

export function updateTopic(data) {
  return request({
    url: '/store/topic/modify',
    method: 'post',
    data
  })
}

export function getAppPage(data) {
  return request({
    url: '/store/storeApp/getAppListPage',
    method: 'get',
    params: data
  })
}

export function pushApp(data) {
  return request({
    url: '/store/storeApp/push',
    method: 'post',
    data
  })
}

export function notPushApp(data) {
  return request({
    url: '/store/storeApp/notPush',
    method: 'post',
    data
  })
}

export function getStoreAppInfo(data) {
  return request({
    url: '/store/storeApp/getStoreAppInfo',
    method: 'get',
    params: data
  })
}

export function getAppHisList(data) {
  return request({
    url: '/store/storeApp/getAppHisList',
    method: 'get',
    params: data
  })
}

export function getAppVersionInfo(data) {
  return request({
    url: '/store/storeApp/getAppVersionInfo',
    method: 'get',
    params: data
  })
}

export function saveAppVersion(data) {
  return request({
    url: '/store/storeApp/saveAppVersion',
    method: 'post',
    data
  })
}

export function getLabelAll() {
  return request({
    url: '/store/label/allList',
    method: 'get'
  })
}

export function getAppCommentList(data) {
  return request({
    url: '/store/storeApp/commentList',
    method: 'get',
    params: data
  })
}

export function deleteComment(data) {
  return request({
    url: '/store/storeApp/deleteComment',
    method: 'post',
    data
  })
}

export function deleteAppVersion(data) {
  return request({
    url: '/store/storeApp/deleteAppVersion',
    method: 'post',
    data
  })
}

export function saveAppInfo(data) {
  return request({
    url: '/store/storeApp/saveAppInfo',
    method: 'post',
    data
  })
}

export function getArticleListPage(data) {
  return request({
    url: '/store/article/infoListPage',
    method: 'get',
    params: data
  })
}

export function saveArticle(data) {
  return request({
    url: '/store/article/add',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/store/article/update',
    method: 'post',
    data
  })
}

export function remove(data) {
  return request({
    url: '/store/article/delete',
    method: 'post',
    data
  })
}

export function getArticleInfo(data) {
  return request({
    url: '/store/article/info',
    method: 'get',
    params: data
  })
}
