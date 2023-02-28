# GenshinAPI Kit

## Genshin 服务

通过 `ctx.genshin` 访问

#### `genshin.param(feilds: string[]): object`

用于生成 api 的基础参数，这样可以不用手动填入例如 region 这种根据 uid 变化的基础参数

#### `genshin.useApi(apiInfo: APIStencilOption)`

定义一个标准 Api

#### `genshin.fetch(api: basicAPi.Api, params: basicApi.Params, sign?: boolean): Promise<any>`

请求一个 Api，如果使用了 `useApi()` 则 api 名称为 `'none'`。

## 使用方法

```TypeScript
/**
 * GenshinAPI实例
 * 传入第一个参数UID。当然，会在内部处理该UID所属区服与API地址等信息。
 * 第二个参数为部分API所需要携带的Cookie。
 * 第三个参数为虚拟设备信息Device所用生成序列，可以传入一个固定随机字符以保证唯一性。
 */
const genshin = ctx.genshin('10000', 'cookie...', 'jsh823hAhs0');

/**
 * 请求一个API。
 */
genshin.fetch('bbsSign', genshin.param(['act_id', 'region', 'uid']))
/**
 * 如果请求一个列表中不存在的api，你可以这样
 */
genshin.useApi({
        type: 'takumi',
        method: 'POST',
        url: '/event/unexpected/api',
        params:['act_id', 'param1'],
        cookie: false
    }).fetch('none', {
        act_id: genshin.act_id,
        param1: 'a param'
    });
```

- 该API请求库Typings基于[genshin-kit/core/types](https://github.com/genshin-kit/genshin-kit-node/blob/master/packages/core/src/types)
- 部分逻辑参考自[genshin-kit](https://github.com/genshin-kit/genshin-kit-node/blob/master/packages/core/src/types)与[genshin.py](https://github.com/thesadru/genshin.py)
- DS算法参考自[genshin.py](https://github.com/thesadru/genshin.py)