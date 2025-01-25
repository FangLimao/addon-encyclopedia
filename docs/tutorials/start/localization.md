# 本地化
**本地化**是对游戏文本进行各种语言的适配，使其能够显示对应的语言。

我们需要通过语言文件（.lang文件）对游戏文本进行适配，在本教程中，我们将会尝试对第三节所述的示例附加包的包名和描述进行本地化。

## 位置
语言文件位于texts文件夹下：

```
my_addon_bp/
├─ texts/
        ├─zh_CN.lang
        ├─languages.json
        └─en_US.lang
├─ manifest.json
└─ pack_icon.png
my_addon_rp/
├─ texts/
        ├─zh_CN.lang
        ├─languages.json
        └─en_US.lang
├─ manifest.json
└─ pack_icon.png
```
> [!IMPORTANT]
> 行为包中的语言文件只会修改其包名和简介，其余需要在资源包的语言文件中定义

## 格式
语言文件的格式非常简单：

```
## 注释
键名=键值 
```

语言文件中遵循键值对的格式，其中 = 前的内容为键名，后的内容为键值。

键名除了附加包的名称与简介外，其余都可以自由设定。

## 本地化
### 名称与简介
现在，我们尝试对附加包的名称和简介进行本地化。

首先在我们附加包的根目录下创建texts文件夹，然后分别在其下创建`zh_CN.lang`、`en_US.lang`，写入：
::: code-group

```[zh_CN.lang]
pack.description=我的第一个附加包！
pack.name=第一个附加包
```

```[en_US.lang]
pack.description=My first addon！
pack.name=First Addon
```

:::

为了使游戏能够预读取我们的语言文件，我们还需要在texts文件夹下新建一个`languages.json`，然后在里面写入：

```json
[ 
  "en_US",
  "zh_CN"
]
```

现在导入我们的附加包，将语言切换至美式英语，即可看见附加包的名称与描述发生了变化。

### 方块与物品
利用语言文件，我们也可以为自定义方块、物品添加本地化名称：

```
item.<物品ID>=物品本地化名称
tile.<方块ID>.name=方块本地化名称
```

除此之外，你还可以利用`minecraft:display_name`组件设置物品与方块的本地化字符串，在后文我们会详细讨论。

本地化的应用领域极广，我们可以对附加包中对几乎所有文本内容进行本地化适配。