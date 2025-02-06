# 实体组件 - minecraft:movement.jump
> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:movement.jump`组件为实体添加以指定的延迟间隔进行跳跃的移动方式，类似于游戏中的史莱姆。

> [!IMPORTANT]
> 如果向让实体跟随某目标，则必须添加`minecraft:behavior.slime_attack`行为意向

## 参数

 | 名称 |  默认值  |  类型   |  说明  |
|:----------|:----------|:----------|:----------|
| jump_delay| [0.0, 0.0]| 数组[a, b]| 当实体被黏液块影响时的降落延迟 |
| max_turn| 30.0| 小数 | 实体每游戏刻可以旋转的最大度数 |

## 范例

```json
"minecraft:movement.jump":{
    "jump_delay": [0.0, 0.0],
    "max_turn": 30.0
}
```