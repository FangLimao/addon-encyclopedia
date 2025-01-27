
# 方块组件 - minecraft:transformation

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:transformation`组件支持旋转、缩放和转换方块，还支持围绕枢轴点进行旋转和缩放。

| minecraft:transformation | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |  JSON 对象 |
| 默认值                  |          |

## 参数
> [!NOTE]
> 该组件除了会影响世界中的方块之外，也会影响持有该方块时的物品栏，请务必在第一人称和第三人称视角中查看变换的结果，以确保视觉效果符合预期。

| 名称 | 默认值 | 类型 | 说明  |
|:----|:----|:----|:----|
| translation | 向量 `[x, y, z]` | [0, 0, 0] | 方块沿着每个轴平移的值 |
| scale | 向量 `[x, y, z]` | [1, 1, 1] | 方块沿每个轴缩放的值 |
| scale_pivot | 向量 `[x, y, z]` | [0, 0, 0] | 方块围绕枢轴点缩放的度数 |
| rotation | 向量 `[x, y, z]` | [0, 0, 0] | 方块在每个轴上旋转的度数 |
| rotation_pivot | 向量 `[x, y, z]` | [0, 0, 0] | 方块围绕枢轴点旋转的度数  |

## 范例

```json
"minecraft:transformation": {
  "translation": [0.0, 0.1, -0.1],
  "scale": [0.5, 1, 1.5],
  "rotation": [90, 180, 0]
}
```

```json
"minecraft:transformation": {
    "translation": [0.1, 0.1, 0.1],
    "scale": [0.5,0.5,0.5],
    "scale_pivot": [0.2,0.2,0.2],
    "rotation": [0, 0, 180],
    "rotation_pivot":[-0.25, -0.25, 0]
}
```