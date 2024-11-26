# 物品组件 - minecraft:bundle_interaction
`minecraft:bundle_interaction` 为物品启用收纳袋的交互方案和物品提示框。


!!! note "注意"

    `minecraft:bundle_interaction`组件需要有`minecraft:storage_item`组件才可以正常工作

## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| num_viewable_slots | *未设置* | 整数 | 可查看收纳袋内物品的槽数，可填1~64。<br>在该值范围内，收纳袋的物品提示框会随着收纳物品的增加而增加；超过该值后，最下一行最右一位将显示为文字「+ 未展示物品数量」 |


### 范例

```json
{
  "format_version": "1.21.30",
  "minecraft:item": {
    "description": {
      "identifier": "minecraft:bundle"
    },
    "components": {
      "minecraft:icon": {
        "textures": {
          "default": "bundle"
        }
      },
      "minecraft:max_stack_size": 1,
      "minecraft:storage_item": {
        "max_slots": 64,
        "max_weight_limit": 64,
        "weight_in_storage_item": 4,
        "allow_nested_storage_items": true,
        "banned_items": [ "minecraft:shulker_box" ]
      },
      "minecraft:bundle_interaction": {
        "num_viewable_slots": 8
      }
    }
  }
}
```

以下内容应该被添加到`textures/textures_list.json`中：

```json
[
  "textures/items/bundle.png",
  "textures/items/bundle_open.png",
  "textures/items/bundle_open_back.png",
  "textures/items/bundle_open_front.png"
]
```
