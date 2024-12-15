# 方块组件 - minecraft:flammable

> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:flammable`组件设置方块的引燃几率。

| minecraft:flammable | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |    布尔值/JSON 对象      |
| 默认值                  |     `false`      |

如果设置为`true`，则使用默认的引燃几率；如果设置为`false`，则该方块将无法因火的传播而燃烧，但仍然可以直接点燃。

## 参数

当组件数据类型为 JSON 对象时，该组件具有以下属性：

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
|`catch_chance_modifier`| 5| 整数 | 方块的引燃几率 |
|`destroy_chance_modifier`| 20| 整数 | 方块的烧毁几率 |

以上两个属性的默认值均与木板相同。

### catch_chance_modifier
`catch_chance_modifier`是方块的引燃几率，数值必须≥0，数值越大越容易着火：

- 如果给定的值大于0，着火后火焰会燃烧到被烧毁（如果`destroy_chance_modifier`为0，方块将一直燃烧）
- 如果给定的值等于0，着火后火焰会一直燃烧，而方块不会被烧毁（如果`destroy_chance_modifier`大于0，方块也会被烧毁）

### destroy_chance_modifier
`destroy_chance_modifier`是方块的烧毁概率，数值必须≥0，数值越大越容易烧毁。

## 范例
### 布尔值
```json
"minecraft:flammable": true
```
### JSON 对象
```json
"minecraft:flammable": {
     "catch_chance_modifier": 5,
     "destroy_chance_modifier": 20
}
```
