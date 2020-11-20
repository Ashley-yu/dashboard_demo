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
                            text: '首頁',
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
                            text: '首頁',
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
                            text: '首頁',
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
                            text: '首頁',
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
