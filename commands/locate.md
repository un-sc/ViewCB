---
title: "命令locate"
date: "2022-07-13"
keywords: "locate指令,结构查询,locate用法"
---

---

## 用途

向命令发出者显示距离最近的指定结构的坐标。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/locate <结构名称> 「新区块」

## 参数说明

**<结构名称>**：这里用于指定你要查询的结构的名称，详情见下方结构名列表。

**「新区块」**：是否在一个尚未生成的区块中查询要求的结构。此处填写true或false。默认为false。

## 结构名列表

**主世界**：

- 远古城市
  - ancientcity
- 埋藏的宝藏
  - buriedtreasure
- 林地府邸
  - mansion
- 废弃矿井
  - mineshaft
- 海底神殿
  - monument
- 海底废墟
  - ruins
- 沉船
  - shipwreck
- 要塞
  - stronghold
- 沙漠神殿/雪屋/丛林神庙/女巫小屋
  - temple
- 村庄
  - village
- 掠夺者前哨站
  - pillageroutpost
- 废弃传送门
  - ruinedportal

**下界**：

- 下界要塞
  - fortress
- 堡垒遗迹
  - bastionremnant
- 废弃传送门
  - ruinedportal

**末地**：

- 末地城
  - endcity

## 用法举例

`/locate mansion`  获取距离命令发出者最近的最近的林地府邸的坐标。

`/locate shipwreck true`  在尚未生成的区块中获取距离命令发出者最近的最近的沉船的坐标。
