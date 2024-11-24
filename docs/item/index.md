# 物品
## 物品属性定义
物品属性定义帮助系统确定如何解析和初始化物品，包括`format_version`和`minecraft:item`两部分。

### format_version 
指定该物品的格式版本，用于帮助游戏确定按照何种模式解析物品。
  
### minecraft:item 
物品的定义，包括描述`description`和组件`components`部分

#### 参数
| 名称 | 说明 |
|:----------|:----------|
| [components](#物品组件) | 指定物品的组件 |
| [description](./description.md) | 描述这个物品，其中标识符是必填的 |