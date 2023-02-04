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

### 关于数据存储

 \`redis\` 模式：可以连接原数据库来兼容旧数据，但不保证在 Koishi 下数据的准确性

 \`cache\` 模式：标准的数据存储，拥有更好的性能以及准确性
`
  export interface Config {
    storeCompatible: string
   }

  export const Config: Schema<Config> = Schema.object({
    storeCompatible: Schema.union(['cache', 'redis']).default('cache').description('数据存储方式')
  })
}

export default Yunzai
