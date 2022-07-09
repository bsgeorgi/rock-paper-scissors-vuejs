import { createWebHistory, createRouter } from 'vue-router'

const routeOptions = [
    { path: '/', name: 'Index' }
];

const routes = routeOptions.map(route => {
    return {
        ...route,
        component: () => import(`../views/${route.name}.vue`)
    }
});

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;