import { Context } from "koishi"
import "koishi-plugin-adapter-oicq"

namespace YunzaiPluginAdpt {
    export type OicqEvents = 'message'
    export type Permission = 'master' | 'owner' | 'admin' | 'all'

    export interface RuleOption {
        reg: RegExp
        fnc()
        event: OicqEvents
        log: boolean
        permission: Permission
    }

    export interface TaskOption {
        name: string
        cron: string
        fnc()
        log: boolean
    }

    export interface Options {
        name: string
        dsc: string
        event: OicqEvents
        priority: number
        rule: RuleOption | RuleOption[]
        task: TaskOption | TaskOption[]
    }
}

class YunzaiPluginAdpt {
    name: string
    dsc: string
    event: YunzaiPluginAdpt.OicqEvents
    priority: number = 5000
    task: YunzaiPluginAdpt.TaskOption | YunzaiPluginAdpt.TaskOption[]
    rule: YunzaiPluginAdpt.RuleOption | YunzaiPluginAdpt.RuleOption[]
    e
    constructor(ctx: Context, options: YunzaiPluginAdpt.Options) {
        for (const key in options) {
            if (Object.prototype.hasOwnProperty.call(this, key)) this[key] = options[key];
        }
        this.e.self_id = ctx.bots['']
        ctx.platform('oicq')
    }

    reply(message: string, quote: boolean = false, opt?: { recallMsg: number, at: string }) {
        if (!this.e.reply) return false
        const {recallMsg = 0, at = ''} = opt

    }
}

export { YunzaiPluginAdpt }