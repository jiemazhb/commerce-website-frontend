# 使用 Node.js 作为构建环境
FROM node:18 AS build
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package.json package-lock.json ./

# 安装依赖
RUN npm ci

# 复制所有源代码
COPY . .

# 运行 React 生产构建
RUN npm run build

# 使用 Nginx 作为 Web 服务器
FROM nginx:latest

# 复制 React 生产构建的文件到 Nginx 目录
COPY --from=build /app/build /usr/share/nginx/html

# 暴露端口 80
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
