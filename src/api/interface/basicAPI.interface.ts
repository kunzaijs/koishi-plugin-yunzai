import { Region } from "../utils/Region"

type APIRequestMethod = 'GET' | 'POST'
type APIType = keyof APIRegionOption
export type APIParameTyper = StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor

/**
 * 基本 API 请求列表。
 */
export type APIStencil = {
    readonly [K in string]: APIStencilOption
}

export type APIRegion = {
    readonly [K in string]: APIRegionOption
}

export type ActID = Record<Region, string>

interface APIStencilOption {
    readonly availableFor: readonly Region[]
    readonly hostBy?: APIType | Record<Region, APIType | undefined>
    readonly method: APIRequestMethod
    readonly url: string | Record<Region, string>
    readonly parameters: readonly (readonly [string, APIParameTyper, boolean?])[]
    readonly cookie: boolean
}

interface APIRegionOption {
    readonly takumi: string
    readonly hk4e: string
    readonly record: string
}

/**
 * 兼容的 API 请求对象选项
 */
interface APIOption {
    /**该 API 适用地区 */
    availableFor: Region[]
    /**API Host 类型，如果为 undefined，应该提供完整 URL。*/
    hostBy?: APIType | Record<Region, APIType | undefined>
    /**API 需要的参数 */
    parameters: ([string, APIParameTyper, boolean?])[]
    /**请求米游社 API URL 不存在 PUT、DELETE 等具有数据库写入动作的情况 */
    method: APIRequestMethod
    /**如果 type 为 undefined，应该提供完整 URL。*/
    url: string | Record<Region, string>
    /**限制请求参数（GET:Query|POST:Body）*/
    params?: readonly string[]
    /**这个 API 是否需要 cookie */
    cookie?: boolean
}