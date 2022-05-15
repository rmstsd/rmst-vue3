import Layout from '@/layout/layout.vue'

export default {
  path: '/studio',
  name: 'studio',
  redirect: { name: 'userpostApp' },
  component: Layout,
  meta: { title: 'studio管理', icon: 'el-icon-s-promotion' },
  children: [
    {
      path: 'userpostApp',
      name: 'userpostApp',
      component: () => import('@/views/studio/userpost/list.vue'),
      meta: { title: '用户发布应用管理' }
    },
    {
      path: 'projectManagement',
      name: 'projectManagement',
      component: () => import('@/views/studio/project/list.vue'),
      meta: { title: '工程管理' }
    }
  ]
}
