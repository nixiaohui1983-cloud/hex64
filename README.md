# Hex64 App

一个现代化的网页应用框架，使用 React + Vite 构建。

## 特性

- 🚀 **快速开发** - Vite 提供毫秒级热更新
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🛣️ **路由管理** - 内置 React Router 路由系统
- 🎨 **现代 UI** - 精心设计的深色主题界面

## 技术栈

- React 18
- Vite 5
- React Router v6

## 开始使用

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
hex64/
├── index.html          # 入口 HTML 文件
├── package.json        # 项目配置和依赖
├── vite.config.js      # Vite 配置
├── .gitignore          # Git 忽略文件
└── src/
    ├── main.jsx        # React 入口文件
    ├── App.jsx         # 主应用组件
    ├── App.css         # 应用样式
    └── index.css       # 全局样式
```

## 页面路由

- `/` - 首页
- `/dashboard` - 控制面板
- `/about` - 关于我们

## 自定义

可以根据需要修改以下文件来定制你的应用：

- `src/App.jsx` - 修改页面和路由
- `src/App.css` - 自定义样式
- `src/index.css` - 全局样式和主题

## 许可证

MIT
