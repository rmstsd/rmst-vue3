import Layout from '@/layout/layout.vue'

export default {
  path: '/feedback',
  name: 'feedback',
  component: Layout,
  redirect: { name: 'robotFeedback' },
  meta: { title: '意见反馈', icon: 'el-icon-question' },
  children: [
    {
      path: 'robot',
      name: 'robotFeedback',
      component: () => import('@/views/feedback/robot/list.vue'),
      meta: { title: '网页robot意见反馈管理' }
    },
    {
      path: 'studio',
      name: 'studioFeedback',
      component: () => import('@/views/feedback/studio/list.vue'),
      meta: { title: 'studio意见反馈管理' }
    }
  ]
}
