# koishi-plugin-yunzai

[![npm](https://img.shields.io/npm/v/koishi-plugin-kunzai?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-yunzai) ![Rating](https://badge.koishi.chat/rating/koishi-plugin-yunzai)

## 特点

- **多平台**：借助 Koishi 自身强大的适配器平台能力，让 YunzaiBot 轻松支持更多的平台！
- **更易用**：告别命令行，告别编辑文件。全流程 UI 操作，一键安装、在线配置。
- **原生 TypeScript 实现**：TypeScript 强大的类型系统支持，拥有完整的代码提示，让插件更加健壮。

## 插件

@kunzaijs 维护了一份 yunzai 插件子集（包括 yunzai 自身附带插件）并发布到 Koishi 插件市场中。你可以在插件市场中搜索 `kunzai` 来下载安装它们：

> 下列所有子集插件均继承自原插件许可证发布

- genshin：原神插件
- miao：喵喵 - 原神插件扩展

## 迁移与开发

> 迁移前你应该完整阅读 [Koishi 开发文档](https://koishi.chat)；并掌握了 TypeScript 初级知识
> （JavaScript 虽然也可以开发，但是为了更好的代码提示与健壮性，推荐学习 TypeScript）。

本插件暴露了以下服务，如果想将您的 Yunzai 插件迁移至 Koishi 平台，可以使用服务来使用兼容的 YunzaiAPI

插件不会导出与 koishi 重合的服务与功能，以下是 Yunzai 中与 Koishi 重合的服务。

- Puppeteer： `koishi-plugin-puppeteer`
- Redis: `@koishijs/cache`

### 扩展的服务

#### `ctx.yunzai`

#### `ctx.genshin`

## 致谢

此插件基于以下项目实现，感兴趣的话可以给它们点一个 Star⭐ 哦！

- [Koishi](https://github.com/koishijs/koishi)
- [YunzaiBot](https://github.com/Le-niao/Yunzai-Bot)

## 许可证

本插件使用 `MIT` 许可进行发布

```
MIT License

Copyright (c) Year KunzaiBot.js & Lipraty

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
其他二次分发的子集插件继承原许可证进行发布。
