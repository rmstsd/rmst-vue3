import Layout from '@/layout/layout.vue'

export default {
  path: '/',
  name: 'home',
  component: Layout,
  meta: { title: '首页9' },
  children: [
    {
      path: '',
      name: 'index',
      component: () => import('@/views/home.vue'),
      meta: { title: '首页6' }
    }
  ]
}
