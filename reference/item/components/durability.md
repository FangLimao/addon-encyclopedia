# 物品组件 - minecraft:durability
> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

    
`minecraft:durability`组件设置物品在损坏前能够承受的最大损坏值。

## 参数
| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| damage_chance | *未设置* | JSON 对象| 使用该物品导致失去耐久的概率，默认为100%，应该是一个指定了最小值（`min`）和最大值（`max`）的整数范围 |
| max_durability | *未设置* | 整数 | 必选参数，指定物品在损坏前能够承受的最大损坏值（即最大耐久值），最小值为0 |

### damage_chance
| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| min | *未设置* | 整数 | 使用该物品导致失去耐久的最小概率 |
| max | *未设置* | 整数 | 使用该物品导致失去耐久的最大概率 |

## 范例
```json
"minecraft:durability":{
    "damage_chance": {
        "min": 10,
        "max": 50
    },
    "max_durability": 36
}
```
