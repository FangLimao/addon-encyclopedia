# 物品组件 - minecraft:cooldown

`minecraft:cooldown`组件设置物品的冷却时间，在使用添加了这个组件的物品后，其将会在冷却时间内不可使用。

## 参数
| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| category | *未设置* | 字符串 | 物品冷却的类型 |
| duration | *未设置*  | 小数 | 物品冷却的时间，以秒为单位，冷却时间内物品将不可使用 |

## 范例
```json
"minecraft:cooldown":{
    "category" : "attack",
    "duration" : 0.2
}
```