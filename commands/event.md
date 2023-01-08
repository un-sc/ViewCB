---
title: "命令event"
date: "2023-01-08"
keywords: "生物事件,event指令,我的世界生物,生物转换"
---

---

## 用途

对目标实体触发可被允许执行的生物事件。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/event entity <实体> <生物事件>

## 参数说明

**<实体>**：指定一个目标对象，即你要对谁执行生物事件。可以填写玩家名、[目标选择器](/commands/目标选择器 "目标选择器")。

**<生物事件>**：该参数用于将生物事件触发在前者指定对象的`<实体>`上。比如说你可以将村民转换为女巫、将流浪者转换为骷髅、将小兔子变为成年兔子、让史莱姆变得具有侵略性等等。通过以上例子想必你已经明白event指令的用法了。但是，基岩版具有庞大的生物事件，多达上百种，如果我在这里将其逐一列出不是一件容易的事情，因此我建议您参考[Minecraft Wiki]([/commands/目标选择器](https://minecraft.fandom.com/zh/wiki/%E7%94%9F%E6%88%90%E4%BA%8B%E4%BB%B6) "Minecraft Wiki")上面的内容列表。

## 用法举例

`/event entity @e[type=villager_v2] become_fisherman`  让村民转换为渔夫职业。

`/event entity @e[type=spider] become_hostile`  让蜘蛛进入敌对状态。

`/event entity @e[type=ender_crystal] crystal_explode`  让悬浮的末地水晶爆炸。
