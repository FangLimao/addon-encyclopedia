# 物品组件 - minecraft:wearable
> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可


`minecraft:wearable`组件使物品可以被穿戴。

## 参数
| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| protection | 0 | 整数 | 物品提供的护甲值 |
| slot | *未设置* | 枚举 | 物品可以被穿戴的槽位，如果不是主手槽，则物品的最大堆叠应该是1 |

### 槽位枚举
以下是`slot`字段可填的值：

- slot.weapon.mainhand
- slot.weapon.offhand
- slot.armor.head
- slot.armor.chest
- slot.armor.legs
- slot.armor.feet
- slot.hotbar
- slot.inventory
- slot.enderchest
- slot.saddle
- slot.armor
- slot.chest
- slot.equippable

## 范例
```json
"minecraft:wearable":{
    "protection" : 5,
    "slot": "slot.chest"
}
```
