# 客户端群系文件文档 - ambient_sounds

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

Sets the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file.

## 参数

| 名称 | 类型 |  可选  | 说明 |
|:-----------|:-----------|:-------|:-----------|
|addition| String| 否 | Named sound that occasionally plays at the listener position|
|loop| String| 否 | Named sound that loops while the listener position is inside the biome|
|mood| String| 否 | Named sound that rarely plays at a nearby air block position when the light level is low. Biomes without an ambient mood sound will use the 'ambient.cave' sound.|