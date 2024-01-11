import { request } from '@/utils'


export function hitokoto(params) {
    return request({
        url: '/api/nav.app/hitokoto',
        method: 'get',
        params: params
    })
}

export function webInfo(params) {
    return request({
        url: '/api/nav.app/info',
        method: 'get',
        params: params
    })
}