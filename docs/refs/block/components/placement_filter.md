# 方块组件 - minecraft:placement_filter

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:placement_filter`组件设置何时可以将方块放置到世界中。

默认情况下，自定义方块可以放置在任何地方，没有放置限制，除非此组件中设置。

| minecraft:placement_filter | 组件信息 |
| ----------------------- | -------- |
| 数据类型                | JSON 对象 |
| 默认值                  |          |

## 参数
| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| conditions | *未设置* | 数组 | 方块放置条件，最多64个，最少1个 |

### 放置条件

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| `allowed_faces` | *未设置* | 数组 | 限制该方块可以放在其他方块的哪个面上 |
| `block_filter` | *未设置* | 数组 | 设置该方块放在哪些方块上，最多64个。<br> 数组中的每个元素都应该是字符串或JSON 对象，使用JSON 对象时支持根据标签或状态来筛选可放置方块。 |

#### allowed_faces
`allowed_faces`限制该方块可以放在其他方块的哪个面上，可填：

- up：上面；
- down：下面；
- nort：北面；
- south：南面；
- east：东面；
- west：西面；
- side：侧面；
- all：所有面。

#### block_filter
当block_filter为JSON 对象时，其有以下属性：

| 名称 | 默认值 | 类型 | 说明  |
|:-----------:|:-----------:|:-----------:|:-----------:|
| `name`| | 字符串| 方块的命名空间ID |
| `states`| | 数组| 方块的方块状态及可用的值，以键值对格式表示 |
| `tags`| 1| 字符串| 填写Molang字符串，可用于查询具有特定标记的方块 |

## 范例

该范例将方块设置为可以放置在草方块或土块的顶部、底部或侧面：

```json
"minecraft:placement_filter":{
    "conditions": [
    {
        "allowed_faces": ["up", "down", "side"],
        "block_filter": ["grass", "dirt"]
    }
    ]
}
```

该范例将方块设置为可以放置在石头或丛林木板上：

```json
"minecraft:placement_filter":{
    "conditions": [
    {
        "allowed_faces": ["up"],
        "block_filter": [
            {
                "tags": "query.any_tag('stone')"
            },
            {
                "name": "minecraft:planks",
                "states": {
                    "wood_type": "jungle"
                }
            }
        ]
    }
    ]
}
```
