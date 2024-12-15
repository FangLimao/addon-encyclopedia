# 方块组件 - minecraft:crafting_table

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:crafting_table`组件将方块设置为工作台。

通过这种组件设置的工作台只支持合成有序配方和无序配方，而不支持酿造配方或熔炼配方。

| minecraft:crafting_table | 组件信息  |
| ------------------------ | --------- |
| 数据类型                 | JSON 对象 |
| 默认值                   |           |

## 参数

| 名称          | 默认值   | 类型   | 说明                                                   |
| :------------ | :------- | :----- | :----------------------------------------------------- |
| crafting_tags | _未设置_ | 数组   | 工作台的标签，每个标签最多 64 字符，最多设置 64 个标签 |
| table_name    | _未设置_ | 字符串 | 工作台 UI 的显示名称，会优先解析为本地化字符串         |

## 特殊情况

如果两个不同的配方输出了同一种物品，那么配方书将优先选择先被游戏被解析的配方；而如果两个配方的输入完全相同，合成将产生随机结果。

## 范例
```json
"minecraft:crafting_table": {
     "crafting_tags": ["custom_crafting_tag"],
     "table_name": "自定义合成台"
}
```
