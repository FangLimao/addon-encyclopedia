---
author: iconicNurdle
ms.author: mikeam
title: 方块组件 - tag
description: "A reference document detailing the 'tag' block component"
ms.service: minecraft-bedrock-edition
---

# 方块组件 - tag:

> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`tag:` is an empty JSON Object that defines a tag to be added to a block. 

The component has no body or parameters, it is simply a flag, and when the block is parsed it will be added to the block's tag list. 

Creators can use either [vanilla block tags](../VanillaBlockTags.md) or make their own with a proper namespace. 

| minecraft:collision_box | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |          |
| 默认值                  |          |

## 范例

```json
"tag:minecraft:is_pickaxe_item_destructible": {},
"tag:minecraft:diamond_tier_destructible": {},
"tag:example_namespace:custom_block_tag": {}
```
