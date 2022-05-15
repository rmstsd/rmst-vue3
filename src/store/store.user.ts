import { defineStore } from 'pinia'
import { getMenuList } from '@/api/user.api'
import router from '@/router/router.index'

console.log('user.store')
const useUserStore = defineStore('user', {
  state: () => ({
    isGetMenu: false
  }),

  actions: {
    async getUserMenuList() {
      this.isGetMenu = true
      const res = await getMenuList()
    },

    // 退出登录的时候重新初始化  所有数据, 包括 router 实例里的路由
    resetState() {
      this.isGetMenu = false

      localStorage.clear()
      router.replace('/login')
    }
  }
})

export { useUserStore }
