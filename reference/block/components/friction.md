# 方块组件 - minecraft:friction

> [!INFO]
> 本文译自[微软开发文档](https://learn.microsoft.com/en-us/minecraft/creator/)，按照 CC BY 4.0 协议进行许可

`minecraft:friction`设置方块的阻力系数。

> 方块的 **阻力系数（Friction）** 决定了方块与站在其上方的生物的“摩擦力”，影响生物的加速度并决定稳定移动速度。
>  
> 如果一个方块绝对光滑，那么生物就无法自行移动；当方块的阻力系数为75⁄91时，生物稳定移动速度最小。
> 
> ——[Minecraft Wiki](https://zh.minecraft.wiki/w/%E6%96%B9%E5%9D%97%E5%9F%BA%E6%9C%AC%E5%B1%9E%E6%80%A7#%E9%98%BB%E5%8A%9B%E7%B3%BB%E6%95%B0)

| minecraft:friction | 组件信息 |
| ----------------------- | -------- |
| 数据类型                |     小数     |
| 默认值                  |     `0.4`     |

阻力系数应设置在0.0~0.9的数值范围内。基岩版中，木头和泥土的阻力系数为0.4，而冰的阻力系数为为0.02。

## 范例
```json
"minecraft:friction": 0.6
```
