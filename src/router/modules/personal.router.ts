import Layout from '@/layout/layout.vue'

export default {
  path: '/personal',
  name: 'personal',
  redirect: { name: 'personalList' },
  component: Layout,
  meta: { breadcrumb: false, title: '个人用户' },
  children: [
    {
      path: 'personalList',
      name: 'personalList',
      component: () => import('@/views/personal/user/list.vue'),
      meta: { title: '个人用户列表', icon: 'el-icon-user-solid' }
    }
  ]
}
