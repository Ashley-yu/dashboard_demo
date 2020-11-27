import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/',
    },
    {
        path: '/',
        name: 'Login',
        component: () => import('@/views/Login/Login')
    },
    {
        path: '/dashboard',
        name: 'Layout',
        redirect: '/dashboard/day',
        component: () => import('@/components/Layout/Layout'),
        children: [
            {
                path: 'day',
                name: 'DailyOverview',
                component: () => import('@/views/DailyOverview/DailyOverview'),
                meta: {
                    breadcrumb: [
                        {
                            text: '營運分析',
                            to: { name: 'Layout' }
                        },
                        {
                            text: '結帳日總覽',
                            to: { name: 'DailyOverview' }
                        }
                    ]
                },
            },
            {
                path: 'month',
                name: 'MonthlyOverview',
                component: () => import('@/views/MonthlyOverview/MonthlyOverview'),
                meta: {
                    breadcrumb: [
                        {
                            text: '營運分析',
                            to: { name: 'Layout' }
                        },
                        {
                            text: '每日總覽',
                            to: { name: 'MonthlyOverview' }
                        }
                    ]
                },
            },
            {
                path: 'year',
                name: 'YearlyOverview',
                component: () => import('@/views/YearlyOverview/YearlyOverview'),
                meta: {
                    breadcrumb: [
                        {
                            text: '營運分析',
                            to: { name: 'Layout' }
                        },
                        {
                            text: '每月總覽',
                            to: { name: 'YearlyOverview' }
                        }
                    ]
                },
            },
            {
                path: 'annual',
                name: 'AnnualOverview',
                component: () => import('@/views/AnnualOverview/AnnualOverview'),
                meta: {
                    breadcrumb: [
                        {
                            text: '營運分析',
                            to: { name: 'Layout' }
                        },
                        {
                            text: '年度總覽',
                            to: { name: 'AnnualOverview' }
                        }
                    ]
                },
            },
        ],
    },
    {
        path: '/backend',
        name: 'BackendLayout',
        redirect: '/backend/admin',
        component: () => import('@/components/Layout/Layout'),
        children: [
            {
                path: 'admin',
                name: 'BackendAdmin',
                component: () => import('@/views/BackendAdmin/BackendAdmin'),
                meta: {
                    breadcrumb: [
                        {
                            text: '人員管理',
                            to: { name: 'BackendLayout' }
                        },
                        {
                            text: '後台管理者',
                            to: { name: 'BackendAdmin' }
                        }
                    ]
                },
            },
            {
                path: 'admin/create/:id?',
                name: 'EditUser',
                component: () => import('@/views/BackendAdmin/EditUser/EditUser'),
                meta: {
                    breadcrumb: [
                        {
                            text: '人員管理',
                            to: { name: 'BackendLayout' }
                        },
                        {
                            text: '後台管理者',
                            to: { name: 'BackendAdmin' }
                        },
                        {
                            text: '新增/編輯後台管理者',
                            to: { name: 'EditUser' }
                        }
                    ]
                },
            },
            {
                path: 'equip',
                name: 'EquipManagement',
                component: () => import('@/views/EquipManagement/EquipManagement'),
                meta: {
                    breadcrumb: [
                        {
                            text: '設備管理',
                            to: { name: 'EquipManagement' }
                        },
                        {
                            text: '設備總覽',
                            to: { name: 'EquipManagement' }
                        }
                    ]
                },
            },
        ],
    },
];

// 升級vue-router至3.1以後版本，導航組件重複點擊報錯 NavigationDuplicated
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { x: 0, y: 0 };
    },
});

export default router;
