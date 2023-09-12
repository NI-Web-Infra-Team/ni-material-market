# Nuxt 3 with Element Plus Admin template

<pre align="center">
🏗 Working in Progress
</pre>

## Setup

This project uses pnpm as the package management tool:

> Modify the `packageManager` field in `package.json` and the `preinstall` and `pnpm` commands.

### Setting up China mirrors

```bash
pnpm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"

pnpm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
```

### Install dependencies

```bash
pnpm install
```

## Development

Started by default at `http://localhost:13000`:

```bash
pnpm run dev
```

## Publish

Packaging:

```bash
pnpm run build
```

## Dependency update

```bash
pnpm run upgrade:dep
```

## Features

- [x] TypeScript support
- [x] SSR support
- [x] Tailwind CSS support
- [x] Multi-language support
- [x] Dark Mode Support
- [x] Automated Icon Generation
- [x] Support for touch devices
- [ ] Improve Documentation
- [x] Support for automated CHANGELOG generation
- [x] Support Eslint
- [ ] Support Docker Deployment
- [ ] CI/CD support
- [x] Support for SSR Local Caching
- [x] Support for automated generation of TS types via OpenAPI/Swagger
