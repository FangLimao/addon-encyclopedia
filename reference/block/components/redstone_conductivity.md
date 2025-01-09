---
author: iconicNurdle
ms.author: mikeam
title: 方块组件 - minecraft:redstone_conductivity
description: "A reference document detailing the 'redstone_conductivity' block component"
ms.service: minecraft-bedrock-edition
---

# 方块组件 - minecraft:redstone_conductivity

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:redstone_conductivity` specifies whether a block has redstone properties. If the component is not provided, the default values are used. 

Requires 1.21.30 format version and above. Experimental toggles required: Upcoming Creator Features (in format versions before **1.21.30**).

| minecraft:redstone_conductivity | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |          |
| 默认值                  |          |

## 参数

| 名称 | 类型 | 默认值 | 说明  |
:-----------:|:-----------:|:-----------:|:-----------:
| allows_wire_to_step_down | Boolean | True | Specifies if redstone wire can stair-step downward on the block. |
| redstone_conductor | Boolean | False | Specifies if the block can be powered by redstone.|

