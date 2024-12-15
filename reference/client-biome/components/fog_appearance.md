# 客户端群系文件文档 - fog_appearance

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

Sets the fog settings used during rendering. Biomes without this component will have default fog settings.

## 参数

| 名称 | 类型 |  可选  | 说明 |
|:-----------|:-----------|:-------|:-----------|
|fog_identifier| String| 否 | Identifier of fog definition to use.|

## 范例

```json
      "minecraft:fog_appearance": {
        "fog_identifier": "minecraft:fog_the_end"
      }