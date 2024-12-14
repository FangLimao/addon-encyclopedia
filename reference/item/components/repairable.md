# 物品组件 - minecraft:repairable
> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

    
`minecraft:repairable`组件决定如何修复这个物品，以及修复后恢复的耐久值。

## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| repair_items | *未设置* | 数组 | 定义可以用来修复该物品的物品及回复的耐久值 |

### repair_items
`repair_items`数组下每一个元素具有以下属性：

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| repair_amount | *未设置* | 整数/Molang表达式 | 修复后回复的耐久值，可以用`context.other`获取铁砧第二个槽位的物品 |
| items | *未设置* | 数组（字符串类型） | 可以用来修复该物品的物品 |

## 范例
```json
"minecraft:repairable":{
    "repair_items": [
    {
       "items": ["iron_ingot"], // 定义铁锭可用于修复该物品
       "repair_amount": 50 // 指定铁锭修复后物品将回复50点耐久值
    }
   ]
}
```
