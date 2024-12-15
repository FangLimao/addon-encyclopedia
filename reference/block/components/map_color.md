---
author: iconicNurdle
ms.author: mikeam
title: 方块组件 - minecraft:map_color
description: "A reference document detailing the 'map_color' block component"
ms.service: minecraft-bedrock-edition
---

# 方块组件 - minecraft:map_color

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:map_color` is a `String` component that sets the color of the block when rendered to a map. The color is represented as a hex value in the format `#RRGGBB`. May also be expressed as an array of [R, G, B] from 0 to 255. If this component is omitted, the block will not show up on the map.

| minecraft:collision_box | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |          |
| 默认值                  |          |

## Default Value of the Component

This component is specified as a `Hex String` to describe your color of choice, so there is no default value. You must provide a valid hex string in order to use this component. If this component is omitted, the color shown on the map will be that of the block below it.

## 范例

```json
"minecraft:map_color": "#FFFFFF"
```
