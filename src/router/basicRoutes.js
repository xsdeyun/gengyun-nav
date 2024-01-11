import NavLayout from '@/views/navWeb/AppLayout.vue';
import AppLoad from '@/layout/AppLoad.vue';

/**
 * 基础路由
 * @type { *[] }
 */
const basicRoutes = [
    {
        path: '/',
        name: "nav",
        component: NavLayout,
        redirect: 'view',
        hidden: true,
        children: [
            {
                path: 'view',
                name: 'view',
                component: () => import('@/views/navWeb/AppContent.vue'),
                meta: {
                    title: 'view'
                }
            },{
                path: 'search',
                name: 'search',
                component: () => import('@/views/navWeb/AppSearch.vue'),
                meta: {
                    title: 'search'
                }
            }
        ]
    },
    {
        path: '/jump',
        name: 'jump',
        component: () => import('@/views/navWeb/AppJump.vue'),
        meta: {
            title: 'jump',
            hideBreadcrumb: true,
        }
    },
    {
        path: '/:path(.*)*',
        name: 'ErrorPage',
        component: () => import('@/views/pages/404.vue'),
        meta: {
            title: 'ErrorPage',
            hideBreadcrumb: true,
        }
    },
    {
        path: '/redirect',
        name: 'redirect',
        component: AppLoad,
        meta: {
            title: 'redirect'
        },
        children: [
            {
                path: '/redirect/:path(.*)',
                name: 'redirect',
                component: () => import('@/views/redirect/index.vue'),
                meta: {
                    title: 'redirect'
                },
            }
        ]
    }
]
export default basicRoutes;