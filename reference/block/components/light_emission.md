---
author: iconicNurdle
ms.author: mikeam
title: 方块组件 - minecraft:light_emission
description: "A reference document detailing the 'light_emission' block component"
ms.service: minecraft-bedrock-edition
---

# 方块组件 - minecraft:light_emission

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:light_emission` is an `Integer` component that sets the amount of light this block will emit, in a range (0-15). A higher value means more light will be emitted.

| minecraft:collision_box | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |          |
| 默认值                  |          |

## Default Value of the Component

This component is specified as an `Integer`. If this component is omitted, the default value for this component is 0 (emits no light).

## 范例

```json
"minecraft:light_emission": 10
```
