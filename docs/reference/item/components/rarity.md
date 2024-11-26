# 物品组件 - minecraft:rarity
`minecraft:rarity`组件指定物品的稀有度。

物品的稀有度将决定其名称的颜色，但当物品指定了`minecraft:hover_text_color`组件时，`minecraft:hover_text_color`指定的颜色将覆盖稀有度颜色。

## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| value| *未设置* | 字符串 | 设置物品的稀有度，可填`common`、`uncommon`、`rare`和`epic`。<br>物品的稀有度在被附魔后会自动增加。 |


## 范例

```json
{ 
"format_version": "1.21.30", 
  "minecraft:item": { 
    "description": { 
      "identifier": "demo:custom_chestplate", 
      "menu_category": { 
        "category": "equipment", 
        "group": "itemGroup.name.chestplate" 
      }
    },
    "components": { 
      "minecraft:rarity": "rare"
    }
  } 
}
```