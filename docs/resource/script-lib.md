# 开源脚本库
!!! info
    本文翻译自[微软文档](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptinglibraries?view=minecraft-bedrock-stable)，按照 [CC BY 4.0 协议](https://github.com/MicrosoftDocs/minecraft-creator/blob/main/LICENSE) 授权，并略有改动。

Mojang提供了许多脚本库，其中有些库可以在你的脚本中使用，而其他库则是辅助工具和构建脚本。

此外，这些库是开源的，你可以作出贡献，甚至提交您自己的库！

## @minecraft/math
该库包含一组实用函数和用于操作Vector的包装类。

其支持两种模式：一种是在`Vector3`接口上操作且不发生转变的计算性方法；另一种是以及遵循「构建器模式」的独立的包装类方法。

## @minecraft/core-build-tasks
该库包含常见的构建任务，可以在其他仓库中使用。

!!! note
    该库只运行构建步骤，特别是`tsc`

## eslint-plugin-minecraft-linting
该库包含编写脚本的最佳实践，其包括一些警告 *（例如「使用这个API而不是这个命令！」）*，和针对反面模式[^1]的报错。

要创建一个新规则，你需要在`src/rules`下添加一个以规则命名的文件，具体内容可以在[这里](https://typescript-eslint.io/developers/custom-rules/)找到。

然后更新`src/index`，并将其添加到模块导出的`rules`关键字中，并更新默认的Eslint配置，以确定新规则是错误还是警告。

[^1]: 反面模式指在实践中明显出现但又低效或是有待优化的设计模式