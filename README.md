# 易经 App

一个基于《易经》的现代化移动应用，使用 React Native 和 Expo 构建，支持 iOS 和 Android 原生平台。

## 功能模块

### 1. 八字排盘
- 四柱八字显示（年柱、月柱、日柱、时柱）
- 五行强弱分析图表
- 每日运势建议

### 2. 智能取名
- 姓氏和原名输入
- 出生时间选择
- 男孩/女孩名字分类
- 智能推荐名字及契合度

### 3. 周易卜卦
- 诚心求问引导
- 摇卦动画效果
- 六爻卦象解读

### 4. 深度学易
- 热门经典课程
- 入门基础教程
- 名家解惑专栏
- 课程分类浏览

### 5. 个人中心
- 用户信息展示
- 测算记录统计
- 已购课程管理
- 积分余额查询
- 会员开通入口

## 技术栈

- React Native 0.76.5
- Expo SDK 52
- TypeScript
- expo-router - 文件系统路由
- @expo/vector-icons - 图标库

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
├── app/                    # 页面路由
│   ├── _layout.tsx        # 根布局（含底部导航）
│   ├── index.tsx          # 八字排盘首页
│   ├── quming.tsx         # 智能取名
│   ├── bugua.tsx          # 周易卜卦
│   ├── xueyi.tsx          # 深度学易
│   └── mine.tsx           # 个人中心
├── assets/                 # 静态资源
├── app.json               # Expo 配置
├── package.json           # 项目依赖
├── tsconfig.json          # TypeScript 配置
└── README.md              # 项目文档
```

## 设计规范

- **主题色**: 琥珀色 #b45309
- **背景色**: 石板色 #1c1917 / #f5f5f4
- **字体**: 系统默认字体
- **圆角**: 12-20px
- **阴影**: 轻柔阴影效果

## 许可证

MIT
