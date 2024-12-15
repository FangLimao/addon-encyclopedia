# 方块组件 - minecraft:display_name

> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:display_name`组件指定方块的显示名称。

| minecraft:display_name | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |     字符串     |
| 默认值                  |          |

如果给定的字符串不能被解析为本地化字符串，则将显示原始字符串。

## 范例
### 原始字符串
```json
"minecraft:display_name": "自定义方块名称"
```

### 本地化字符串
```json
"minecraft:display_name": "block.custom.name"
```

此时语言文件应该有：

```
block.custom.name=自定义方块名称
```
