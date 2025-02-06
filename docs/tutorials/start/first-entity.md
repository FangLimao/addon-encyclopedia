# 第一个实体
附加包也允许我们通过数据驱动的方式来创建自定义实体，实体也由两部分组成：

- 行为文件
- 资源文件（客户端文件、动画、动画控制器、渲染控制器……）

与物品、方块不同的是，数据驱动的自定义实体接口较为丰富，而且原版的实体已经实现了全面数据驱动，我们可以对其进行覆盖与修改。

在本节中，我们会学习如何制作一个简单的自定义实体「红宝石守卫」，该生物类似于原版的灾厄村民，会攻击周围的玩家。

## 行为文件
在我们的行为包下新建`entities`文件夹，然后创建一个`<实体ID>.json`文件。

> [!TIP]
> 文件不一定必须按照`<实体ID>.json`的格式进行命名，这里这么做是为了方便后续查找；
> 
> 我们也可以把这个文件创建在`entities`的子文件夹下。

在这个文件中写入以下内容：

```json
{
  "format_version": "1.20.60",
  "minecraft:entity": {
    "description": {
      "identifier": "example:ruby_guardian",
      "is_spawnable": true,
      "is_summonable": true,
      "is_experimental": false
    },
    "components": {}
  }
}
```

`format_version`是文件使用的格式版本，这里是1.20.60；

在`description`中：

- `identifier`设置了实体的命名空间ID，注意这里的命名空间是`example`，在实际的项目中不建议使用；
- `is_summonable`设置了实体是否可以使用`/summon`命令召唤；
- `is_spawnable`设置了实体是否可以使用刷怪蛋或生成规则在世界中生成；
- `is_experimental`设置了实体是否为实验性实体。

在`components`中，我们可以为实体添加**组件**，每一个组件都可以为实体添加相应的功能，接下来我们就为其添加一些基础组件。

### 添加组件
#### 基本属性
以下组件为实体的基本组件，我们的实体一般都需要下列组件：

```json
"minecraft:type_family": {
  "family": ["monster", "ruby", "mob"]
},
"minecraft:health": {
  "value": 15,
  "max": 15
},
"minecraft:movement": {
  "value": 0.35
},
"minecraft:collision_box": {
  "width": 0.6,
  "height": 1.9
},
"minecraft:loot": {
  "table": "loot_tables/entities/ruby_guardian.json"
}
```

其中：

- `health`、`movement`、`collision_box`组件分别设置了实体的生命值、移动速度和碰撞箱；
- `type_family`组件为实体添加了[族](https://zh.minecraft.wiki/w/%E6%97%8F)；
- `loot`组件设置了实体死亡后的战利品。

除此以外，实体还需要**寻路和移动组件**来使其能够在世界中正常移动：

```json
"minecraft:physics": {},
"minecraft:jump.static": {},
"minecraft:movement.basic": {},
"minecraft:navigation.walk": {
  "can_path_over_water": true
}
```

其中：

- `physics`组件设置实体的物理属性，包括其是否受重力影响或与其他物体发生碰撞，这里使用默认值；
- `jump.static`组件使得实体可以进行跳跃以便于通行，这里使用默认值；
- `movement.basic`组件为实体添加最基本的移动能力；
- `navigation.walk`是一个寻路组件，它让实体通过四处走动和上下跳跃方块进行移动。

#### 行为意向
以`minecraft:behavior`开头的组件决定了实体在何时做什么，所有行为都包含`priority`属性，用于判断同时可以执行多个行为时，具体执行哪个行为，越小的值优先级越高。

以下是我们添加的第一部分行为组件，它们让实体可以随机移动并张望：

```json
"minecraft:behavior.random_stroll": { // 令实体向某一随机方向行走
  "priority": 7,
  "speed_multiplier": 1
},
"minecraft:behavior.look_at_player": { // 令实体向玩家方向看去
  "priority": 8,
  "look_distance": 8
},
"minecraft:behavior.random_look_around": { // 令实体四处张望
  "priority": 8
}
```

第二部分组件将会使我们的实体可以攻击玩家和对其造成伤害的实体：

```json
"minecraft:behavior.hurt_by_target": {  // 当实体被其他实体击中时，对其进行反击
  "priority": 1,
  "entity_types": {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "operator": "!=",
        "value": "ruby"
      },
      "max_dist": 64
  }
},
"minecraft:behavior.nearest_attackable_target": { // 寻找最近的可攻击生物
  "priority": 1,
  "entity_types": [
      {
        "filters": {
          "test": "is_family",
          "subject": "other",
          "value": "player" // 令实体与玩家为敌
        }
      }
    ],
  "must_see": true
},
"minecraft:behavior.melee_attack": { // 允许实体进行近战攻击
    "priority": 4,
    "speed_multiplier": 1,
    "track_target": true
},
"minecraft:attack": {  // 该组件不是行为组件，可以设置实体造成的伤害值
  "damage": 2
}
```

### 大功告成？

此时，完整的实体文件如下：
```json
{
  "format_version": "1.20.60",
  "minecraft:entity": {
    "description": {
      "identifier": "example:ruby_guardian",
      "is_spawnable": true,
      "is_summonable": true,
      "is_experimental": false
    },
    "components": {
      "minecraft:type_family": {
        "family": ["monster", "ruby", "mob"]
      },
      "minecraft:health": {
        "value": 15,
        "max": 15
      },
      "minecraft:movement": {
        "value": 0.35
      },
      "minecraft:collision_box": {
        "width": 0.6,
        "height": 1.9
      },
      "minecraft:loot": {
        "table": "loot_tables/entities/ruby_guardian.json"
      },
      "minecraft:physics": {},
      "minecraft:jump.static": {},
      "minecraft:movement.basic": {},
      "minecraft:navigation.walk": {
        "can_path_over_water": true
      },
      "minecraft:behavior.random_stroll": {
        // 令实体向某一随机方向行走
        "priority": 7,
        "speed_multiplier": 1
      },
      "minecraft:behavior.look_at_player": {
        // 令实体向玩家方向看去
        "priority": 8,
        "look_distance": 8
      },
      "minecraft:behavior.random_look_around": {
        // 令实体四处张望
        "priority": 8
      },
      "minecraft:behavior.hurt_by_target": {
        // 当实体被其他实体击中时，对其进行反击
        "priority": 1,
        "entity_types": {
          "filters": {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "ruby"
          },
          "max_dist": 64
        }
      },
      "minecraft:behavior.nearest_attackable_target": {
        // 寻找最近的可攻击生物
        "priority": 1,
        "entity_types": [
          {
            "filters": {
              "test": "is_family",
              "subject": "other",
              "value": "player" // 令实体与玩家为敌
            }
          }
        ],
        "must_see": true
      },
      "minecraft:behavior.melee_attack": {
        // 允许实体进行近战攻击
        "priority": 4,
        "speed_multiplier": 1,
        "track_target": true
      },
      "minecraft:attack": {
        // 该组件不是行为组件，可以设置实体造成的伤害值
        "damage": 2
      }
    }
  }
}
```

但如果我们使用`/summon`命令尝试召唤该实体，就会发现地面上只出现了一个阴影，这是因为我们还没有定义其资源文件。

## 资源文件
### 模型
### 动画
### 渲染
### 客户端
### 本地化
### 音效