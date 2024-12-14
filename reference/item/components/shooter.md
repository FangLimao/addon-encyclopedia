# 物品组件 - minecraft:shooter
> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

    
`minecraft:shooter`组件使物品可以像弓和弩一样发射弹射物。

!!! note "注意"

    `miencraft:shooter`组件需要有`minecraft:use_modifier`组件才可以正常工作

## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| ammunition |*未设置* | 数组 | 作为弹射物的实体 |
| charge_on_draw | false | 布尔值 | 发射弹射物是否需要蓄力 |
| max_draw_duration | 0.0 | 小数 | 最长蓄力时间 |
| scale_power_by_draw_duration | false | 布尔值 | 投掷的力量是否随蓄力时间而增加|


### ammunition
`ammunition`数组下的弹射物有四个选项：

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| item |*未设置* | 字符串 | 弹射物物品的标识符 | 
| use_offhand |false | 布尔值 | 设置弹射物是否可以从副手使用 |
| search_inventory | false | 布尔值 | 设置是否可以在背包中搜索要使用的弹射物 |
| use_in_creative | false | 布尔值 | 设置创造模式是否可以使用弹射物 |


!!! note "注意"

    `ammunition`组件指定的弹射物需要有`minecraft:projectile`组件才可以正常工作

## 范例
```json
"minecraft:shooter":{
    "ammunition" :[{
       "item" :"snowball",
       "use_offhand" :true,
       "search_inventory" :true,
       "use_in_creative" :true
    }],
    "max_draw_duration" :1.0,
    "scale_power_by_draw_duration" :true,
    "charge_on_draw" :false
}
```
