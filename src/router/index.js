import { createRouter, createWebHashHistory } from 'vue-router'
import { webInfo } from '@/api/navWeb/app.js'
import basicRoutes from './basicRoutes'
import { useAppStore } from '@/store'

const router = createRouter({
    history: createWebHashHistory(),
    routes: basicRoutes
})

async function handleRouteNavigation(to, from, next) {
    window.$loading?.start();
    const appStore = useAppStore();
    const resp = await webInfo();
    document.title = resp.data.title;
    await appStore.setAppConfig(resp.data);
    next();
}

router.beforeEach(handleRouteNavigation);

router.afterEach(() => {
    window.$loading?.finish();
})

router.onError(() => {
    window.$loading?.error()
})

export default router