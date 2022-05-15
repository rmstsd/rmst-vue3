import request from './_service'

// 登录
type ILogin = { username: string; password: string }
type loginReturn = { id: number; token: string; userName: string }
export function login(data: ILogin): Promise<loginReturn> {
  return request.post('/web/login', data)
}

// 获取此用户拥有的菜单列表
type MenuListReturn = { id: number; menuName: string; menuUrl: string }
export function getMenuList(): Promise<MenuListReturn> {
  return request.get('/management/user/getMenuList')
}
