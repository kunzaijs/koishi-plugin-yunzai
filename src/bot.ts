import { Bot, Context, Schema } from "koishi";


export class YunzaiBot extends Bot {
    constructor(ctx: Context, config: YunzaiBot.Config){
        super(ctx, config)
    }
}

export namespace YunzaiBot {
    export const usage = `
### 插件说明

这是一个提供了 YunzaiBot （或者说 oicq 兼容层）事件兼容的基础插件，请前往插件市场搜索 \`kunzai\` 来获取 yunzai 系列插件。 

> 兼容层插件及基于兼容层的插件正在开发中，敬请期待。
`
    export interface Config { }

    export const Config: Schema<Config> = Schema.object({})
}