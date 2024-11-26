# 物品组件 -  minecraft:record
`minecraft:record`组件将物品指定为音乐唱片，但仅能使用原版的音频，**无法使用自定义音频**。
## 参数

| 名称 | 默认值 | 类型 | 说明  |
|:------------|:------------|:------------|:------------|
| comparator_signal | 1 | 整数 | 对红石比较器输出的信号强度，需要在 1-13 的范围内|
| duration | *未设置* | 小数 | 唱片的播放时长 |
| sound_event | *未设置* | 字符串 | 唱片的音频事件，可用的音频事件列表请参阅[这里](../../../mc-doc/soundEvent.md) |

## 范例
```json
"minecraft:record": {
    "comparator_signal": 1,
    "duration": 5,
    "sound_event": "far"
}
```
