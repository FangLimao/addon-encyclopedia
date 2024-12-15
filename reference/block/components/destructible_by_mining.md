# 方块组件 - minecraft:destructible_by_mining

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:destructible_by_mining`设置方块的挖掘时间。

| minecraft:destructible_by_mining | 组件信息         |
| ----------------------- | ---------------- |
| 数据类型                | 布尔值/JSON 对象 |
| 默认值                  | `true`           |

如果设置为`true`，那么挖掘该方块将花费默认时间；如果设置为`false`，则该方块无法被挖掉。

## 参数

当组件数据类型为 JSON 对象时，该组件具有以下属性：

|         名称         | 类型 | 默认值 | 说明                               |
| :------------------: | :--: | :----: | :--------------------------------- |
| item_specific_speeds | 数组 |        | 设置特定物品挖掘该方块的速度       |
|  seconds_to_destroy  | 小数 |  0.0   | 设置挖掘该方块花费的时间，单位为秒 |

### item_specific_speeds <Badge type="tip" text="^1.21.50" />

`item_specific_speeds`数组的每一个元素具有以下属性：

|     名称      |   类型   | 默认值 | 说明                         |
| :-----------: | :------: | :----: | :--------------------------- |
|     item      | 物品描述 |        | 指定一个或多个特定的物品     |
| destroy_speed |   小数   |  0.0   | 特定物品挖掘该方块花费的时间 |

## 范例

### 布尔值

```json
"minecraft:destructible_by_mining": true
```

### JSON 对象

```json
"minecraft:destructible_by_mining": {
  "seconds_to_destroy": 10,
  "item_specific_speeds": [
    {
      "item": { "tags": "q.any_tag('minecraft:is_pickaxe', 'my_pack:custom_tool') " },
      "destroy_speed": 5.0
    }
  ]
}
```

```json
"minecraft:destructible_by_mining": {
	"seconds_to_destroy": 10,
	"item_specific_speeds": [
		{
			"item": { "tags": "q.any_tag('minecraft:is_pickaxe') " },
			"destroy_speed": 5.0
		}
	]
}
```

```json
"minecraft:destructible_by_mining": {
	"seconds_to_destroy": 10,
	"item_specific_speeds": [
		{
			"item": "minecraft:iron_pickaxe",
			"destroy_speed": 5.0
		},
		{
			"item": "minecraft:diamond_pickaxe",
			"destroy_speed": 2.0
		}
	]
}
```
