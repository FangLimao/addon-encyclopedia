# 方块组件 - minecraft:geometry

> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:geometry`设置方块的模型标识符，此标识符必须与当前加载的资源包中的已有模型的标识符匹配。

| minecraft:geometry | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |    字符串/JSON 对象      |
| 默认值                  |          |

## 属性

当组件数据类型为 JSON 对象时，该组件具有以下属性：

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
|`identifier`| | 字符串 | 方块的模型标识符 |
|`bone_visibility`| | JSON 对象 | 模型骨骼可见性 |

### bone_visibility <Badge type="tip" text="^1.20.10" />
`bone_visibility`用于设置模型中单个骨骼的可见性，对象中每个键值对格式为`骨骼名称: 可见性`：

```json
"minecraft:geometry": { 
  "identifier": "geometry:custom_geo", 
  "bone_visibility": { 
    "bone1": true, // [!code focus]
    "bone2": false // [!code focus]
   } 
}
```
在上面的例子里，`bone1`被设置为可见，而`bone2`被设置为不可见。

而除了布尔值以外，可见性也可以填Molang表达式，实现复杂的判断：

```json
"minecraft:geometry": { 
  "identifier": "geometry:custom_geo", 
  "bone_visibility": { 
    "bone114": "q.block_state('example_state') == 2", // [!code focus]
   } 
}
```
在上面的例子里，`bone114`只有在`example_state`为2时才会可见。


## 范例
```json
"minecraft:geometry": "geometry.custom_geo"
```

### 设置骨骼可见性
```json
"minecraft:geometry": { 
  "identifier": "geometry:custom_geo", 
  "bone_visibility": { 
    "bone1": true,
    "bone2": false
   } 
}
```
