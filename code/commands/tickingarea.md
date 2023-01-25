---
title: "命令tickingarea"
date: "2022-07-15"
keywords: "tickingarea指令,我的世界常加载区块,tickingarea命令用法"
---

---

## 用途

对常加载区块进行操作。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/tickingarea add <起点坐标>  <终点坐标> 「名称」「是否预加载」

/tickingarea add cicrcle  <圆心坐标>  <半径大小>「名称」「是否预加载」

/tickingarea remove <区块名称/坐标>

/tickingarea remove_all

/tickingarea preload 「区块名称/坐标」

/tickingarea list 「all-dimensions」

## 参数说明

**<起点坐标>**：起点坐标用来选取常加载区块的起点坐标。可以填写[绝对坐标、相对坐标](/commands/坐标 "坐标介绍")，但不能使用偏移坐标。

**<终点坐标>**：终点坐标用来选取常加载区块的终点坐标。可以填写[绝对坐标、相对坐标](/commands/坐标 "坐标介绍")，但不能使用偏移坐标。

![/tickingarea命令常加载区块示意图](https://unsc.oss-accelerate.aliyuncs.com/ViewCB/Images/tickingarea-1.svg "/tickingarea命令常加载区块示意图")

**「名称」**：为新增的常加载区块命名。

**「是否预加载」**：是否让玩家事先加载好该区块 *(注意：关于预加载的定义可能并不准确，有待详细补充)* 。如果在add模式中不写则默认为false；在preload模式中会查询某常加载区块是否处于预加载状态。

**<圆心坐标>**：指定圆形常加载区块的圆心坐标。

**<半径大小>**：指定圆形常加载区块的半径大小。注意：半径最大只能为4，最小为1，且为整数。

**<区块名称/坐标>**：可填写常加载区块的名称，或者填写包含在常加载区块中某一位置的坐标。

**「all-dimensions」**：列出所有纬度的常加载区块。

## 用法举例

`/tickingarea add ~ ~ ~ ~10 ~20 ~10 area1`   从命令发出者所处位置到x+10,y+20,+z10的区域设为常加载区块，名为area1

`/tickingarea list all-dimensions`  列出所有纬度的常加载区块

`/tickingarea remove area`  删除名为area1的常加载区块

`/tickingarea add cicrcle 3`  添加一个半径为3的原球装常加载区块
