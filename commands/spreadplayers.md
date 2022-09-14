---
title: "命令spreadplayers"
date: "2022-08-09"
keywords: "spreadplayers指令,随机传送,spreadplayers用法"
---

---

## 用途

将实体随机传送至某一指定区域内的随机位置。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/spreadplayers <平面坐标> <传送实体间距> <区域范围> <传送目标>

## 参数说明

**<平面坐标>**：用于指定目标区域的中心位置，这里只用填写x轴和z轴坐标。

**<传送实体间距>**：指定被传送实体之间的最小距离范围。

**<区域范围>**：指定随机传送区域的最大半径（以<平面坐标>指定的位置为中心）。

**<传送目标>**：指定被传送的实体。

## 用法举例

`/spreadplayers 100 200 10 60 @a`  以100 200为中心，将所有玩家随机传送至中心点半径60以内的区域，每个玩家之间的最小距离为10。