/* Layout */
import Layout from '@/views/layout/Index'

/**
 * 主路由
 */
export const appRouter = [
  {
    path: '/',
    redirect: {
      name: 'home'
    },
    meta: {
      title: '首页',
      keepAlive: true
    },
    component: Layout,
    children: [
      {
        path: 'home',
        meta: {
          title: '首页',
          keepAlive: true
        },
        name: 'home',
        component: resolve => {
          require(['@/views/home/Index'], resolve)
        }
      },
      {
        path: 'singer',
        meta: {
          title: '歌手',
          keepAlive: true
        },
        name: 'singer',
        component: resolve => {
          require(['@/views/singer/Index.vue'], resolve)
        }
      },
      {
        path: 'singer-detail',
        meta: {
          title: '详情',
          keepAlive: true
        },
        name: 'singerDetail',
        component: resolve => {
          require(['@/views/singer/detail/Index.vue'], resolve)
        }
      },
      {
        path: 'rank',
        meta: {
          title: '排行榜',
          keepAlive: true
        },
        name: 'rank',
        component: resolve => {
          require(['@/views/rank/Index.vue'], resolve)
        }
      },
      {
        path: 'playlist',
        meta: {
          title: '歌单',
          keepAlive: true
        },
        name: 'playlist',
        component: resolve => {
          require(['@/views/playlist/Index.vue'], resolve)
        }
      }
    ]
  }
]

export const routes = [...appRouter]
