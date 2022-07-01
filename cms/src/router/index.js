// index.js

// 引入需要的模块
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import store from '@/store/'

// 下面使用了es6的对象增强写法，命名必须是routes
const routes = [
    {
        path: '/',
        redirect: 'index'
    },
    {
        path: '/index',
        // 已经配置了路径别名，@/view 就可以写成 view
        // 配置了extensions，index.vue可以写成index
        name:'index',
        component: () => import('@/views/index/index') 
    },
    {
        path: '/upload_content',
        name:'upload_content',
        component: () => import('@/views/contentManage/upload_content.vue')
    },
    {
        path: '/text_list',
        name:'text_list',
        component: () => import('@/views/textManage/text_list.vue')
    }, 
    
    {
        path: '/carton_item',
        name:'carton_item',
        component: () => import('views/itemManage/carton_item')
    },
    {
        path: '/product_item',
        name:'product_item',
        component: () => import('views/itemManage/product_item')
    },
    {
        path: '/voice_list',
        name:'voice_list',
        component: () => import('views/voiceManage/voice_list')
    },
    {
        path: '/vedio_list',
        name:'vedio_list',
        component: () => import('views/vedioManage/vedio_list')
    },
    {
        path: '/design_list',
        name:'design_list',
        component: () => import('views/designManage/design_list')
    },
    {
        path: '/admin_list',
        name:'admin_list',
        component: () => import('views/permissionManage/admin_list')
    },
    {
        path: '/user_permission',
        name:'user_permission',
        component: () => import('views/permissionManage/user_permission')
    },
    {
        path: '/about_outside',
        name:'about_outside',
        component: () => import('views/permissionManage/about_outside')
    },
    {
        path: '/specialSend',
        name:'specialSend',
        component: () => import('views/sendManage/specialSend')
    },
    {
        path: '/special_write',
        name:'special_write',
        component: () => import('views/sendManage/special_write')
    },
    {
        path: '/customer_list',
        name:'customer_list',
        component: () => import('views/customerManage/customer_list')
    },
    {
        path: '/agreementManage',
        name:'agreementManage',
        component: () => import('views/customerManage/agreementManage')
    },
    {
        path: '/outbag_list',
        name:'outbag_list',
        component: () => import('views/outbagManage/outbag_list')
    },
]


// 创建路由
const router = createRouter({
    // 配置路径
    history: createWebHashHistory(),
    routes
})
// 路由拦截(跳转前)
router.beforeEach((to,from,next)=>{
    console.log(to)
    console.log(from)
    // 路由
    store.commit('setLoading',true)
    next()
})
// 路由跳转后
router.afterEach((to, from) => { 
  store.commit('setLoading',false)  
})
// 导出路由
export default router
