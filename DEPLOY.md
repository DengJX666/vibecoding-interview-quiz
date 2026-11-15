# 部署到 GitHub Pages

这个题库是纯前端项目，不需要编译、不需要后端和数据库，直接把文件放进 GitHub 仓库即可。

## 前置条件

- 一个 GitHub 账号。
- 仓库必须是 **Public**：GitHub 免费版只能从公开仓库发布 Pages。
- 仓库里不要放公司内部资料、真实姓名、手机号、密钥等敏感信息。

## 步骤

### 1. 新建仓库

打开 <https://github.com/new>：

- Repository name 填 `vibecoding-interview-quiz`（可以换成别的）。
- 选择 **Public**。
- 不要勾选 “Add a README file”（避免和本地 README 冲突）。
- 点 **Create repository**。

### 2. 上传文件

在空仓库页面点 **uploading an existing file**，把本项目根目录下的这些文件全部拖进去：

```text
index.html
style.css
app.js
questions.js
README.md
DEPLOY.md
.nojekyll
```

注意：

- 文件必须在仓库**根目录**，不能多套一层 `面试刷题/` 文件夹。
- `.nojekyll` 是空文件，用来关闭 GitHub Pages 的 Jekyll 处理，避免静态文件被忽略。
- 上传后点 **Commit changes**。

### 3. 开启 GitHub Pages

进入仓库的 **Settings → Pages**：

- **Source** 选 `Deploy from a branch`。
- **Branch** 选 `main`，目录选 `/ (root)`。
- 点 **Save**。

等 1–2 分钟，访问：

```text
https://你的GitHub用户名.github.io/vibecoding-interview-quiz/
```

### 4. 以后更新题目

在 GitHub 仓库里打开 `questions.js`，点右上角铅笔图标编辑，或重新上传覆盖，提交后等 Pages 自动更新即可。网址不会变。

## 常见问题

**打开是 404**

- 确认 `index.html` 在仓库根目录，而不是在子文件夹里。
- 确认 Settings → Pages 里显示 “Your site is live at ...”。
- 刚开启 Pages 需要等 1–2 分钟。

**页面出来了但没有样式**

- 确认 `style.css`、`app.js`、`questions.js` 和 `index.html` 在同一层目录。
- 检查文件名大小写是否一致。

**答题记录不保存**

- 不要用 `file://` 直接打开，也不要用微信/QQ 内置浏览器。
- 用 GitHub Pages 的 `https://` 地址访问，并且不要使用无痕模式。
- localStorage 按域名保存，手机和电脑的记录不会同步。

**想更新但不想让别人看到旧版本**

- Pages 会保留 Git 提交历史，公开仓库里旧文件仍然能被看到。敏感信息不要提交。
- 需要私密访问，改用带登录的服务器或 Cloudflare Access，不要用公开 Pages。

## 用命令行部署（可选）

如果你本机有 Git 和 GitHub 登录凭据：

```bash
cd 面试刷题
git init -b main
git add .
git commit -m "Add vibe coding interview quiz"
git remote add origin https://github.com/你的用户名/vibecoding-interview-quiz.git
git push -u origin main
```

然后在仓库 Settings → Pages 里按上面的步骤开启即可。
