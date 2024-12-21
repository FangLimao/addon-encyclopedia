# 客户端群系文件文档 - ambient_sounds

> [!INFO]
> 本文译自[Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:ambient_sounds`组件为生物群系设置环境音效，要设置的声音必须在sounds.json的`individual_named_sounds`中。

## 参数

| 名称     | 类型   | 可选 | 说明                                                                           |
| :------- | :----- | :--- | :----------------------------------------------------------------------------- |
| addition | 字符串 | 否   | 偶尔在玩家位置播放的音效名称                                                   |
| loop     | 字符串 | 否   | 当玩家处于生物群系内时循环播放的音效名称                                       |
| mood     | 字符串 | 否   | 当玩家处于光照较暗或较为狭窄的地方播放的音效，没有设置将默认使用`ambient.cave` |
