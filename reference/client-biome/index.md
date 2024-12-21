# 客户端群系文件文档<Badge type="tip" text="^1.21.40" />

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

**客户端群系文件**设置了生物群系的客户端设置，它们不是「自定义生物群系」实验性玩法的一部分，也无法新增群系。

以前这些设置会从`biomes_client.json`中读取，但 1.21.40 开始，这个文件不再从内置资源包中加载，只有使用较旧基础游戏版本的世界会使用。

## 文件格式

| 名称                   | 类型           | 可选 | 说明           |
| :--------------------- | :------------- | :--- | :------------- |
| format_version         | 字符串         | 是   | 文件的格式版本 |
| minecraft:client_biome | 客户端群系定义 | 是   |                |

## 客户端群系定义

客户端群系定义包括生物群系的客户端描述和组件：

| 名称        | 类型     | 可选 | 说明                             |
| :---------- | :------- | :--- | :------------------------------- |
| components  | 群系组件 | 是   | 要应用的群系组件                 |
| description | 群系描述 | 是   | 非组件的设置，包括生物群系的名称 |

### 群系描述

群系描述是非组件的设置，包括生物群系的名称

| 名称       | 类型   | 可选 | 说明                                        |
| :--------- | :----- | :--- | :------------------------------------------ |
| identifier | 字符串 | 是   | 群系的 ID，必须与行为包中定义群系 ID 相对应 |

### 群系组件

| 组件                                                 |
| :--------------------------------------------------- |
| [ambient_sounds](./components/ambient_sounds.md)     |
| [biome_music](./components/biome_music.md)           |
| [fog_appearance](./components/fog_appearance.md)     |
| [sky_color](./components/sky_color.md)               |
| [water_appearance](./components/water_appearance.md) |

### 范例

```json
{
  "format_version": "1.21.40",
  "minecraft:client_biome": {
    "description": {
      "identifier": "the_end"
    },
    "components": {
      "minecraft:sky_color": {
        "sky_color": "#000000"
      },
      "minecraft:fog_appearance": {
        "fog_identifier": "minecraft:fog_the_end"
      },
      "minecraft:water_appearance": {
        "surface_color": "#62529e"
      }
    }
  }
}
```
