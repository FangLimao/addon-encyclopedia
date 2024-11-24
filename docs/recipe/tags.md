# 配方标签
配方标签用于定义配方适用的合成方块。

## 原版配方标签
| 标签 | 适用范围 | 对应合成方块 | 
|:---|:---|:---|
| crafting_table | 有序/无序配方 | 工作台 |
| stonecutter | 无序配方 | 切石机 |
| furnace |	熔炉配方 | 熔炉 |
| smoker | 熔炉配方	| 烟熏炉 |
| campfire | 熔炉配方 |	篝火 |
| soul_campfire | 熔炉配方 | 灵魂篝火 |
| brewing_stand | 酿造配方 | 酿造台 |
| smithing_table | 锻造配方 | 锻造台 |
| material_reducer | | 材料分解器（教育版） |

## 自定义配方标签
可以通过自定义方块的 `minecraft:crafting_table` 组件中的 `crafting_tags` 数组来实现自定义配方标签。

这种方法自定义的配方标签仅适用于有序/无序配方，目前暂时无法自定义熔炉、锻造、酿造配方标签。

## 空合成标签
如果想禁用一个配方，需要将配方的`tag`数组指定为`[""]`。[^1]

## 引用
[^1]: 引用自[Bedrock Wiki](https://wiki.bedrock.dev/loot/recipes.html)