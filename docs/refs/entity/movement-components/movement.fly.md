# 实体组件 - minecraft:movement.fly
> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:movement.fly`为实体添加飞翔的移动方式。

## 参数

 | 名称 |  默认值  |  类型   |  说明  |
|:----------|:----------|:----------|:----------|
| start_speed| 0.1| 小数 | 实体开始滑行时的初始速度 |
| speed_when_turning| 0.2| 小数 | 实体在转弯时的的速度 |

## 范例

```json
"minecraft:movement.fly":{
    "max_turn": 30.0
}
```
