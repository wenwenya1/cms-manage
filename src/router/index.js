// 关于路由的配置
import Vue from "vue" // 为什么引入vue
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        name: '首页',
        meta: { title: '首页' }, // 一些前端自定义路由的数据/属性
        // 使用路由懒加载，要知道懒加载的优势
        // 既然要懒加载，之后就要开始创建页面
        component: () => import('@/pages/home')
      }
    ]
  }
]

export default new Router({ routes: constantRoutes })