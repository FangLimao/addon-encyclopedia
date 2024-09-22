# 物品描述
`description`是物品的描述列表，其必须包含一个标识符，而其他字段则是可选的。

## 参数
| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| identifier |*未设置* | 字符串 | 物品的标识符，必须包含命名空间，但除非重写原版物品，否则不能使用`Minecraft`命名空间 |
| menu_category |*未设置*  | JSON 对象 | 物品的创造模式物品栏分组 |

### menu_category
`menu_category`定义了物品的创造模式物品栏的分类和分组，包含三个参数：

| 名称 | 默认值 | 类型 | 说明  |
|:----------|:----------|:----------|:----------|
| category | `items` | 字符串 | 物品的创造模式物品栏分类，可填：`construction`、`nature`、`equipment`、`items`和`none` |
| group | -- | 枚举 | 物品的创造模式物品栏分组，最多填256个字符 |
| is_hidden_in_commands | -- | 布尔值 | 确定物品是否可以通过命令获得 |

### `menu_category`枚举
以下是`menu_category`中`group`可填的值：

- itemGroup.name.anvil
- itemGroup.name.arrow
- itemGroup.name.axe
- itemGroup.name.banner
- itemGroup.name.banner_pattern
- itemGroup.name.beacon
- itemGroup.name.bed
- itemGroup.name.bell
- itemGroup.name.boat
- itemGroup.name.boots
- itemGroup.name.brick
- itemGroup.name.buttons
- itemGroup.name.cactus
- itemGroup.name.camera
- itemGroup.name.candles
- itemGroup.name.chemistrytable
- itemGroup.name.chest
- itemGroup.name.chestboat
- itemGroup.name.chestplate
- itemGroup.name.chiseledBookshelf
- itemGroup.name.clay
- itemGroup.name.climbing
- itemGroup.name.cobblestone
- itemGroup.name.composter
- itemGroup.name.compounds
- itemGroup.name.concrete
- itemGroup.name.concretePowder
- itemGroup.name.constructionMisc
- itemGroup.name.cookedFood
- itemGroup.name.copper
- itemGroup.name.coral
- itemGroup.name.coral_decorations
- itemGroup.name.craftingTables
- itemGroup.name.crop
- itemGroup.name.door
- itemGroup.name.dirt
- itemGroup.name.dye
- itemGroup.name.eggBlocks
- itemGroup.name.element
- itemGroup.name.enchantedBook
- itemGroup.name.enchantingTable
- itemGroup.name.endPortalFrame
- itemGroup.name.endRod
- itemGroup.name.fence
- itemGroup.name.fenceGate
- itemGroup.name.fireworkStars
- itemGroup.name.firework
- itemGroup.name.flower
- itemGroup.name.furnaces
- itemGroup.name.goatHorn
- itemGroup.name.glassPane
- itemGroup.name.glass
- itemGroup.name.glazedTerracotta
- itemGroup.name.glowstone
- itemGroup.name.grass
- itemGroup.name.gravel
- itemGroup.name.greenery
- itemGroup.name.grindStone
- itemGroup.name.hanging_sign
- itemGroup.name.helmet
- itemGroup.name.hoe
- itemGroup.name.horseArmor
- itemGroup.name.ice
- itemGroup.name.ironFence
- itemGroup.name.leaves
- itemGroup.name.lectern
- itemGroup.name.leggings
- itemGroup.name.lights
- itemGroup.name.lingeringPotion
- itemGroup.name.log
- itemGroup.name.minecart
- itemGroup.name.miscFood
- itemGroup.name.mobEgg
- itemGroup.name.monsterStoneEgg
- itemGroup.name.mushroom
- itemGroup.name.musicBlocks
- itemGroup.name.natureBuildingBlocks
- itemGroup.name.natureMisc
- itemGroup.name.ore
- itemGroup.name.oreBlocks
- itemGroup.name.permission
- itemGroup.name.pickaxe
- itemGroup.name.pistons
- itemGroup.name.potion
- itemGroup.name.potterySherds
- itemGroup.name.planks
- itemGroup.name.pressurePlate
- itemGroup.name.products
- itemGroup.name.pumpkins
- itemGroup.name.purpur
- itemGroup.name.rail
- itemGroup.name.rawFood
- itemGroup.name.record
- itemGroup.name.redstone
- itemGroup.name.redstoneContainers
- itemGroup.name.redstoneProducers
- itemGroup.name.sand
- itemGroup.name.sandstone
- itemGroup.name.sapling
- itemGroup.name.sculk
- itemGroup.name.seed
- itemGroup.name.shovel
- itemGroup.name.shulkerBox
- itemGroup.name.sign
- itemGroup.name.skull
- itemGroup.name.slab
- itemGroup.name.smithing_templates
- itemGroup.name.splashPotion
- itemGroup.name.stairs
- itemGroup.name.stainedClay
- itemGroup.name.stone
- itemGroup.name.stoneBrick
- itemGroup.name.sword
- itemGroup.name.tnt
- itemGroup.name.torch
- itemGroup.name.trapdoor
- itemGroup.name.walls
- itemGroup.name.wood
- itemGroup.name.wool
- itemGroup.name.woolCarpet

## 范例
```json
{  
  "format_version": "1.20.20",  
  "minecraft:item": {  
    "description": {  
      "identifier": "minecraft:blaze_rod",  
      "menu_category": {  
        "group": "itemGroup.name.blaze",  
        "category": "equipment", 
        "is_hidden_in_commands": true 
      }  
    },  
    "components": {  
      "minecraft:fuel": {  
        "duration": 120.0  
      },  
      "minecraft:max_stack_size": 64,  
      "minecraft:icon": {  
        "texture": "blaze_rod"  
      },  
      "minecraft:hand_equipped": true,  
      "minecraft:display_name": {  
        "value": "Blaze Rod"  
      }  
    }
  }
}
```