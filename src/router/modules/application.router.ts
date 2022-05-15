import Layout from '@/layout/layout.vue'

export default {
  path: '/application',
  name: 'application',
  redirect: { name: 'runLog' },
  component: Layout,
  meta: { title: '应用管理', icon: 'el-icon-s-marketing' },
  children: [
    {
      path: 'runLog',
      name: 'runLog',
      component: () => import('@/views/application/runLog.vue'),
      meta: { title: '运行日志' }
    },
    {
      path: 'runDuration',
      name: 'runDuration',
      component: () => import('@/views/application/runDuration.vue'),
      meta: { title: '运行时长统计' }
    }
  ]
}
