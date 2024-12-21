# 清单文件
> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

**清单文件**位于附加包的根目录中，包含附加包的基本信息。


## 属性
| 名称 | 说明 |
|:-----------|:-----------|
| format_version| 清单文件的格式版本，皮肤包为`1`，资源包、行为包、世界模板为`2` |
| header | 附加包的名称、描述和其他面向玩家的信息 |
| modules | 附加包的内容类型 |
| dependencies | 附加包依赖的内容 |
| capabilities| 启用一些游戏中的可选功能 |
| metadata| 附加包的元信息和版权说明 |

### header

| 名称 |  类型 |  说明  |
|:-----------|:-----------|:-----------|
| allow_random_seed | 布尔值| 是否在加载世界模板时生成随机种子，并允许玩家更改种子 *（仅在世界模板中可用）* |
| base_game_version|向量 [a, b, c] | 世界模板所需的游戏版本，格式为`[majorVersion, minorVersion, revision]`，游戏通过它来决定应用哪个版本的基础游戏资源和行为 *（仅在世界模板中可用）* |
| description| 字符串| 附加包的简介，建议控制在1~2行内 |
| lock_template_options| 布尔值 |  是否禁止玩家修改世界选项 *（仅在世界模板中可用）* |
| min_engine_version|向量 [a, b, c]| 最低游戏版本，游戏确定根据其确定是否需要对附加包进行向后兼容，建议填制作附加包时可用的最新游戏版本 |
| name| 字符串| 附加包的名字 |
| pack_scope | 字符串| 附加包可以应用的范围 *（仅在资源包中可用）*  |
| uuid| 字符串| 附加包的标识符，可以将此附加包与其他包区分开来，格式为`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |
| version|向量 [a, b, c] or [SemVer](https://semver.org/lang/zh-CN/) 字符串| This is the version of your pack in the format [majorVersion, minorVersion, revision]. The version number is used when importing a pack that has been imported before. The new pack will replace the old one if the version is higher, and ignored if it's the same or lower. |

#### pack_scope
`pack_scope`是附加包可以应用的范围，可填以下值：

- `world`将附加包指定为只可以在世界中加载；
- `global`将附加包指定为只可以在全局资源中加载；
- `any`将附加包指定为可以在全局资源或世界中加载。

### modules

| 名称 |  类型 |  说明  |
|:-----------|:-----------|:-----------|
|description| 字符串| 模块的简介，玩家无法看到 |
|type| 字符串|  模块的类型，可填：`resources`、`data`、`world_template`或`script` |
|uuid| 字符串| 模块的标识符，应该和`header`中的UUID不同，格式为`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |
| version| 向量 [a, b, c] 或 [SemVer](https://semver.org/lang/zh-CN/) 字符串 | 模块的版本 |
|language| 字符串| 附加包脚本的语言，只能填`javascript` *（仅模块类型为`script`时可用）* |

> [!IMPORTANT]
> 若想将内容提交到市场，清单文件声明的版本必须大于`1.0.0`

### dependencies

| 名称 |  类型 |  说明  |
|:-----------|:-----------|:-----------|
|uuid| 字符串| 该附加包依赖包的标识符，应该与依赖包的清单中的`header.uuid`一致 |
|module_name| 字符串| 依赖的内建脚本模块的名称，如`@minecraft/server` |
|version| 向量 [a, b, c] 或 [SemVer](https://semver.org/lang/zh-CN/) 字符串 | 该附加包依赖包的版本 |

### capabilities

| 名称 |  说明  |
|:-----------|:-----------|
| chemistry| 启用化学相关内容 |
| editorExtension | 启用编辑器相关功能 |
| experimental_custom_ui| 启用HTML文件创建自定义UI功能 |
| raytraced| 启用光线追踪和自定义着色器功能 |
| script_eval | 在脚本中启用`eval()`和`function()` |

### metadata

| 名称 |  类型 |  说明  |
|:-----------|:-----------|:-----------|
| authors| 数组| 附加包的作者 |
| license| 字符串| 附加包的协议 |
| generated_with | JSON 对象 | 生成清单文件的工具，工具名称为字符串形式，必须匹配`[a-zA-Z0-9_-]`，长度不超过32个字符 |
| product_type | 字符串 | 附加包的目标上下文，唯一支持的值是`addon` |
| url| 字符串| 附加包的主页 |

## 范例
### 行为包

```json [beh/manifest.json]
{
    "format_version": 2,
    "header": {
        "description": "Example vanilla behavior pack",
        "name": "Vanilla Behavior Pack",
        "uuid": "ee649bcf-256c-4013-9068-6a802b89d756",
        "version": [1, 0, 0],
        "min_engine_version": [1, 20, 0]
    },
    "modules": [
        {
            "description": "Example behavior pack module",
            "type": "data",
            "uuid": "fa6e90c8-c925-460f-8155-c8a60b753caa",
            "version": [1, 0, 0]
        },
        {
            "description": "Example client scripts module",
            "type": "client_data",
            "uuid": "c05a992e-482a-455f-898c-58bbb4975e47",
            "version": [1, 0, 0]
        }
    ],
    "dependencies": [
        {
            "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
            "version": [1, 0, 0]
        }, 
        {
            "module_name": "@minecraft/server",
            "version": "1.9.0"
        }
    ],
    "metadata": {
        "authors": ["exampleAuthor"],
        "license": "MIT",
        "url": "http://www.contoso.com",
        "generated_with": {
            "example_tool": ["1.0.0", "1.1.0"]
        }
    }
}
```

### 资源包

```json [res/manifest.json]
{
    "format_version": 2,
    "header": {
        "description": "Example vanilla resource pack",
        "name": "Vanilla Resource Pack",
        "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
        "pack_scope": "world",
        "version": [1, 0, 0],
        "min_engine_version": [1, 20, 0]
    },
    "modules": [
        {
            "description": "Example vanilla resource pack",
            "type": "resources",
            "uuid": "743f6949-53be-44b6-b326-398005028819",
            "version": [1, 0, 0]
        }
    ]
}
```