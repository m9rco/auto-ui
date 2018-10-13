import AsyncComponent from './hoc/asyncComponent'
const docsConfig = [
  {
    name: '指南',
    isTitle: true
  },
  {
    name: '介绍',
    path: '/docs/introduce',
    component: AsyncComponent(e => import('@/README'))
  },
  {
    name: '快速开始',
    path: '/docs/quickstart',
    component: AsyncComponent(e => import('src/md/quick-start'))
  },
  {
    name: '使用须知',
    path: '/docs/useknow',
    component: AsyncComponent(e => import('src/md/use-know'))
  },
  {
    name: '最近更新',
    path: '/docs/changelog',
    component: AsyncComponent(e => import('@/CHANGELOG'))
  },
  {
    name: '组件',
    isTitle: true
  },
  {
    name: 'A 统计埋点',
    path: '/docs/a',
    component: AsyncComponent(e => import('auto-ui/a/index.zh-CN'))
  },
  {
    name: 'ActionSheet 动作面板',
    path: '/docs/actionsheet',
    component: AsyncComponent(e => import('auto-ui/action-sheet/index.zh-CN'))
  },
  {
    name: 'Alert 弹出框',
    path: '/docs/alert',
    component: AsyncComponent(e => import('auto-ui/alert/index.zh-CN'))
  },
  {
    name: 'Button 按钮',
    path: '/docs/button',
    component: AsyncComponent(e => import('auto-ui/button/index.zh-CN'))
  },
  {
    name: 'Cell 单元格',
    path: '/docs/cell',
    component: AsyncComponent(e => import('auto-ui/cell/index.zh-CN'))
  },
  {
    name: 'Dialog 组件',
    path: '/docs/dialog',
    component: AsyncComponent(e => import('auto-ui/dialog/index.zh-CN'))
  },
  {
    name: 'Input 组件',
    path: '/docs/input',
    component: AsyncComponent(e => import('auto-ui/input/index.zh-CN'))
  },
  {
    name: 'Layout 组件',
    path: '/docs/layout',
    component: AsyncComponent(e => import('auto-ui/layout/index.zh-CN'))
  },
  {
    name: 'Loading 组件',
    path: '/docs/loading',
    component: AsyncComponent(e => import('auto-ui/loading/index.zh-CN'))
  },
  {
    name: 'Modal 组件',
    path: '/docs/modal',
    component: AsyncComponent(e => import('auto-ui/modal/index.zh-CN'))
  },
  {
    name: 'NavBar 导航栏',
    path: '/docs/navbar',
    component: AsyncComponent(e => import('auto-ui/navbar/index.zh-CN'))
  },
  {
    name: 'Popup 组件',
    path: '/docs/popup',
    component: AsyncComponent(e => import('auto-ui/popup/index.zh-CN'))
  },
  {
    name: 'Radio 组件',
    path: '/docs/radio',
    component: AsyncComponent(e => import('auto-ui/radio/index.zh-CN'))
  },
  {
    name: 'Spin 组件',
    path: '/docs/spin',
    component: AsyncComponent(e => import('auto-ui/spin/index.zh-CN'))
  },
  {
    name: 'Switch 组件',
    path: '/docs/switch',
    component: AsyncComponent(e => import('auto-ui/switch/index.zh-CN'))
  },
  {
    name: 'Tabs 组件',
    path: '/docs/tabs',
    component: AsyncComponent(e => import('auto-ui/tabs/index.zh-CN'))
  },
  {
    name: 'TimePicker 组件',
    path: '/docs/timepicker',
    component: AsyncComponent(e => import('auto-ui/time-picker/index.zh-CN'))
  },
  {
    name: 'Toast 组件',
    path: '/docs/toast',
    component: AsyncComponent(e => import('auto-ui/toast/index.zh-CN'))
  }
]

export default docsConfig
