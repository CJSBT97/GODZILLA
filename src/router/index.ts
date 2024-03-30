import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
        redirect: '/Home',
        children: [
            {
                path: 'Home',
                component: () => import('@/views/home/index.vue'),
                name: 'Home'
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/Vault',
        children: [
            {
                path: 'Vault',
                component: () => import('@/views/Vault/index.vue'),
                name: 'Vault'
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/DAPP',
        children: [
            {
                path: 'DAPP',
                component: () => import('@/views/Dapp/index.vue'),
                name: 'DAPP'
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/webHome',
        children: [
            {
                path: 'webHome',
                component: () => import('@/views/webHome/index.vue'),
                name: 'webHome'
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/userInfo',
        children: [
            {
                path: 'userInfo',
                component: () => import('@/views/userInfo/index.vue'),
                name: 'userInfo'
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/Congratulations',
        children: [
            {
                path: 'Congratulations',
                component: () => import('@/views/Congratulations/index.vue'),
                name: 'Congratulations'
            }
        ]
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
