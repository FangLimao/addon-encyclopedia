# 编辑器概述
!!! info "版权说明"
    本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

**Minecraft编辑器**（下称编辑器），可用于创建项目与编辑世界，本文档旨在介绍编辑器的界面、工具和快捷键，更多关于编辑器的信息可以在[GitHub](https://github.com/Mojang/minecraft-editor)获取。

编辑器还处于早期预览阶段，官方正在努力增加更多的功能，此文档中的编辑器截图可能与当前版本略有不同。

--------

在此文档，你将会学到：

- [X] 项目与世界的区别
- [X] 如何创建项目
- [X] 如何修改界面和项目设置
- [X] 编辑器界面都包括什么
- [X] 如何保存项目
- [X] 如何打开项目
- [X] 如何将项目导出为世界
- [X] 如何打开一个由项目导出的世界
- [X] 编辑器将导出的文件放在哪里

--------

## 准备工作
### 设备需求

要使用编辑器，你需要：

- Windows 10（或更高）的电脑与 Minecraft Preview
- 键盘、鼠标

!!! danger
    编辑器在手机上不可用

### 安装编辑器

1. 在桌面创建一个新的**快捷方式**，将其指向的位置设置为`minecraft-preview:?Editor=true`
2. 点击**下一步**，给快捷方式起一个名字，比如**Minecraft Editor**
3. 大功告成！

### 创建项目
从快捷方式启动编辑器后，你会看到如下的屏幕：

![Image of the Minecraft Editor starting page](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockeditor/media/editor_install_new_project.png?view=minecraft-bedrock-stable)

点击「创建项目」按钮来创建一个项目，并配置项目的名称、导出设置[^1]与常规设置。

![Image of the Minecraft Editor configuration page](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockeditor/media/editor_overview_project_settings.png?view=minecraft-bedrock-stable)

## 快速开始

![Animation of the parts of the Quick Start Welcome screen](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockeditor/media/editorquickstartmenu.gif?view=minecraft-bedrock-stable)

进入项目后，编辑器会显示快速开始页面，你可以通过这个窗口了解编辑器的基础操作，其关闭后可以通过**帮助**菜单的**快速入门**再次打开。

### UI设置
编辑器看起来像普通的Minecraft，但有独特的用户界面，在开始之前，我们需要调整一些UI设置使其适配你的设备。

![Editor User Interface appearance settings showing UI scale, font, and theme drop-down menus](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockeditor/media/editor_overview_ui_settings.png?view=minecraft-bedrock-stable)

进入**文件**菜单，选择**UI设置**，其中：

- UI Scale：修改用户界面的尺寸
- Font：修改用户界面中字体的大小
- Theme：修改用户界面的颜色

如果你不小心把UI大小修改的太大或者太小，无法操作，请按「Alt」+「F4」键关闭编辑器，然后重新打开编辑器，创建一个新项目。

当你对UI设置满意后，便可以单击X来关闭设置窗口了。

### 操作
你可以通过如下方式操作编辑器内的各个窗口：

- 单击并拖动标题栏来移动窗口
- 点击角落里的两个上箭头来将窗口向上折叠
- 单击X关闭编窗口

你可以通过如下方式移动和传送：

- 解锁相机：在工具模式下，需要按住鼠标右键；在十字线模式下，相机自动解锁
- 移动：在工具模式下，按住鼠标右键，再通过WASD等进行移动；在十字线模式下，可正常使用WASD移动，无需按住鼠标右键
- 传送：在工具模式下，将光标指向远处的一个方块，然后按G键，你就会被传送到那里

## 编辑器与 BDS

编辑器仅能在Win32 BDS预览版中启用，它有两种启动方式：

### 从命令行启动
请注意，**只有当你在没有已经创建的世界的情况下启动BDS时，此方法才有效。**

进入BDS所在的目录，在命令行运行：

~~~bash
bedrock_server.exe Editor=true
~~~

命令行接下来应该会输出：

```
#####################################################
#                                                   #
#              CREATING EDITOR PROJECT              #
#                                                   #
#####################################################
```

### 从Minecraft中创建一个项目

1. 启动编辑器
2. 创建一个新的编辑器项目
3. 在`com.mojang/minecraftWorlds`目录中找到项目文件，复制到BDS的世界文件夹中
4. 直接在命令行中运行`bedrock_server.exe`

如果设置正确，您应该看到如下输出

`[**** INFO] Enabling Editor Services`

这时任何来自 Minecraft Preview 的玩家的客户端都会自动启动编辑器模式，而来自于 Minecraft 正式版玩家的连接将被拒绝。


[^1]: 导出设置：编辑器将项目导出为世界时适用的设置，如游戏模式与难度
