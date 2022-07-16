---
title: "命令give"
date: "2022-07-13"
keywords: "give指令,杀死玩家,清除实体,give用法"
---

---

## 用途

给予玩家物品。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/give <玩家> <物品名称>「数量」「数据值」「Json值」

## 参数说明

**<玩家>**：用来指定给予谁物品。这里可以使用[目标选择器](/commands/目标选择器 "目标选择器")，或者直接填写玩家名。

**<物品名称>**：用来指定给予的物品。

**「数量」**：指定给予玩家某物品的数量，若不填写此项则默认为1。

**「数据值」**：对上方指定的物品进行详细描述，指定其数据值。默认为0。

**「Json值」**：指定物品的特殊属性。如：`can_place_on`、`can_destroy`、`item_lock`、`lock_in_inventory`、`lock_in_slot`、`keep_on_death`

## 用法举例

`/giev @a apple`  给予所有人一个苹果。

`/give @s diamond_shovel 1 0 {"can_destroy":{"blocks":["dirt"]}}`  给予自己一个在冒险模式中可以破坏泥土方块的钻石铲。

`/give @s diamond_block 1 0 {"can_place_on":{"blocks":["dirt"]},"can_destroy":{"blocks":["grass"]}}`  给予自己一个在生存模式中可以放在泥土上并且可以破坏草方块的钻石块。
