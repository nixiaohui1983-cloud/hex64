# Hex64 App

一个现代化的网页应用框架，使用 React + Vite 构建，支持生成 iOS 和 Android 原生应用。

## 特性

- 🚀 **快速开发** - Vite 提供毫秒级热更新
- 📱 **跨平台** - 一套代码，生成 iOS 和 Android 应用
- 🛣️ **路由管理** - 内置 React Router 路由系统
- 🎨 **现代 UI** - 精心设计的深色主题界面

## 技术栈

- React 18
- Vite 5
- React Router v6
- Capacitor 6 - 跨平台应用封装

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

## 生成原生应用

### 添加平台

```bash
# 添加 iOS 平台（需要 macOS 和 Xcode）
npx cap add ios

# 添加 Android 平台
npx cap add android
```

### 同步 Web 内容到原生项目

```bash
npx cap sync
```

### 打开原生 IDE

```bash
# 打开 Xcode（macOS）
npx cap open ios

# 打开 Android Studio
npx cap open android
```

### 构建应用

#### iOS（需要 macOS）

1. 确保已安装 Xcode 和 CocoaPods
2. 运行 `npx cap open ios` 打开 Xcode
3. 选择模拟器或连接设备
4. 点击运行

#### Android

1. 确保已安装 Android Studio 和 JDK
2. 运行 `npx cap open android` 打开 Android Studio
3. 选择模拟器或连接设备
4. 点击运行，或使用命令行：

```bash
cd android
./gradlew assembleDebug
```

安装 APK：`adb install android/app/build/outputs/apk/debug/app-debug.apk`

## 项目结构

```
hex64/
├── index.html              # 入口 HTML 文件
├── package.json            # 项目配置和依赖
├── capacitor.config.ts     # Capacitor 配置
├── vite.config.js          # Vite 配置
├── .gitignore              # Git 忽略文件
├── android/                # Android 原生项目
├── ios/                    # iOS 原生项目
└── src/
    ├── main.jsx            # React 入口文件
    ├── App.jsx             # 主应用组件
    ├── App.css             # 应用样式
    └── index.css           # 全局样式
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
- `capacitor.config.ts` - 应用名称、图标等配置

## Capacitor 插件

已集成以下插件：

- `@capacitor/app` - 应用生命周期管理
- `@capacitor/haptics` - 触觉反馈
- `@capacitor/keyboard` - 键盘控制
- `@capacitor/status-bar` - 状态栏控制

## 许可证

MIT