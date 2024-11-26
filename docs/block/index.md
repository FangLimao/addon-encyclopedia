# 方块
## format_version
指定该方块的格式版本，用于帮助游戏确定按照何种模式解析方块。

## 参数

| 名称 | 默认值  | 类型 | 说明 |
|:----------|:----------|:----------|:----------|
|format_version|*未设置* | String| |
|minecraft:block|*未设置*| JSON Object| Block definition, which includes the `"description"` and `"components"` sections.|
|description|*未设置*|JSON Object|List of block characteristics that are applicable to all permutations of the block. The description MUST contain an identifier; the other fields are optional. View the other fields in [Block Description](BlockDescription.md).|
|components|*未设置*|JSON Object|List of all components used in this block. View the list of components in [Block Components List](\BlockComponents\BlockComponentsList.md). |

Another section that may be found inside the `"minecraft:block"` object is the "permutations" section. This section can hold different versions of a block, allowing you to specify which components you want the block to have under certain conditions.

## 范例

```json
{
{
  "format_version": "1.19.40",
  "minecraft:block": {
    "description": {
      "identifier": "custom:example_block"
    },
    "components": {
      "minecraft:loot": "loot_tables/example_block_loot.json",
      "minecraft:friction": 0.6,
      "minecraft:map_color": "#00ff00"
    }
  }
}
```