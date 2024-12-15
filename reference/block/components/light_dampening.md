---
author: iconicNurdle
ms.author: mikeam
title: 方块组件 - minecraft:light_dampening
description: "A reference document detailing the 'light_dampening' block component"
ms.service: minecraft-bedrock-edition
---

# 方块组件 - minecraft:light_dampening

> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:light_dampening` is an `Integer` component that sets the amount that light will be dampened when it passes through the block, in a range (0-15). Higher value means the light will be dampened more.

| minecraft:collision_box | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |          |
| 默认值                  |          |

## Default Value of the Component

This component is specified as an `Integer`. If this component is omitted, the default value for this component is `15` (a full block that doesn't let any light through).

## 范例

```json
"minecraft:light_dampening": 7
```
