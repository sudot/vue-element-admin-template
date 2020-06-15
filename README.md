## 简介

本项目使用了一个项目模版：[vue-element-admin](https://panjiachen.github.io/vue-element-admin) ，它基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element) 实现。它使用了最新的前端技术栈，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件。

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)，所有的请求数据都使用 [Mock.js](https://github.com/nuysoft/Mock) 进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

同时配套了系列教程文章，如何从零构建后一个完整的后台项目，建议大家先看完这些文章再来实践本项目

- [手摸手，带你用 vue 撸后台 系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
- [手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
- [手摸手，带你用 vue 撸后台 系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)
- [手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)
- [手摸手，带你用vue撸后台 系列五(v4.0新版本)](https://juejin.im/post/5c92ff94f265da6128275a85)
- [手摸手，带你封装一个 vue component](https://segmentfault.com/a/1190000009090836)
- [手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)
- [手摸手，带你用合理的姿势使用 webpack4（上）](https://juejin.im/post/5b56909a518825195f499806)
- [手摸手，带你用合理的姿势使用 webpack4（下）](https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc)

## 本地运行

```bash
# 克隆项目
git clone https://github.com/sudot/vue-element-admin-template.git

# 进入项目目录
cd vue-element-admin-template

# 设置全局镜像加速
# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist

# 卸载旧版本的 vue-cli
npm uninstall vue-cli -g
# 全局安装最新版 vue-cli
npm install -g @vue/cli

# 安装依赖
npm install

# 启动mock模式，使用本地mock数据
npm run mock

# 启动开发模式，调用实际接口
npm run dev
```

浏览器访问：http://localhost:9527

## 发布

```bash
# 构建测试环境
npm run stage

# 构建生产环境
npm run build
```

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## 新增一个页面

### 命名规范

其实刚开始我写 vue 文件的时候也不注意，各种驼峰啊、`大写开头 (PascalCase)`还是`横线连接 (kebab-case)`混着来，谁叫 vue 都可以，在 [风格指南](https://cn.vuejs.org/v2/style-guide/) 中也没有定论。不过基于本项目我还是整理了一套文件的命名规则。

#### Component

所有的 `Component` 文件都是以大写开头 (PascalCase)，这也是官方所 [推荐的](https://cn.vuejs.org/v2/style-guide/index.html#单文件组件文件的大小写-强烈推荐)。

但除了 `index.vue`。

例子：

- `@/src/components/BackToTop/index.vue`
- `@/src/components/Charts/Line.vue`
- `@/src/views/example/components/Button.vue`

#### JS 文件

所有的 `.js` 文件都遵循横线连接 (kebab-case)。

例子：

- `@/src/utils/open-window.js`
- `@/src/views/svg-icons/require-icons.js`
- `@/src/components/MarkdownEditor/default-options.js`

#### Views

在 `views` 文件下，代表路由的 `.vue` 文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例子：

- `@/src/views/svg-icons/index.vue`
- `@/src/views/svg-icons/require-icons.js`

使用横线连接 (kebab-case)来命名 `views` 主要是出于以下几个考虑。

- 横线连接 (kebab-case) 也是官方推荐的命名规范之一 [文档](https://cn.vuejs.org/v2/style-guide/index.html#单文件组件文件的大小写-强烈推荐)
- `views` 下的 `.vue` 文件代表的是一个路由，所以它需要和`component`进行区分(component 都是大写开头)
- 页面的 `url` 也都是横线连接的，比如 `https://www.xxx.admin/export-excel`，所以路由对应的 `view` 应该要保持统一
- 没有大小写敏感问题


### 步骤分解
 - 在 `src\views` 文件夹下新增一个模块,在此模块下新增你的页面
 - 如果有自定义组件,则将组件放在此模块文件夹下的 `components` 文件夹
 - 在 `src\router\index.js` 文件添加到此页面的路由
 - 在 `src\api` 文件夹新增与模块同名的 js 文件编写后台请求
 - 在 `mock` 文件夹新增与模块同名的 js 文件编写后台请求的模拟数据,再将此 js 文件在 `mock\mocks.js` 中导出
 