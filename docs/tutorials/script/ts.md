# 使用TypeScript与自动补全
> [!IMPORTANT]
> 本教程尚在撰写中

在本教程中，我们将学习如何使用TypeScript，并使用自动补全功能来提高开发效率。

VS Code内置了JavaScript/TypeScript的自动补全功能，并提供代码提示，因此我们强烈推荐使用其作为主力的开发工具。

## 自动补全
首先，我们需要在计算机上安装[Node.js](https://nodejs.cn/download/)与npm，然后在我们项目路径运行如下命令：

```bash
npm i @minecraft/server
npm i @minecraft/server-ui
```

如果需要使用测试版模块，则需要运行：

```bash
npm i @minecraft/server@beta
npm i @minecraft/server-ui@beta
```

这时再打开我们的项目，VS Code就会检测到我们安装的模块，并启用自动补全功能。

## 使用TypeScript
**TypeScript**是JavaScript的一个超集,它为JavaScript添加了类型系统，并可以转换为JavaScript文件。

在我们项目路径运行如下命令以安装TypeScript：

```bash
npm install -g typescript
```