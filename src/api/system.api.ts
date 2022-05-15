import request from './_service'

export function getUserList(data) {
  return request({
    url: '/management/user/pageInfo',
    method: 'get',
    params: data
  })
}

export function getRoleList() {
  return request({
    url: '/management/role/info',
    method: 'get'
  })
}

export function getMenuList() {
  return request({
    url: '/management/menu/info',
    method: 'get'
  })
}

export function getMenuTree() {
  return request({
    url: '/management/menu/child',
    method: 'get'
  })
}

export function addUser(data) {
  return request({
    url: '/management/user/add',
    method: 'post',
    data
  })
}

export function remove(data) {
  return request({
    url: '/management/user/delete',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: '/management/user/update',
    method: 'post',
    data
  })
}

export function deleteUserRole(data) {
  return request({
    url: '/management/userRole/delete',
    method: 'post',
    data
  })
}

export function saveUserRole(data) {
  return request({
    url: '/management/userRole/add',
    method: 'post',
    data
  })
}

export function addRole(data) {
  return request({
    url: '/management/role/add',
    method: 'post',
    data
  })
}

export function deleteRole(data) {
  return request({
    url: '/management/role/delete',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: '/management/role/update',
    method: 'post',
    data
  })
}

export function updateIdByUserId(data) {
  return request({
    url: '/management/user/id',
    method: 'post',
    data
  })
}

export function saveRoleMenu(data) {
  return request({
    url: '/management/roleMenu/add',
    method: 'post',
    data
  })
}

export function updateIdByRoleId(data) {
  return request({
    url: '/management/role/id',
    method: 'post',
    data
  })
}

export function saveMenu(data) {
  return request({
    url: '/management/menu/add',
    method: 'post',
    data
  })
}

export function deleteMenu(data) {
  return request({
    url: '/management/menu/delete',
    method: 'post',
    data
  })
}

export function updatedMenu(data) {
  return request({
    url: '/management/menu/update',
    method: 'post',
    data
  })
}

export function getWebChannelPageList(data) {
  return request({
    url: '/personal/management/channel/info',
    method: 'get',
    params: data
  })
}

export function deleteWebChannel(data) {
  return request({
    url: '/personal/management/channel/delete',
    method: 'post',
    data
  })
}

export function addWebChannel(data) {
  return request({
    url: '/personal/management/channel/add',
    method: 'post',
    data
  })
}
