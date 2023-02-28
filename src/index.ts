import { Context, Schema, Service } from 'koishi'
import { } from '@koishijs/cache'
import { GenshinAPI } from './api'

declare module 'koishi' {
  interface Context {
    yunzai: Yunzai
    genshin: GenshinAPI
  }
}

class Yunzai extends Service {
  readonly usage = Yunzai.usage

  constructor(ctx: Context, private config: Yunzai.Config) {
    super(ctx, 'yunzai', true)

  }
}

namespace Yunzai {
  export const usage = `
### 插件说明

该插件是 Yunzai 插件兼容层，请前往插件市场搜索 \`kunzai\` 来获取 yunzai 插件。 
`
  export interface Config { }

  export const Config: Schema<Config> = Schema.object({})
}

export default Yunzai
