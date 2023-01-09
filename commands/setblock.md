---
title: "命令setblock"
date: "2023-01-08"
keywords: "setblock指令,我的世界填充指令,放置方块"
---

---

## 用途

在指定的一个坐标放置方块。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/setblock <坐标> <方块名>「数据值或方块状态」「填充模式」

## 参数说明

**<坐标>**：坐标用来选取一个你要放置方块的位置。可以填写[绝对坐标、相对坐标、偏移坐标](/commands/坐标 "坐标介绍")。例如`~ ~ ~`代表当前位置，或者是`100 130 200`代表世界的坐标。

**<方块名>**：该项用于指定放置什么方块，需填写方块的名称。

**「数据值或方块状态」**：当指定方块后，该项可对指定的方块进行深一步说明，该项有两种填写方式：

1. 方块的数据值。例如：`<方块名>`指定为`log`，那么此处填写`0`则为橡木原木、填写`2`则为白桦原木。你可以理解为`<方块名>`指定一个大类，数据值用来指定方块的具体属性。
2. 方块状态。同上，方块状态也可以理解为用来指定方块的具体属性。例如`<方块名>`指定为`bed`，那么你可以在方块状态中用`direction`来指定床头的朝向。

**「填充模式」**：填充模式用来指定以什么样的方式对指定位置进行放置方块，有以下3种模式：

1. `destroy`：对目标区域用指定的方块进行填充，但是目标区域内所有（包括空气）的方块会以掉落物的形式析出。只能被剪刀采集的方块，如藤蔓，不会掉落；流体方块同理。
2. `keep`：仅替换目标区域内的空气方块，原有方块不做改动。
3. `replace`：该模式为默认模式，对目标区域内的所有方块进行替换。

## 用法举例

`/setblock ~ ~ ~ log`  在命令执行时所处的位置，将该位置的方块替换为橡木原木。

`/setblock 100 120 300 quartz_block 0 destroy`  将`100 120 300`位置的方块替换为石英块，原方块以掉落物的形式析出。