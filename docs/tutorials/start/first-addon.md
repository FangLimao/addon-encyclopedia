# 第一个附加包
## 软件准备
### PC端
- Microsoft VS Code
- 压缩软件（如7Zip、WinRAR）
- 一款图像处理软件（如PS、GIMP、Pixelorama）

### Android
- MT管理器
- 一款图像处理软件（如IsoPix）

### iOS
- ES管理器
- 一款图像处理软件

## 创建工作区
在任意位置新建两个文件夹，将其分别命名为`<你的附加包名称>_bp`和`<你的附加包名称>_rp`，如：

```
my_addon_bp/
my_addon_rp/
```

## 创建清单文件
清单文件是游戏用于识别附加包的关键文件，其按照JSON格式编写，格式如下：

```json
{
  "format_version": 2,
  "header": {
    "name": "..",
    "description": "...",
    "min_engine_version": [1, 21, 0],
    "uuid": "...",
    "version": "..."
  },
  "modules": [
    {
      "type": "resources/data",
      "uuid": "...",
      "version": "..."
    }
  ],
  "dependencies": [
    {
      "uuid": "...",
      "version": "..."
    }
  ]
}
```
> [!TIP]
> 此范例中的值需要我们手动填写

format_version设置了清单文件的格式版本，我们通常填2。

在header中：

- name和description分别是附加包的名称和描述，支持填入本地化字符串；
- version是附加包的版本，在旧版本中只能填`[x, y, z]`的向量，但在新版本中也可以填[SemVer 字符串](https://semver.org/lang/zh-CN/)；
- min_engine_version设置了可以读取附加包的最低引擎版本，它除了有设置最低游戏版本的作用外，还会影响一些函数和Molang的行为；
- uuid是附加包的通用唯一识别码，我们将在下文进一步讨论。

在modules中：

- type设置了附加包的类型，data表行为包，resource表资源包；
- uuid是模块的通用唯一识别码，不可以与header的重复；
- version是模块的版本，格式与header的version相同。

在dependencies的每一个元素中：

- uuid设置了附加包依赖的附加包header中的通用唯一识别码，一般我们会把资源包设置为行为包的依赖附加包，行为包设置为资源包的依赖附加包，以防止玩家因漏加包体造成的问题；
- version设置了附加包所依赖的附加包的版本。

### 附加包的UUID
通用唯一识别码可以标识附加包，供游戏识别，UUID看起来像下面一样：

df1ae3b4-4539-46f4-a6f5-caaed515a5d4

当游戏识别到有与已有附加包UUID重复的附加包导入时，若导入附加包版本高于已有附加包，则会正常导入，反之会拒绝导入，所以**永远不要重复使用UUID**。

你可以在[这里](https://www.uuidgenerator.net/)自动生成UUID

### 值的填写
在了解了清单文件的结构后，我们应该在两个文件夹中分别创建一个manifest.json，随后将范例中的...替换成你自己的内容。

最后，你的manifest.json应该这样的：

```json
{
  "format_version": 2,
  "header": {
    "name": "第一个附加包",
    "description": "我的第一个附加包！",
    "min_engine_version": [1, 21, 0],
    "uuid": "df1ae3b4-4539-46f4-a6f5-caaed515a5d4",
    "version": "1.0.0"
  },
  "modules": [
    {
      "type": "data", // 如果是资源包就改成resource
      "uuid": "1ce8eeae-f1d6-4330-bda1-e9fd427406cd",
      "version": "1.0.0"
    }
  ],
  "dependencies": [
    {
      "uuid": "df1ae3b4-4539-46f4-a6f5-caaed515a5d4", // 应该与你资源包header中的uuid一致
      "version": "1.0.0" // 应该与你资源包header中的version一致
    }
  ]
}
```

在确保两个`manifest.json`都填入了正确的内容后，我们就可以进行下一步了。

## 包的图标
每个附加包都应该有一个图标，其应该是一个正方形的png文件，我们把它重命名为pack_icon.png，然后放到包的根目录下。

这时，我们的附加包就应该有图标了。

## 导入游戏
我们的附加包已经制作完成，那么我们该如何将其导入进游戏测试呢？

### Windows
1. 新建快捷方式；
2. 将快捷方式指向的路径设置为`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`；
3. 打开快捷方式
4. 将我们的行为包放入development_behavior_packs文件夹中；
5. 将我们的资源包放入development_resource_packs文件夹中；
6. 大功告成！

### Android
1. 将游戏的 选项-存储-文件存储位置 调整为 外部
2. 使用文件管理器打开`Android/data/com.mojang.minecraftpe/files/games/com.mojang/`文件夹
3. 将我们的行为包放入development_behavior_packs文件夹中；
4. 将我们的资源包放入development_resource_packs文件夹中；
5. 大功告成！ 

## 打包
Minecraft有自己的模组格式——`.mcaddon`和`.mcpack`，其本质就是压缩文件。

用解压缩软件/文件管理器将你的行为包和资源包文件分别打包成`.zip`文件，然后将`.zip`后缀改为`.mcpack`。

将这两个mcpack文件打包进一个.zip文件中，然后将这个.zip文件后缀改为.mcaddon，我们的附加包就打包完成了。

## 小结
此时，我们的附加包结构应该如下所示：

```
my_addon_bp/
├─ manifest.json
├─ pack_icon.png
my_addon_rp/
├─ manifest.json
├─ pack_icon.png
```