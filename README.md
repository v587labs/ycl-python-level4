# YCL Python 四级互动教学网站

一个面向老师上课的静态互动课件。当前版本聚焦 YCL Python 四级主线，包含 29 个课时：1 节序章、12 节四级主线课、16 节拓展挑战课，支持教师投屏模式、学生练习模式、本地进度、JSON/CSV 导出导入，以及浏览器内 Python 判题。

## 本地运行

Vite 开发模式：

```bash
npm install
npm run dev
```

静态构建预览：

```bash
npm run build
npm run preview
```

## Cloudflare Workers 部署

本项目已按 Workers Static Assets + SPA shell 配好，深层路由如 `/lesson/1` 会回退到 `index.html`，Worker 会用 `HTMLRewriter` 注入 `window.__BOOTSTRAP_DATA__`。

本地 Workers 预览：

```bash
npm run worker:dev
```

部署：

```bash
npm run worker:deploy
```

Cloudflare 凭据只用于 Wrangler 部署，不是 Worker 运行时变量。不要写进 `.dev.vars` 或 `wrangler.jsonc`；本项目优先用当前 shell 的临时环境变量，避免把部署凭据持久保存在仓库目录里。推荐两种方式：

```bash
npx wrangler login
```

或者临时放在当前 shell：

```bash
export CLOUDFLARE_API_TOKEN="你的 Cloudflare API Token"
export CLOUDFLARE_ACCOUNT_ID="你的 Account ID"
npm run worker:deploy
```

如果你发我 Cloudflare 凭据，我会只在当前终端会话里使用，不写入仓库文件。

## 使用方式

- `教师课件`：投屏翻页、显示/隐藏答案、课堂计时、查看本课结构。
- `学生练习`：输入姓名，完成选择题和 Python 编程题，即时查看反馈。
- `导出 JSON`：保存当前浏览器里的个人学习进度。
- `导入进度`：恢复之前导出的 JSON 进度。
- `导出 CSV`：生成老师可汇总查看的练习结果表。

## 说明

- 第一版只覆盖 Python 路线，不包含 C++。
- 课时 0-12 为四级主线，其中课时 0 是序章；课时 13-28 为拓展挑战，不作为四级必学范围。
- 题目为按四级范围设计的原创仿题，不搬运官方真题。
- Python 运行环境使用 Pyodide CDN，第一次运行编程题时需要联网加载。
