# 实体组件 - minecraft:movement.sway
> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:movement.sway`组件强制实体在移动时左右摇摆。

## 参数

 | 名称 |  默认值  |  类型   |  说明  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| 小数 | 实体每游戏刻可以旋转的最大度数 |
| sway_amplitude| 0.05| 小数 | 摇摆的强度 |
| sway_frequency| 0.5 | 小数 | 摆动的频率乘数 |

## 范例

```json
"minecraft:movement.sway":{
    "max_turn": 30.0,
    "sway_amplitude": 0.05,
    "sway_frequency": 0.5
}
```