import Layout from '@/layout/layout.vue'

export default {
  path: '/system',
  name: 'system',
  redirect: { name: 'userList' },
  component: Layout,
  meta: { title: '系统管理', icon: 'el-icon-s-tools' },
  children: [
    {
      path: 'userList',
      name: 'userList',
      component: () => import('@/views/system/user/list.vue'),
      meta: { title: '用户管理' }
    },
    {
      path: 'userSave',
      name: 'userSave',
      component: () => import('@/views/system/user/save.vue'),
      meta: { title: '新增用户', activeMenu: '/system/userList' },
      hidden: true
    },
    {
      path: 'roleList',
      name: 'roleList',
      component: () => import('@/views/system/role/list.vue'),
      meta: { title: '角色管理' }
    },
    {
      path: 'menuList',
      name: 'menuList',
      component: () => import('@/views/system/menu/list.vue'),
      meta: { title: '菜单管理' }
    },
    {
      path: 'menuSave',
      name: 'menuSave',
      component: () => import('@/views/system/menu/save.vue'),
      meta: { title: '新增菜单', activeMenu: '/system/menuList' },
      hidden: true
    }
  ]
}
