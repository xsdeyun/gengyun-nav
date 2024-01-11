import { request } from '@/utils'


export function initMenus(params) {
    return request({
        url: '/api/nav.menus/list',
        method: 'get',
        params: params
    })
}
export function initLinks(params) {
    return request({
        url: '/api/nav.links/list',
        method: 'get',
        params: params
    })
}

export function listLinks(params) {
    return request({
        url: '/api/nav.links/list',
        method: 'get',
        params: params
    })
}