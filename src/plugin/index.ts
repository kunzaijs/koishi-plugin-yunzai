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
        /** 监听事件，默认message https://oicqjs.github.io/oicq/#events */
        this.event = option.event || 'message'
        /** 优先级 */
        this.priority = option.priority || 5000
        /** 定时任务，可以是数组 */
        this.task = {
            /** 任务名 */
            name: '',
            /** 任务方法名 */
            fnc: option.task?.fnc || '',
            /** 任务cron表达式 */
            cron: option.task?.cron || ''
        }

        /** 命令规则 */
        this.rule = option.rule || []
    }
    reply(content: string, quote?: boolean, data?: { recallMsg?: number, at?: boolean }) {
        if (!this.e.reply || !content) return false
        return this.e.reply(content, quote, data)
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