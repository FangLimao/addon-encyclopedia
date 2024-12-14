# 方块组件 - minecraft:collision_box
> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可


`minecraft:collision_box`组件定义了方块的碰撞箱大小。

其可为布尔值或JSON对象，当为布尔值时，`true`代表使用默认的碰撞箱大小，`false`代表禁用方块碰撞箱。

如果忽略该组件，游戏将其设置为默认值`true`，即使用默认的碰撞箱大小。

## 参数
| 名称 | 默认值 | 类型 | 说明  |
|:-----------:|:-----------:|:-----------:|:-----------:|
| `origin` | [-8.0, 0.0, -8.0]| 向量[a, b, c]| 方块碰撞箱的锚点，单位为像素，必须在(-8, 0, -8)和(8, 16, 8)的范围内 |
| `size` | [16.0, 16.0, 16.0] | 向量[a, b, c]| 方块碰撞箱的大小，单位为像素，`origin` + `size` 的总和必须在(-8, 0, -8)和(8, 16, 8)的范围内 |

## 范例
### 禁用碰撞箱
```json
"minecraft:collision_box": false
```
### 自定义碰撞箱
```json
"minecraft:collision_box": {
    "origin": [-8.0, 0.0, -8.0],
    "size": [16.0, 8.0, 16.0]
}
```
