---
author: iconicNurdle
ms.author: mikeam
title: 方块组件 - minecraft:loot
description: "A reference document detailing the 'loot' block component"
ms.service: minecraft-bedrock-edition
---

# 方块组件 - minecraft:loot

`minecraft:loot` is a Path String component that specifies the path to the loot table, relative to the behavior pack. Path string is limited to 256 characters.

## Default Value of the Component

This component is specified as a `Path String`, so it does not have a default value. You must provide a valid path to a loot table in order to use this component.

## 范例

```json
"minecraft:loot": "<path_to_behavior_pack>/loot_tables/customblockloot.json"
```
