# 方块组件 - minecraft:item_visual

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:item_visual`组件设置方块的物品形式。

| minecraft:item_visual | 组件信息  |
| --------------------- | --------- |
| 数据类型              | JSON 对象 |
| 默认值                |           |

## 参数
> [!NOTE]
>
> 该组件需要有`minecraft:geometry`和`minecraft:material_instances`组件才可以正常工作

| 名称               | 默认值   | 类型      | 说明                                                                                        |
| :----------------- | :------- | :-------- | :------------------------------------------------------------------------------------------ |
| geometry           | _未设置_ | JSON 对象 | 设置方块物品的模型，语法和[minecraft:geometry](./geometry.md)组件相同                       |
| material_instances | _未设置_ | JSON 对象 | 设置方块物品的材质实例，语法和[minecraft:material_instances](material_instances.md)组件相同 |

## 范例

```json
"minecraft:item_visual":{
    "geometry": {
        "identifier": "minecraft:geometry.full_block"
    },
    "material_instances": {
        "*": {
            "texture": "dirt",
            "render_method": "opaque"
       }
    }
},
"minecraft:geometry": {
    "identifier": "minecraft:geometry.full_block"
},
"minecraft:material_instances": {
    "*": {
        "texture": "stone",
        "render_method": "opaque"
    }
}
```
