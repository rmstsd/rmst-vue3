import Layout from '@/layout/layout.vue'

export default {
  path: '/store',
  name: 'store',
  redirect: { name: 'bannerList' },
  component: Layout,
  meta: { title: '应用商店' },
  children: [
    {
      path: 'banner',
      name: 'bannerList',
      component: () => import('@/views/store/banner/banner.vue'),
      meta: { title: '首页banner管理' }
    },
    {
      path: 'bannerEdit',
      name: 'bannerEdit',
      component: () => import('@/views/store/banner/bannerEdit.vue'),
      meta: { title: '编辑banner', activeMenu: 'bannerList' },
      hidden: true
    },
    {
      path: 'label',
      name: 'labelList',
      component: () => import('@/views/store/label.vue'),
      meta: { title: '标签管理' }
    },
    {
      path: 'topicList',
      name: 'topicList',
      component: () => import('@/views/store/topic/list.vue'),
      meta: { title: '首页专题管理' }
    },
    {
      path: 'topicEdit',
      name: 'topicEdit',
      meta: { title: '编辑专题', activeMenu: '/store/topicList' },
      component: () => import('@/views/store/topic/edit.vue'),
      hidden: true
    },
    {
      path: 'appList',
      name: 'appList',
      component: () => import('@/views/store/app/list.vue'),
      meta: { title: '商城应用管理' }
    },
    {
      path: 'appInfo',
      name: 'appInfo',
      meta: { title: '应用详情', activeMenu: '/store/appList' },
      component: () => import('@/views/store/app/info.vue'),
      hidden: true
    },
    {
      path: 'editApp',
      name: 'editApp',
      meta: { title: '编辑应用版本', activeMenu: '/store/appList' },
      component: () => import('@/views/store/app/edit.vue'),
      hidden: true
    },
    {
      path: 'articleList',
      name: 'articleList',
      component: () => import('@/views/store/article/list.vue'),
      meta: { title: '文章管理' }
    },
    {
      path: 'articleEdit',
      name: 'articleEdit',
      component: () => import('@/views/store/article/edit.vue'),
      meta: { title: '编辑article', activeMenu: '/store/articleList.vue' },
      hidden: true
    }
  ]
}
