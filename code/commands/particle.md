---
title: "命令particle"
date: "2022-08-02"
keywords: "particle指令,粒子效果,particle用法"
---

---

## 用途

在某位置生成粒子效果。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/particle <粒子效果名称>「位置」

## 参数说明

**<粒子效果名称>**：用于指定生成的粒子效果，填写粒子效果的名称。

**「位置」**：指定生成粒子效果的位置。可以填写[绝对坐标、相对坐标](/commands/坐标 "坐标介绍")，但不能使用偏移坐标。若不指定此项则默认为命令发出者所在位置。

## 用法举例

`particle explosion_emitter` 在命令发出者所在位置生成巨型爆炸粒子效果。
