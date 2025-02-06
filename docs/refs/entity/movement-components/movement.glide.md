# 实体组件 - minecraft:movement.glide
> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:movement.glide`组件为实体添加滑行的移动方式。

## 参数

 | 名称 |  默认值  |  类型   |  说明  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| 小数 | 实体每游戏刻可以旋转的最大度数 |

## 范例

```json
"minecraft:movement.glide": {
    "start_speed": 0.1,
    "speed_when_turning": 0.2
}
```