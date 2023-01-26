export interface YunzaiPluginOptions {
    name: string
    desc: string
    event?: string
    priority?: number
    rule: PluginOptRule
    task: PluginOptTask
}

export interface PluginOptRule {
    reg: RegExp
    fnc: Function
    event?: string
    log?: boolean
    permission: string
}

export interface PluginOptTask {
    name: string
    cron: string
    fnc: Function
    log?: boolean
}

export declare class YunzaiPlugin {
    constructor(option: YunzaiPluginOptions)
    reply(content: string, quote?: boolean, data?: {recallMsg?: number, at?: boolean})
    conKey(channel?: boolean)
    setContext()
}