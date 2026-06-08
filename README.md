# YCL Python 四级互动教学网站

一个面向老师上课的静态互动课件。当前版本聚焦 YCL Python 四级主线，包含 31 个课时：2 节序章、13 节四级主线课、16 节拓展挑战课，支持教师投屏模式、学生练习模式、本地进度、JSON 导入导出，以及浏览器内 Python 判题。

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

### GitHub Actions 自动部署

仓库包含 `.github/workflows/deploy-cloudflare.yml`。每次有新代码 push 到 `main` 分支时，GitHub Actions 会使用 Node.js 22 自动执行 `npm ci` 和 `npm run worker:deploy`。

需要在 GitHub 仓库的 `Settings` → `Secrets and variables` → `Actions` 中添加两个 Repository secrets：

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

## 使用方式

- `教师课件`：投屏翻页、显示/隐藏答案、课堂计时、查看本课结构。
- `学生练习`：输入姓名，完成选择题和 Python 编程题，即时查看反馈。
- `导出 JSON`：保存当前浏览器里的个人学习进度、答题明细和编程提交记录。
- `导入进度`：恢复之前导出的 JSON 进度。

## 说明

- 第一版只覆盖 Python 路线，不包含 C++。
- 课时 0-1 为序章，课时 2-14 为四级主线，课时 15-30 为拓展挑战，不作为四级必学范围。
- 题目为按四级范围设计的原创仿题，不搬运官方真题。
- Python 运行环境使用 Pyodide CDN，第一次运行编程题时需要联网加载。
