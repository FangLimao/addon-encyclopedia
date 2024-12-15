# 方块组件 - minecraft:destructible_by_explosion

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:destructible_by_explosion`组件设置方块的爆炸抗性。

| minecraft:destructible_by_explosion | 组件信息         |
| ----------------------------------- | ---------------- |
| 数据类型                            | 布尔值/JSON 对象 |
| 默认值                              | `true`           |

如果设置为`true`，则该方块将具有默认的爆炸抗性；如果设置为`false`，则该方块不会被爆炸摧毁。

## 参数

当组件数据类型为 JSON 对象时，该组件具有以下属性：

| 名称                 | 默认值 | 类型 | 说明                                           |
| :------------------- | :----- | :--- | :--------------------------------------------- |
| explosion_resistance | 0.0    | 小数 | 方块的爆炸抗性，抗性越大越不容易在爆炸中被摧毁 |

## 范例

### 布尔值

```json
"minecraft:destructible_by_explosion": true
```

### JSON 对象

```json
"minecraft:destructible_by_explosion": {
    "explosion_resistance": 50
}
```
