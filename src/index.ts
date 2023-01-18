import { Context, Schema } from 'koishi'

class Kunzai {
  readonly name = 'kunzai'
  constructor(private ctx: Context, config: Kunzai.Config) {

  }
}

namespace Kunzai {
  export interface Config { }

  export const Config: Schema<Config> = Schema.object({})
}
