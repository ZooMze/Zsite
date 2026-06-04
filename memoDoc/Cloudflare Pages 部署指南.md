---
title: Cloudflare Pages 部署指南
sidebar_position: 2
slug: /deploy-guide
---

# Cloudflare Pages 部署指南

> 日期：2026-06-04

---

## 一、准备工作

### 1.1 修改站点配置

在部署前，先修改 `docusaurus.config.ts` 中的配置：

```typescript
// 站点基本信息
title: 'ZooMze\'s Site',
tagline: '个人技术站',

// 生产环境 URL（部署后改成 Cloudflare 分配的地址）
url: 'https://zoomze-site.pages.dev',

// GitHub 配置
organizationName: 'ZooMze',
projectName: 'Zsite',

// "Edit this page" 链接
editUrl: 'https://github.com/ZooMze/Zsite/tree/main/',

// 导航栏 GitHub 链接
navbar: {
  items: [
    {
      href: 'https://github.com/ZooMze/Zsite',
      label: 'GitHub',
      position: 'right',
    },
  ],
},

// 页脚版权
copyright: `Copyright © ${new Date().getFullYear()} ZooMze. Built with Docusaurus.`,
```

### 1.2 推送到 GitHub

```bash
git add .
git commit -m "chore: 更新站点配置为个人信息"
git push
```

---

## 二、Cloudflare Pages 部署步骤

### 2.1 注意！不要进错地方

❌ **错误**：不要进 **Workers**（会看到 "Create a Worker"、"wrangler deploy" 等）

✅ **正确**：进入 **Pages**

### 2.2 正式部署步骤

1. 登录 Cloudflare 控制台
2. 左侧菜单选择 **Workers & Pages** → 点击 **Create application**
3. 顶部切换到 **Pages** 标签（不是 Workers！）
4. 点击 **Connect to Git**
5. 选择你的 GitHub 仓库（比如 `ZooMze/Zsite`）
6. 配置构建设置：
   - **Project name**: `zoomze-site`（想好再填，这个决定域名）
   - **Framework preset**: `None`
   - **Build command**: `pnpm run build`（或 `npm run build`）
   - **Build output directory**: `build`
7. 点击 **Save and Deploy**
8. 等待 1-2 分钟，部署完成后会给你分配地址

---

## 三、常见问题

### 问题 1：域名有随机后缀怎么办？

比如分配了 `zsite-16r.pages.dev`，这是因为 `zsite` 被占用了。

**解决方法：删掉重建**

1. 进入项目 → **Settings** → **General**
2. 找到 **Delete project** 删除
3. 重新创建，项目名改成 `zoomze-site` 或其他没被占用的名字

### 问题 2：改了项目名但域名没变？

Cloudflare Pages 的项目名 ≠ 域名。改项目名不会自动改域名，必须删掉重建。

---

## 四、后续更新

以后修改代码后：

```bash
git add .
git commit -m "你的提交信息"
git push
```

Cloudflare Pages 会自动检测到推送并重新部署。

---

## 五、验证部署

部署成功后，访问分配的地址（比如 `https://zoomze-site.pages.dev`），确认：

- 站点标题正确
- "Edit this page" 链接指向你的仓库
- 导航栏 GitHub 图标点击跳转到你的仓库
- 页脚版权信息正确
