export default [{
    path: '/crm/my',
    name: 'my',
    // 映射表路由懒加载
    component: () => import( /* webpackChunkName: "customer" */ '@/components/customer/my'),
    meta: {
        type: 'crm',
        rootTil: "客户管理",
        til: '我的客户',
        icon: 'el-icon-user',
        power: ''
    }

},
{
    path: '/crm/addCustomer',
    name: 'addCustomer',
    component: () => import( /* webpackChunkName: "customer" */ '@/components/customer/add'),
    meta: {
        type: 'crm',
        rootTil: "客户管理",
        til: '新增客户',
        icon: 'el-icon-user',
        power: ''
    }
},
{
    path: '/crm/all',
    name: 'all',
    component: () => import( /* webpackChunkName: "customer" */ '@/components/customer/all'),
    meta: {
        type: 'crm',
        rootTil: "客户管理",
        til: '全部客户',
        icon: 'el-icon-user',
        power: 'allcustomer'
    }
}

]
