import Layout from '@/layout/layout.vue'

export default {
  path: '/robot',
  name: 'robot',
  redirect: { name: 'versionList' },
  component: Layout,
  meta: { title: 'robot管理', icon: 'el-icon-s-platform' },
  children: [
    {
      path: 'versionList',
      name: 'versionList',
      component: () => import('@/views/robot/version/list.vue'),
      meta: { title: '版本管理' }
    },
    {
      path: 'versionSave',
      name: 'versionSave',
      component: () => import('@/views/robot/version/save.vue'),
      meta: { title: '新增版本', activeMenu: '/robot/versionList' },
      hidden: true
    },
    {
      path: 'enterpriseList',
      name: 'enterpriseVersionList',
      component: () => import('@/views/robot/enterprise/list.vue'),
      meta: { title: '企业版本管理' }
    },
    {
      path: 'enterpriseSave',
      name: 'enterpriseSave',
      component: () => import('@/views/robot/enterprise/save.vue'),
      meta: { title: '新增版本', activeMenu: '/robot/enterpriseList' },
      hidden: true
    },
    {
      path: 'dmpList',
      name: 'dmpList',
      component: () => import('@/views/robot/dmp/list.vue'),
      meta: { title: 'dmp管理' }
    }
  ]
}
