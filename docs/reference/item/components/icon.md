# 物品组件 - minecraft:icon
!!! info "版权说明"
    本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可
    
`minecraft:icon`组件设置物品的图标。

## 参数
| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| textures | *未设置* | JSON 对象 | 默认情况下用于指定物品的图标，盔甲纹饰和调色板的纹理也可以在这里指定，**纹理必须填来自`资源包/textures/item_texture.json`的纹理名** |

### textures
| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| default | *未设置* | 字符串 | 默认情况下的图标 |
| icon_trim | *未设置* | 字符串 | 物品有盔甲纹饰时覆盖在默认纹理上的纹理 |

## 范例
```json
"minecraft:icon":{
    "textures": {
        "default": "apple"
    }
}
```
