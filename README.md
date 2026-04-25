# Hex64 App

一个现代化的移动应用，使用 React Native 和 Expo 构建，支持 iOS 和 Android 原生平台。

## 特性

- 📱 **跨平台** - 一套代码，支持 iOS 和 Android
- 🚀 **快速开发** - Expo 提供流畅的开发体验
- 🛣️ **文件系统路由** - 使用 expo-router 基于文件系统的路由
- 🎨 **现代 UI** - 精心设计的深色主题界面

## 技术栈

- React Native 0.76.5
- Expo SDK 52
- TypeScript
- expo-router - 文件系统路由

## 开始使用

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npx expo start
```

### 运行应用

- **iOS 模拟器**: 按 `i` 键
- **Android 模拟器**: 按 `a` 键
- **Web**: 按 `w` 键

### 构建原生应用

#### iOS（需要 macOS）

```bash
npx expo run:ios
```

#### Android

```bash
npx expo run:android
```

## 项目结构

```
hex64/
├── app/                    # 页面路由（expo-router）
│   ├── _layout.tsx         # 根布局
│   ├── index.tsx           # 首页
│   ├── dashboard.tsx       # 控制面板
│   └── about.tsx           # 关于页面
├── assets/                 # 静态资源
│   ├── icon.png            # 应用图标
│   ├── splash-icon.png     # 启动画面
│   └── adaptive-icon.png   # Android 自适应图标
├── app.json               # Expo 配置
├── package.json           # 项目配置和依赖
├── tsconfig.json          # TypeScript 配置
├── babel.config.js        # Babel 配置
└── README.md              # 项目文档
```

## 页面路由

- `/` - 首页
- `/dashboard` - 控制面板
- `/about` - 关于我们

## Expo Go

开发阶段可以使用 Expo Go 快速预览应用：

1. 手机安装 Expo Go（App Store / Google Play）
2. 扫描终端显示的二维码
3. 即时预览更新

## 自定义

- 修改 `app.json` 更改应用名称、图标等配置
- 修改 `app/` 目录下的文件来自定义页面
- 修改 `assets/` 目录下的图片来自定义图标

## 许可证

MIT
