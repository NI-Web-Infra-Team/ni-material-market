FROM node:18-alpine AS base

# 安装依赖阶段
FROM base AS deps

ENV PYTHONUNBUFFERED=1

# 工作目录
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
# 安装依赖
RUN set -eux; \
    sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories; \
    apk add --update --no-cache python3; \
    ln -sf python3 /usr/bin/python; \
    python3 -m ensurepip; \
    pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package --no-cache --upgrade pip setuptools; \
    corepack enable; \
    pnpm install;

# 编译阶段
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 打包并修复 tslib 找不到的问题
# @see https://github.com/nuxt/nuxt/issues/19265
RUN set -eux; \
    corepack enable; \
    pnpm run build;

# 运行阶段
FROM base AS runner
WORKDIR /app

RUN npm install -g pm2 --registry=https://registry.npmmirror.com

COPY --from=builder /app/.output .
COPY --from=builder /app/ecosystem.config.cjs ./ecosystem.config.cjs

EXPOSE 80

ENTRYPOINT ["sh", "-c", "pm2-runtime ecosystem.config.cjs"]