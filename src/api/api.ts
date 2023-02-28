import { APIParameTyper, APIRegion, APIStencil, ActID } from "./interface/basicAPI.interface"
import { GetRegion, RegionType } from "./utils/Region"

export namespace BBSApi {
    /**
     * hostBy所指API地址
     */
    export const region: APIRegion = {
        cn: {
            takumi: 'https://api-takumi.mihoyo.com',
            hk4e: 'https://hk4e-api.mihoyo.com',
            record: 'https://api-takumi-record.mihoyo.com',
        },
        os: {
            takumi: 'https://api-os-takumi.mihoyo.com',
            hk4e: 'https://hk4e-api-os.hoyoverse.com',
            record: 'https://bbs-api-os.hoyolab.com',
        }
    } as const

    /**
     * act_id
     */
    export const actId: ActID = {
        cn: 'e202009291139501',
        os: 'e202102251931481'
    } as const

    /**
     * 请求所用的API模板
     */
    export const stencil: APIStencil = {
        bbsSign: {
            availableFor: ['cn', 'os'],
            hostBy: {
                cn: 'takumi',
                os: 'hk4e'
            },
            method: 'POST',
            url: {
                cn: '/event/bbs_sign_reward/sign',
                os: '/event/sol/sign'
            },
            parameters: [['act_id', String], ['region', String], ['uid', String]],
            cookie: true
        },
        bbsSignHome: {
            availableFor: ['cn', 'os'],
            hostBy: {
                cn: 'takumi',
                os: 'hk4e'
            },
            method: 'GET',
            url: {
                cn: '/event/bbs_sign_reward/home',
                os: '/event/sol/home'
            },
            parameters: [['act_id', String], ['region', String], ['uid', String]],
            cookie: true
        },
        bbsSignInfo: {
            availableFor: ['cn', 'os'],
            hostBy: {
                cn: 'takumi',
                os: 'hk4e'
            },
            method: 'GET',
            url: {
                cn: '/event/bbs_sign_reward/home',
                os: '/event/sol/info'
            },
            parameters: [['act_id', String], ['region', String], ['uid', String]],
            cookie: true
        },
        dailyNote: {
            availableFor: ['cn', 'os'],
            hostBy: 'record',
            method: 'GET',
            url: '/game_record/app/genshin/api/dailyNote',
            parameters: [['role_id', String], ['server', String]],
            cookie: true
        },
        abyss: {
            availableFor: ['cn', 'os'],
            hostBy: 'record',
            method: 'GET',
            url: '/game_record/app/genshin/api/spiralAbyss',
            parameters: [['role_id', String], ['schedule_type', Number], ['server', String]],
            cookie: true
        },
        character: {
            availableFor: ['cn'],
            hostBy: 'record',
            method: 'POST',
            url: '/game_record/app/genshin/api/character',
            parameters: [['role_id', String], ['server', String]],
            cookie: true
        },
        detail: {
            availableFor: ['cn', 'os'],
            hostBy: {
                cn: 'takumi',
                os: undefined
            },
            method: 'GET',
            url: {
                cn: '/event/e20200928calculate/v1/sync/avatar/detail',
                os: 'https://sg-public-api.hoyolab.com/event/calculateos/sync/avatar/detail'
            },
            parameters: [['lang', String, true], ['uid', String], ['region', String], ['avatar_id', String]],
            cookie: true
        },
        memo: {
            availableFor: ['cn', 'os'],
            hostBy: 'hk4e',
            method: 'GET',
            url: {
                cn: '/event/ys_ledger/monthInfo',
                os: '/event/ysledgeros/month_info'
            },
            parameters: [['month', Number], ['bind_uid', String], ['bind_region', String]],
            cookie: true
        },
        genCard: {
            availableFor: ['cn'],
            hostBy: 'record',
            method: 'GET',
            url: '/game_record/app/genshin/api/character',
            parameters: [['role_id', String], ['server', String]],
            cookie: true
        },
    } as const

    type ApiList = keyof typeof stencil
    type AvailableRegions = keyof typeof region
    type AvailableUnion<K extends ApiList> = typeof stencil[K]['availableFor'][number]

    export type For<R extends AvailableRegions> = {
        [K in ApiList as R extends AvailableUnion<K> ? K : never]: typeof stencil[K]
    }
    /**
     * 获取该地区支持的API
     */
    export type Keys<R extends RegionType> = keyof For<GetRegion<R>>
    /**
     * 获取API请求参数条件
     */
    export type Params<R extends RegionType, A extends Keys<R>> = {
        [K in For<GetRegion<R>>[A]['parameters'][number][0]]: ReturnType<For<GetRegion<R>>[A]['parameters'][number][1]>
    }
}