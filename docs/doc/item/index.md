# 物品文档
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

## 物品组件
以下是所有可用的组件：
  
 | 名称  | 说明 | 依赖组件 | 
 |:----------|:----------|:----------|
 | [minecraft:allow_off_hand](components/allow_off_hand.md) |  决定物品是否可以放在副手槽中 |  | 
 | [minecraft:block_placer](components/block_placer.md) |  将物品设置为方块的播种组件，使用带有此组件的物品时会放置对应的方块 |  |  
 | [minecraft:can_destroy_in_creative](components/can_destroy_in_creative.md) | 决定物品是否会可以在创造模式下破坏方块 |  |  
 | [minecraft:cooldown](components/cooldown.md) | 设置物品的冷却时间 |   | 
 | [minecraft:damage](components/damage.md) | 设置物品的攻击伤害 |   | 
 | [minecraft:digger](components/digger.md) | 设置物品挖掘特定方块的速度 |   | 
 | [minecraft:display_name](components/display_name.md) | 设置物品显示的名称 |   | 
 | [minecraft:durability](components/durability.md) | 设置物品耐久值 |   | 
 | [minecraft:enchantable](components/enchantable.md) | 使物品可以被附魔，并指定物品可以被附上什么类型的魔咒 |   | 
 | [minecraft:entity_placer](components/entity_placer.md) | 允许使用带有此组件的物品时会放置对应实体 |   | 
 | [minecraft:food](components/food.md) | 将物品设置为食物 | [minecraft:use_modifiers](components/use_modifiers.md) | 
 | [minecraft:fuel](components/fuel.md) | 将物品设置为可以为熔炉供能的燃料 | |
 | [minecraft:glint](components/glint.md) | 决定物品是否有附魔光效 | |
 | [minecraft:hand_equipped](components/hand_equipped.md) | 决定物品在手中是否以工具形式握持 | |
 | [minecraft:hover_text_color](components/hover_text_color.md) |  鼠标悬停时物品名字的颜色 | |
 | [minecraft:icon](components/icon.md) | 设置物品的图标 | |
 | [minecraft:interact_button](components/interact_button.md) | 确定持有物品时是否显示交互按钮 | |
 | [minecraft:liquid_clipped](components/liquid_clipped.md) | 决定物品是否可以与流体交互 | |
 | [minecraft:max_stack_size](components/max_stack_size.md) |决定物品的最大堆叠 |  |
 | [minecraft:projectile](components/projectile.md) | 使物品可以像箭一样发射出去 |  |
 | [minecraft:record](components/record.md) | 将物品指定为音乐唱片，但仅能使用原版的音频，**无法使用自定义音频** |  |
 | [minecraft:repairable](components/repairable.md) |决定如何修复这个物品，以及修复后恢复的耐久值 |  |
 | [minecraft:shooter](components/shooter.md) | 使物品可以像弓和弩一样发射弹射物 | [minecraft:use_modifiers](components/use_modifiers.md) |
 | [minecraft:should_despawn](components/should_despawn.md) |决定物品的实体形式是否可以超时消失 | |
 | [minecraft:stacked_by_data](components/stacked_by_data.md) | 决定物品是否按照数据值堆叠 | |
 | [minecraft:tags](components/tags.md) | 设置物品的标签 | |
 | [minecraft:throwable](components/throwable.md) | 使物品可以被投掷出去 |  |
 | [minecraft:use_animation](components/use_animation.md) | 定义物品使用的动画 |  |
 | [minecraft:use_modifiers](components/use_modifiers.md) | 定义物品的使用时长及使用物品时对玩家移动速度的修改值 |  |
 | [minecraft:wearable](components/wearable.md) | 使物品可以被穿戴 | |
 