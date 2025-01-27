# 方块组件 - minecraft:selection_box

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:collision_box`组件设置方块的选择箱大小。

| minecraft:selection_box | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |   布尔值/JSON 对象    |
| 默认值                  |     `true`     |

当数据类型为布尔值时，`true`代表使用默认的选择箱大小，`false`代表禁用方块选择箱。

## 参数
|   名称   |       默认值       |     类型      |                                            说明                                             |
| :------: | :----------------: | :-----------: | :-----------------------------------------------------------------------------------------: |
| `origin` | [-8.0, 0.0, -8.0]  | 向量[a, b, c] |             方块选择箱的锚点，单位为像素，必须在(-8, 0, -8)和(8, 16, 8)的范围内             |
|  `size`  | [16.0, 16.0, 16.0] | 向量[a, b, c] | 方块选择箱的大小，单位为像素，`origin` + `size` 的总和必须在(-8, 0, -8)和(8, 16, 8)的范围内 |
## 范例
### 禁用选择箱
```json
"minecraft:selection_box": false
```
### 自定义选择箱

```json
"minecraft:selection_box": {
     "origin": [-8.0, 0.0, -8.0],
     "size": [16.0, 16.0, 16.0]
}
```
