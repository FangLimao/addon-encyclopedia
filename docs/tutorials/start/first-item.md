# 第一个物品
附加包允许我们通过数据驱动的方式创建自定义物品，在本节中，我们将创建一个最简单的物品。

一个物品应当由两部分组成：

- 行为文件
- 资源文件

## 命名空间
在开始之前，我们首先要了解一下命名空间的概念：

命名空间是一个字符串，用于标识资源的唯一性，在基岩版中，命名空间和ID之间使用:进行连接，其可以防止潜在的内容冲突。

不同的附加包应该有不同的命名空间，当需要覆盖原版或其他附加包的内容时，我们才可以使用相同的命名空间。

在为我们的项目取命名空间时，应该注意：

- 避免使用一堆字母的组合。例如，一个名为「Hidden Years」的项目不应该使用命名空间hy，因为太简单了；
- 避免使用过于模糊的词语；
- 避免使用`custom`、`addon`、`content`、`mob`、`car`等命名空间，这可能与其他附加包重复；
- 除非覆盖原版内容，否则不要使用`minecraft`作为命名空间。

## 行为文件
在我们的行为包下新建`items`文件夹，然后创建一个`<物品ID>.json`文件。

> [!TIP]
> 文件不一定必须按照`<物品ID>.json`的格式进行命名，这里这么做是为了方便后续查找；
> 
> 我们也可以把这个文件创建在`items`的子文件夹下。

在这个文件中写入以下内容：

```json
{
  "format_version": "1.20.30",
  "minecraft:item": {
    "description": {
      "identifier": "example:first_item",
      "menu_category": {
        "category": "items"
      }
    },
    "components": {
      "minecraft:icon": {
        "texture": "example.first_item"
      }
    }
  }
}
```
`format_version`是文件使用的格式版本，这里是1.20.30；

在`description`中：

- `identifier`设置了物品的命名空间ID，注意这里的命名空间是`example`，在实际的项目中不建议使用；
- `menu_category`设置了物品在创造模式物品栏的位置，`category`会设置物品的分类，`group`会设置物品的分组；
  - 一般地，`category`可以填`nature`、`equipment`、`construction`或`items`；
  - 一般地，`group`可以填任意原版分组的本地化字符串，注意设置的分组要与分类相对应；
  - 我们也可以通过`item_catalog`添加自定义分组。

在`components`中，我们可以为物品添加**组件**，每一个组件都可以为物品添加相应的功能：

- `minecraft:icon`组件设置了物品的图标，应该填写物品的纹理名，这里的纹理名是`example.first_item`；
  - 虽然物品组件不是必须声明的，但我们通常会声明`minecraft:icon`组件来设置物品的图标。

组件列表可以在[参考](../../refs/)中找到。

## 资源文件
### 物品纹理
在上文中，我们将物品的纹理名设置为了`example.first_item`，为了使游戏正常读取纹理，我们需要在资源包的textures文件夹创建一个`item_texture.json`，映射纹理名和纹理路径。

假定我们的纹理为`textures/items/first_item.png`，则应该在其中写入：

```json
{
    "resource_pack_name": "第一个附加包",
    "texture_name": "atlas.items",
    "texture_data": {
        "example.first_item": {
            "textures": "textures/items/first_item"
        }
    }
}
```
其中：

- `resource_pack_name`设置了资源包的名称；
- `texture_name`设置纹理类型，因为要定义物品纹理名，因此只能填写`atlas.items`；
- `texture_data`对象中定义了所有物品纹理名，其按照如下格式：

```json
"texture_data": {
  "<纹理名1>": {
    "textures": "<纹理路径1>"
  },
  "<纹理名2>": {
    "textures": "<纹理路径2>"
  },
  "<纹理名3>": {
    "textures": "<纹理路径3>"
  }
}
```
> [!IMPORTANT]
> 纹理路径中不要出现后缀名

### 物品名称
在语言文件中添加如下内容：

```
item.example:first_item.name=第一个物品
```

这时，将附加包导入进游戏，我们就可以看到新添加的自定义物品了。

## 参考
- [命名空间 - Minecraft Wiki](https://zh.minecraft.wiki/命名空间)