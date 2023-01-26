import { Context, Schema, Service } from 'koishi'

declare module 'koishi' {
  interface Context {
    yunzai: Yunzai
  }
}

class Yunzai extends Service {
  usage = Yunzai.usage
  constructor(ctx: Context, private config: Yunzai.Config) {
    super(ctx, 'yunzai', true)
  }
}

namespace Yunzai {
  export const usage = `
### 插件说明

该插件是 Yunzai 插件兼容加载器，请前往插件市场搜索 \`kunzai\` 来获取 yunzai 插件。 
`
  export interface Config {
    storeCompatible: string
   }

  export const Config: Schema<Config> = Schema.object({
    storeCompatible: Schema.union(['kvdata', 'redis']).default('kvdata').description('数据存储方式')
  })
}

export default Yunzai
