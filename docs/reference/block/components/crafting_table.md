---
author: iconicNurdle
ms.author: mikeam
title: 方块组件 - minecraft:crafting_table
description: "A reference document detailing the 'crafting_table' block component"
ms.service: minecraft-bedrock-edition
---

# 方块组件 - minecraft:crafting_table

`minecraft:crafting_table` is a `JSON Object` component that makes your block into a custom crafting table which enables the crafting table UI and the ability to craft recipes. This component supports only `recipe_shaped` and `recipe_shapeless` typed recipes and not others like `recipe_furnace` or `recipe_brewing_mix`. If there are two recipes for one item, the recipe book will pick the first that was parsed. If two input recipes are the same, crafting may assert and the resulting item may vary.

## Default Value of the Component

This component is specified as a `JSON Object`, so it does not have a default value. You must provide this component in order for your block to become a custom crafting table.

## Parameters

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
|crafting_tags| *not set* |Array |Defines the tags recipes should define to be crafted on this table. Limited to 64 tags. Each tag is limited to 64 characters.|
|table_name| *not set* |String |Specifies the language file key that maps to what text will be displayed in the UI of this table. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this field is omitted, the name displayed will default to the name specified in the "display_name" component. If this block has no "display_name" component, the name displayed will default to the name of the block.|

## 范例

```json
"minecraft:crafting_table": {
     "crafting_tags": ["crafting_table", "custom_crafting_tag"],
     "table_name": "My Crafting Table"
}
```
