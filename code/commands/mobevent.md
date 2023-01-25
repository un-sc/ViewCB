---
title: "命令mobevent"
date: "2023-01-07"
keywords: "mobevent指令,发送消息指令,我的世界事件,mobevent用法,生物事件"
---

---

## 用途

控制或查询生物事件。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/mobevent <事件>「选项」

## 参数说明

**<事件>**：指定你需要查询或修改的生物事件，你可以指定的事件有：

- `ender_dragon_event` 生成末影龙的事件。
- `pillager_patrols_event` 生成灾厄巡逻队的事件。
- `wandering_trader_event` 生成流浪商人的事件。
- `events_enabled` 事件总控。当该事件被禁止时，所有事件均被禁止；当该事件被允许时，只会发生启用的事件（已经被禁止的其他事件则仍处于禁止状态，被允许的事情依然被允许）。

**「选项」**：该参数用于控制`<事件>`中的内容。若该项为`true`，则`<事件>`中指定的事件则被禁止；若该项为`false`，则`<事件>`中指定的事件被允许。若不填写该参数，则会向您展示`<事件>`的目前的状态（禁止或允许）。

## 用法举例

`/mobevent ender_dragon_event false`  禁止在末地自动生成末影龙。

`/mobevent wandering_trader_event true`  允许生成流浪商人。

`/mobevent pillager_patrols_event`  查询灾厄巡逻队事件的状态。
