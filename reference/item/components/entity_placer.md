# 物品组件 - minecraft:entity_placer
> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可


`minecraft:entity_placer`组件允许使用带有此组件的物品时会放置对应实体。

在 1.19.80 及以上版本中，添加了这个组件的物品可以设置刷怪笼的生物类型。

## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| dispense_on | *未设置* | 数组 | 指定该物品不可以在哪些方块上使用，如果留空，则允许在所有方块上使用 |
| entity | *未设置* | 字符串 | 使用物品时生成的实体 |
| use_on | *未设置* | 数组 | 指定该物品可以在哪些方块上使用，如果留空，则允许在所有方块上使用 |

## 范例

```json
"minecraft:entity_placer":{
    "entity":"minecraft:spider",
    "dispense_on":["minecraft:web"],
    "use_on" :["minecraft:web"]
}
```
