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

export class YunzaiPlugin {
    constructor(option: YunzaiPluginOptions) {
        this.name = option.name
        this.dsc = option.desc
        /** 插件名称 */
        this.name = data.name
        /** 插件描述 */
        this.dsc = data.dsc
        /** 监听事件，默认message https://oicqjs.github.io/oicq/#events */
        this.event = data.event || 'message'
        /** 优先级 */
        this.priority = data.priority || 5000
        /** 定时任务，可以是数组 */
        this.task = {
            /** 任务名 */
            name: '',
            /** 任务方法名 */
            fnc: data.task?.fnc || '',
            /** 任务cron表达式 */
            cron: data.task?.cron || ''
        }

        /** 命令规则 */
        this.rule = data.rule || []
    }
    reply(content: string, quote?: boolean, data?: { recallMsg?: number, at?: boolean }) {
        if (!this.e.reply || !msg) return false
        return this.e.reply(msg, quote, data)
    }
    conKey(channel?: boolean) {
        if (channel) {
            return `${this.name}.${this.e.group_id}`
        } else {
            return `${this.name}.${this.userId || this.e.user_id}`
        }
    }
    setContext(type, channel = false, time = 120) {
        let key = this.conKey(channel)
        if (!stateArr[key]) stateArr[key] = {}
        stateArr[key][type] = this.e
        if (time) {
            /** 操作时间 */
            setTimeout(() => {
                if (stateArr[key][type]) {
                    delete stateArr[key][type]
                    this.e.reply('操作超时已取消', true)
                }
            }, time * 1000)
        }
    }
}