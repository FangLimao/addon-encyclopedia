# 客户端群系文件文档 - water_appearance

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

Sets the water surface color used during rendering. Biomes without this component will have default water surface color behavior.

## 参数

| 名称 | 类型 |  可选  | 说明 |
|:-----------|:-----------|:-------|:-----------|
|surface_color| Object of type Color255RGB| 是| RGB color of the water surface.|


## 范例 JSON

```JSON
      "minecraft:water_appearance": {
        "surface_color": "#62529e"
      }
```      