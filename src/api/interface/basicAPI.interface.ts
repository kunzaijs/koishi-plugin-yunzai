type APIRequestMethod = 'GET' | 'POST'
type APIType = keyof APIRegionOption
type APIParameTyper = 'string' | 'number' | 'boolean' | 'json'

/**
 * 基本 API 请求列表。
 */
type APIStencil = {
    readonly [K in string]: APIStencilOption
}

type APIRegion = {
    readonly [K in string]: APIRegionOption
}

interface APIStencilOption {
    readonly availableFor: readonly ('china' | 'overseas')[]
    readonly hostBy?: APIType | Record<'china' | 'overseas', APIType | undefined>
    readonly method: APIRequestMethod
    readonly url: string | Record<'china' | 'overseas', string>
    readonly parameters: readonly (readonly [string, APIParameTyper, boolean?])[]
    readonly cookie: boolean
}

interface APIRegionOption {
    readonly takumi: string
    readonly hk4e: string
    readonly record: string
}

interface APIList {
    bbsSign: APIOption
    bbsSignHome: APIOption
    bbsSignInfo: APIOption
    dailyNote: APIOption
}

/**
 * 兼容的 API 请求对象选项
 */
interface APIOption {
    /**该 API 适用地区 */
    availableFor: ('china' | 'overseas')[]
    /**API Host 类型，如果为 undefined，应该提供完整 URL。*/
    hostBy?: APIType | Record<'china' | 'overseas', APIType | undefined>
    /**API 需要的参数 */
    parameters: ([string, APIParameTyper, boolean?])[]
    /**请求米游社 API URL 不存在 PUT、DELETE 等具有数据库写入动作的情况 */
    method: APIRequestMethod
    /**如果 type 为 undefined，应该提供完整 URL。*/
    url: string | Record<'china' | 'overseas', string>
    /**限制请求参数（GET:Query|POST:Body）*/
    params?: readonly string[]
    /**这个 API 是否需要 cookie */
    cookie?: boolean
}