# 物品组件 - minecraft:food
> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可


`minecraft:food`组件将物品设置为食物。

!!! note "注意"

    `miencraft:food`组件需要有`minecraft:use_modifier`组件才可以正常工作

## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| can_always_eat | false | 布尔值 | 如果为`true`，则物品可在饱食度满时亦可食用 |
| nutrition | 0 | 整数 | 食物回复的饱食度 |
| saturation_modifier | 0.6 | 小数 | 当带有饱和效果的玩家食用食物时，饱和度修饰符将按照公式`nutrition * saturation_modifier * 2`被调用 |
| using_converts_to | *未设置* | 字符串 | 食用后食物将要转化成的物品 |

## 范例
```json
"minecraft:food":{
    "can_always_eat": false,
    "nutrition" : 3,
    "saturation_modifier": 0.6,
    "using_converts_to": "bowl"
}
```