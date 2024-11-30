# 物品组件 - minecraft:throwable
!!! info "版权说明"
    本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可
    
`minecraft:throwable`组件使物品可以被投掷出去。

## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| do_swing_animation | false | 布尔值 | 抛出时是否使用动画 |
| launch_power_scale | 1.0 | 小数 | 投掷时力量增加的比例 |
| max_draw_duration | 0.0 | 小数 | 投掷的最长蓄力时间 |
| max_launch_power | 1.0 | 小数 | 投掷的最大力量 |
| min_draw_duration | 0.0 | 小数 | 投掷的最短蓄力时间 |
| scale_power_by_draw_duration | false | 布尔值 | 投掷力量是否随着蓄力时间的增加而增加 |

## 范例
```json
"minecraft:throwable":{
    "do_swing_animation" : false,
    "launch_power_scale" : 1.0,
    "max_draw_duration" : 0.0,
    "max_launch_power" : 1.0,
    "min_draw_duration" : 0.0,
    "scale_power_by_draw_duration" : false
}
```
