import { Context, Schema, Service } from 'koishi'

class Yunzai {
  readonly usage = Yunzai.usage

  constructor(ctx: Context, private config: Yunzai.Config) {

  }
}

namespace Yunzai {
  export const usage = `
### 插件说明

这是一个提供了 YunzaiBot （或者说 oicq 兼容层）事件兼容的基础插件。 

> 兼容层插件及基于兼容层的插件正在开发中，敬请期待。
`
  export interface Config { }

  export const Config: Schema<Config> = Schema.object({})
}

export default Yunzai
