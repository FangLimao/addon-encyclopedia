# 物品组件 - minecraft:display_name
!!! info "版权说明"
    本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可
    
`minecraft:display_name`组件设置物品显示的名称，该组件可以引用本地化文件中的翻译键。

## 参数
| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| value | *未设置* | 字符串/本地化翻译键 | 设置物品显示的名称 |

## 范例
### 字符串
```json
"minecraft:display_name":{
    "value": "secret_weapon"
}
```

### 本地化翻译键
```json
"minecraft:display_name":{
    "value": "item.snowball.name"
}
```
