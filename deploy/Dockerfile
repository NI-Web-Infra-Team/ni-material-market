FROM node:18-alpine AS base

# 安装依赖阶段
FROM base AS deps

# 工作目录
WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./
# 安装依赖
RUN set -eux; \
    sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories; \
    apk add --update --no-cache g++ make python3; \
    ln -sf python3 /usr/bin/python; \
    python3 -m ensurepip; \
    python -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip setuptools; \
    pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple; \
    corepack enable; \
    pnpm install;

# 编译阶段
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN set -eux; \
    corepack enable; \
    pnpm run build;

# 运行阶段
FROM base AS runner
WORKDIR /app

COPY --from=builder /app/.output .
COPY --from=builder /app/deploy/entrypoint.sh ./entrypoint.sh
COPY --from=builder /app/deploy/ecosystem.config.cjs ./ecosystem.config.cjs
COPY --from=builder /app/deploy/redis.conf ./redis.conf
COPY --from=builder /app/.env ./.env

RUN set -eux; \
    npm config set registry https://registry.npmmirror.com; \
    npm install -g pm2; \
    npm install dotenv; \
    sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories; \
    apk add --update --no-cache redis; \
    chmod +x ./entrypoint.sh;

EXPOSE 80

ENTRYPOINT ["/app/entrypoint.sh"]