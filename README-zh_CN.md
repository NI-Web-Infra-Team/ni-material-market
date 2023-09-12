# Nuxt 3 with Element Plus Admin template

<pre align="center">
🏗 建设中
</pre>

[English](https://github.com/NI-Web-Infra-Team/nuxt-element-plus-admin/blob/main/README.md)

## 安装

本项目采用 pnpm 作为包管理工具：

> 如需修改请自行修改 `package.json` 中的 `packageManager` 字段以及 `preinstall` 和 `pnpm` 命令。

### 设置国内镜像

```bash
pnpm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"

pnpm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
```

### 安装依赖

```bash
pnpm install
```

## 开发

默认启动在 `http://localhost:13000`：

```bash
pnpm run dev
```

## 发布

打包：

```bash
pnpm run build
```

## 依赖更新

```bash
pnpm run upgrade:dep
```

## 特性

- [x] 支持 TypeScript
- [x] 支持 SSR
- [x] 支持 Tailwind CSS
- [x] 支持多语言
- [x] 支持暗黑模式
- [x] 支持自动化生成 Icon
- [x] 支持触摸设备
- [x] 支持自动化生成 CHANGELOG
- [x] 支持 Eslint
- [ ] 支持 Docker 部署
- [ ] 支持 CI/CD
- [x] 支持 SSR 本地缓存
- [x] 支持通过 OpenAPI/Swagger 自动化生成 TS 类型
