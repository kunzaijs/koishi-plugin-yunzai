import { Context, Schema } from 'koishi'

class Yunzai {
  readonly name = 'kunzai'
  constructor(private ctx: Context, config: Yunzai.Config) {

  }
}

namespace Yunzai {
  export interface Config { }

  export const Config: Schema<Config> = Schema.object({})
}
