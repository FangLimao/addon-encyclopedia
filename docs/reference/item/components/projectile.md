# 物品组件 - minecraft:projectile
`minecraft:projectile`使物品可以像箭一样发射出去。带有这个组件的物品可以从发射器中射出，也可以作为带有`minecraft:shooter`组件的物品的弹药。

如果带有该组件的物品同时包含`minecraft:throwable`组件，那么游戏将为物品自动生成丢出的实体。

## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| minimum_critical_power | *未设置* | 小数 | 定义物品需要多长时间的蓄力才能造成暴击 |
| projectile_entity | *未设置* | 字符串 | 发射出的实体，如果没有指定命名空间，则默认为`minecraft` |


## 范例
```json
"minecraft:projectile":{
    "minimum_critical_power": 1.25,
    "projectile_entity": "arrow"
}
```
