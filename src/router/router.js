import { createWebHistory, createRouter } from 'vue-router'

const routeOptions = [
    { path: '/', name: 'Index' },
    { path: '/game/pvc', name: 'PlayerVsComputer' },
    { path: '/game/cvc', name: 'ComputerVsComputer' },
    { path: '/statistics', name: 'Statistics' },
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