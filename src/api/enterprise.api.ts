import request from './_service'

export function getEnterprisePage(data) {
  return request({
    url: '/enterprise/infoListPage',
    method: 'get',
    params: data
  })
}

export function getEnterpriseList() {
  return request({
    url: '/enterprise/infoList',
    method: 'get'
  })
}

export function getPermissionTree() {
  return request({
    url: '/enterprise/getPermissionTree',
    method: 'get'
  })
}

export function saveAdmin(data) {
  return request({
    url: '/enterprise/saveAdmin',
    method: 'post',
    data
  })
}

export function saveEnterprise(data) {
  return request({
    url: '/enterprise/add',
    method: 'post',
    data
  })
}

export function updateEnterprise(data) {
  return request({
    url: '/enterprise/update',
    method: 'post',
    data
  })
}

export function getAdminInfo(data) {
  return request({
    url: '/enterprise/getAdminInfo',
    method: 'get',
    params: data
  })
}

export function getEnterpriseUserList(data) {
  return request({
    url: '/enterprise/user/infoList',
    method: 'get',
    params: data
  })
}

export function enterpriseInitApp(data) {
  return request({
    url: '/enterpriseRobot/initApp',
    method: 'post',
    data
  })
}

export function getLicenseListPage(data) {
  return request({
    url: '/enterprise/license/infoPage',
    method: 'get',
    params: data
  })
}

export function getEnterpriseUserInfoListPage(data) {
  return request({
    url: '/enterprise/user/infoPage',
    method: 'get',
    params: data
  })
}

export function getEnterpriseLists() {
  return request({
    url: '/enterprise/infoList',
    method: 'get'
  })
}

export function getUserInfo(data) {
  return request({
    url: '/enterprise/user/userPermission',
    method: 'get',
    params: data
  })
}

export function getInvitationCodeList(data) {
  return request({
    url: '/enterprise/invitationCode/pageList',
    method: 'get',
    params: data
  })
}

export function createInvitationCode(data) {
  return request({
    url: '/enterprise/invitationCode/save',
    method: 'post',
    data
  })
}

export function updateInvitationCodeStatus(data) {
  return request({
    url: '/enterprise/invitationCode/update',
    method: 'post',
    data
  })
}
