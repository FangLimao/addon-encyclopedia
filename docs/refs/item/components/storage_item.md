# 物品组件 - minecraft:storage_item
> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:storage_item`组件令物品能够存储与之关联的动态容器的数据。

> [!IMPORTANT]
> 该组件可以单独出现，但只有定义了`minecraft:bundle_interaction`组件后玩家才可以正常与其交互。

## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| max_slots  | *未设置* | 整数 | 容器的槽数，应该在1 ~ 64范围内  |
| max_weight_limit |  | 整数 | 容器中所有物品的最大允许重量总和  |
| allow_nested_storage_items | *未设置* | 布尔值 | 是否允许带有`minecraft:storage_item`组件的物品放入容器内 |
| weight_in_storage_item | *未设置* | 整数 | 容器对应的物品在其他动态容器中的权重，0表示此物品不允许在其他动态容器中存在 |
| banned_items | *未设置* | 字符串 | 禁止放入容器的物品 |
| allowed_items | *未设置* | 字符串 | 允许放入容器的物品 |

### max_weight_limit
`max_weight_limit`定义了容器中所有物品的最大权重总和：

- 最大堆叠为64的物品的每件权重为1；
- 最大堆叠为16的每件权重为4；
- 最大堆叠为1的每件权重为64。

该值应该在 1 ~ 64 范围内。

### 范例

```json
{
  "format_version": "1.21.30",
  "minecraft:item": {
    "description": {
      "identifier": "minecraft:bundle"
    },
    "components": {
      "minecraft:icon": {
        "textures": {
          "default": "bundle"
        }
      },
      "minecraft:max_stack_size": 1,
      "minecraft:storage_item": { // [!code focus]
        "max_slots": 64, // [!code focus]
        "max_weight_limit": 64, // [!code focus]
        "weight_in_storage_item": 4, // [!code focus]
        "allow_nested_storage_items": true, // [!code focus]
        "banned_items": [ "minecraft:shulker_box" ] // [!code focus]
      }, // [!code focus]
      "minecraft:bundle_interaction": {
        "num_viewable_slots": 8
      }
    }
  }
}
```