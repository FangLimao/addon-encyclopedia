# 物品组件 - minecraft:block_placer

`minecraft:block_placer`将物品设置为方块的播种组件，使用带有此组件的物品时会放置对应的方块。

## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| block | *未设置* | 字符串 | 使用时将会放置的方块 |
| use_on | *未设置*  | 数组 | 指定该物品可以在哪些方块上使用，如果留空，则允许在所有方块上使用 |

## 范例
```json
"minecraft:block_placer":{
    "block": "seeds",
    "use_on" : [ "dirt", "grass"]
}
```
