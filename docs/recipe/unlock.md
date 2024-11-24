# 配方解锁
配方解锁在 1.20.30 中加入到游戏中，要使用配方解锁功能，配方的格式版本与清单文件的 `min_engine_version` 必须在 1.20.11 以上。[^1]

你还需要在配方文件内添加 `unlock` 数组来控制配方应该在何时解锁，一般玩家获得配方的原料时将会解锁该配方：

```json
"unlock": [
  {
    "item": "minecraft:iron_ingot" // 玩家将在获得铁锭时解锁配方
  },
  {
    "item": "minecraft:wool",
    "data": 1 // 玩家将在获得数据值为1的羊毛（橙色羊毛）时时解锁配方
  },
  {
    "context": "PlayerInWater" // 玩家解锁配方的事件
  }
]
```
## 上下文
可以通过`context`字段设定配方的特殊解锁方式，下面是原版配方中用到的上下文：

| 上下文 | 说明 |
|:--- |:--- |
| None | 无 |
| AlwaysUnlocked | 始终解锁 |
| PlayerInWater | 玩家入水时解锁 |
| PlayerHasManyItems | 玩家拥有许多物品时解锁 |


[^1]: 推荐格式版本为 1.20.30