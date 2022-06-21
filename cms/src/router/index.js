// index.js

// 引入需要的模块
import { createRouter,  createWebHistory } from 'vue-router'

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
        component: () => import('views/index/index') 
    },
    {
        path: '/carton_item',
        name:'carton_item',
        component: () => import('views/itemManger/carton_item')
    },
    {
        path: '/product_item',
        name:'product_item',
        component: () => import('views/itemManger/product_item')
    },
    {
        path: '/upload_conetnt',
        name:'upload_conetnt',
        component: () => import('views/contentManger/upload_conetnt')
    },
    {
        path: '/text_list',
        name:'text_list',
        component: () => import('views/textManger/text_list')
    },
    {
        path: '/voice_list',
        name:'voice_list',
        component: () => import('views/voiceManger/voice_list')
    },
    {
        path: '/vedio_list',
        name:'vedio_list',
        component: () => import('views/vedioManger/vedio_list')
    },
    {
        path: '/design_list',
        name:'design_list',
        component: () => import('views/designManger/design_list')
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
]

// 创建路由
const router = createRouter({
    // 配置路径
    history: createWebHistory(),
    routes
})

// 导出路由
export default router
