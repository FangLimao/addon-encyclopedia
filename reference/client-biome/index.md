# 客户端群系文件文档

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

Minecraft client_biome files define client-side settings for biomes in resource packs.

This is the new preferred location for per-biome settings that used to be in biomes_client.json.

(As of base game version 1.21.40, biomes_client.json is no longer loaded from built-in Vanilla resource packs. That file will still be loaded for other content regardless of version, and worlds using older base game versions will also still use it.)

These files are not part of the 'Custom Biomes' experiment and do not cause biome definitions to exist on their own, but they can be used to customize client-side settings of custom biomes.

## JSON format and definition

All biomes should specify the version that they target via the `"format_version"` field. 

## Client Biome JSON File

Contains a format version and a Client Biome definition

| 名称 | 类型 |  可选  | 说明 |
|:-----------|:-----------|:-------|:-----------|
|format_version| String| 是| Version of the JSON schema used by this file|
|minecraft:client_biome| Object of type client biome definition| 是| A single client biome definition, containing rendering or sound settings related to a Biome defined by the game or a behavior pack|

## Client Biome Description

Contains non-component settings for a client biome.

| 名称 | 类型 |  可选  | 说明 |
|:-----------|:-----------|:-------|:-----------|
|identifier| String| 是| The name of the client biome, used by other features like the '/locate biome' command. Must match the name of a biome defined by the game or a behavior pack.|

## Client Biome Definition

Contains a description and components to define a biome.

| 名称 | 类型 |  可选  | 说明 |
|:-----------|:-----------|:-------|:-----------|
|components| Object of type client biome components| 是| Components for this biome.|
|description| Object of type client biome description| 是| Non-component settings, including the client biome name.|

## Client Biome Components
|Client Biome Component JSON |
|:-----|
|[ambient_sounds](./components/ambient_sounds.md)|
|[biome_music](./components/biome_music.md)|
|[fog_appearance](./components/fog_appearance.md)|
|[sky_color](./components/sky_color.md)|
|[water_appearance](./components/water_appearance.md)|


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