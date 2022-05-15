const whiteList = ['/login']

import { useUserStore } from '@/store/store.user'

const beforeEach = async (to, from, next) => {
  const userStore = useUserStore()

  if (localStorage.token) {
    if (to.path === '/login') next('/')
    else {
      // 是否已经获取过菜单
      // console.log(userStore.isGetMenu)
      if (userStore.isGetMenu) next()
      else {
        const accessRoutes = userStore.getUserMenuList()

        // accessRoutes.forEach(routeItem => router.addRoute(routeItem))

        next({ ...to, replace: true })
      }
    }
  } else {
    if (whiteList.includes(to.path)) next()
    else next(`/login`)
  }
}

export default beforeEach
