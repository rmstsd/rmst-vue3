import Layout from '@/layout/layout.vue'

export default {
  path: '/enterprise',
  name: 'enterprise',
  redirect: { name: 'tenantList' },
  component: Layout,
  meta: { title: '企业管理' },
  children: [
    {
      path: 'tenantList',
      name: 'tenantList',
      component: () => import('@/views/enterprise/enterprise.vue'),
      meta: { title: '企业管理' }
    },
    {
      path: 'license',
      name: 'license',
      component: () => import('@/views/enterprise/license.vue'),
      meta: { title: '许可证管理' }
    },
    {
      path: 'invitationCodeList',
      name: 'invitationCodeList',
      component: () => import('@/views/enterprise/invitationCode/list.vue'),
      meta: { title: '体验邀请码管理' }
    },
    {
      path: 'enterpriseUserList',
      name: 'enterpriseUserList',
      component: () => import('@/views/enterprise/user/list.vue'),
      meta: { title: '企业用户列表' }
    },
    {
      path: 'channelCodeList',
      name: 'channelCodeList',
      component: () => import('@/views/enterprise/channel/list.vue'),
      meta: { title: '渠道码管理' }
    },
    {
      path: 'channelSave',
      name: 'channelSave',
      component: () => import('@/views/enterprise/channel/edit.vue'),
      meta: { title: '编辑渠道码', activeMenu: '/enterprise/channelCodeList' },
      hidden: true
    }
  ]
}
