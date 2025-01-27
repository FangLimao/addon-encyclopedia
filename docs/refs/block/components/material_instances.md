# 方块组件 - minecraft:material_instances

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:material_instances`组件将纹理应用到方块实际的面上。

| minecraft:material_instances | 组件信息 |
| ----------------------- | -------- |
| 数据类型                | JSON 对象   |
| 默认值                  |          |

## 参数
| 名称 | 默认值   | 类型      | 说明 |
| * | *未设置* | 材质实例 | 应用到所有未定义的面的材质实例，**必须填写** | 
| 其他面的名称/材质实例名称 | *未设置* | 材质实例 | 应用到所有某个特定面的材质实例 | 

原版方块的面包括：

- `up`；
- `down`；
- `north`；
- `south`；
- `east`；
- `west`。

也可以先分配一个材质实例，再将这个材质实例分配给其他面。

### 材质实例
每个材质实例包含以下参数：

| 名称 | 默认值   | 类型      | 说明 |
|:----|:----|:----|:----|
| ambient_occlusion | true | 布尔值 | 设置该面是否启用平滑光照 |
| face_dimming | true | 布尔值 | 设置该面是否受到光照影响 |
| render_method | opaque | 枚举 | 设置该面的渲染方法 |
| texture | *未设置* | 字符串 | 设置该面的纹理 |

目前有以下可用的渲染方法：

- opaque：没有alpha通道的规则方块纹理，不允许出现透明或半透明像素；
- double_sided：完全禁用背面剔除的方块纹理；
- blend：允许透明和半透明像素，用于染色玻璃；
- alpha_test：允许透明像素，不允许半透明像素，同时禁用背面剔除，用于刷怪笼；
- alpha_test_single_sided：允许透明像素，不允许半透明像素，同时启用背面剔除，用于未染色的玻璃。

## 范例

```json
"minecraft:material_instances": {
    "*": {
        "texture":"custom_texture",
        "ambient_occlusion": false,
        "face_dimming": false,
        "render_method": "alpha_test"
    }
}
```

```json
"minecraft:material_instances": {
    "*": {
      "texture":"backup_texture"
    },
    "custom_sides": {
      "texture": "side_texture"
    },
    "up": {
      "texture": "top_texture"
    },
    "down": {
      "texture": "bottom_texture"
    },
    "north": "custom_sides",
    "south": "custom_sides",
    "east": "custom_sides",
    "west": "custom_sides"
}
```
