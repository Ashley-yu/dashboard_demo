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
    // {
        // path: '/dashboard',
        // name: 'Layout',
        // component: () => import('@/views/Layout.vue'),
        // children: [
            // {
            //     path: 'dashboard/charts',
            //     name: 'ChartsPage',
            //     component: () => import('@/views/ChartsPage.vue'),
            // },
        // ],
    // },
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
