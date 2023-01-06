---
title: "命令gamerule"
date: "2022-07-13"
keywords: "命令gamerule,更改游戏规则,gamerule用法"
---

---

## 用途

用于更改或查询当前世界的游戏规则。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/gamerule <游戏规则> 「启用/禁止/数值」

## 参数说明

**<游戏规则>**：游戏规则用来指定你要对哪种规则进行操作（更改或查询），基岩版的游戏规则请见下方基岩版规则列表。

**「启用/禁止/数值」**：该项用于设置你所选的游戏规则是否被启用，或者禁止，或者设置它的具体数值，具体参考下方基岩版规则列表。

## 基岩版规则列表

- CommandBlockOutput
  - `默认值：true`
  - 是否在聊天栏向管理员展示命令方块执行信息。
- CommandBlocksEnabled
  - `默认值：true`
  - 是否在游戏中启用命令方块。
- DoDaylightCycle
  - `默认值：true`
  - 是否进行日夜更替和月相变化。
- DoEntityDrops
  - `默认值：true`
  - 非生物实体是否掉落物品。
- DoFireTick
  - `默认值：true`
  - 是否启用火焰蔓延
- DoImmediateRespawn
  - `默认值：false`
  - 玩家在死亡后是否直接复活（跳过选择复活的界面）。
- DoInsomnia
  - `默认值：true`
  - 是否在夜晚生成幻翼。
- DoMobLoot
  - `默认值：true`
  - 生物是否掉落物品。
- DoMobSpawning
  - `默认值：true`
  - 生物是否自然生成，根据MinecraftWiki记载：该项不影响刷怪笼。
- DoTileDrops
  - `默认值：true`
  - 破坏方块是否掉落物品。
- DoWeatherCycle
  - `默认值：true`
  - 天气是否自然发生变化。
- DrowningDamage
  - `默认值：true`
  - 当玩家窒息时，是否受到伤害。
- FallDamage
  - `默认值：true`
  - 当玩家摔落时，是否承受伤害。
- FireDamage
  - `默认值：true`
  - 当玩家处于火焰中时，是否承受伤害。
- FreezeDamage
  - `默认值：true`
  - 玩家是否承受冰冻伤害。
- FunctionCommandLimit
  - `默认值：10000`
  - /function最大能执行多少条命令。
- KeepInventory
  - `默认值：false`
  - 玩家死亡后是否保留原有数据（即常说的保留物品栏）。
- MaxCommandChainLength
  - `默认值：65536`
  - 连锁命令方块链接的最大数量。
- MobGriefing
  - `默认值：true`
  - 生物是否可以进行破坏①。
- NaturalRegeneration
  - `默认值：true`
  - 在饥饿状态下，玩家是否可以回血。
- Pvp
  - `默认值：true`
  - 是否启用PVP，及玩家间能否造成伤害。
- RandomTickSpeed
  - `默认值：1`
  - 设置随机刻度②。
- Respawnblocksexplode
  - `默认值：true`
  - 重生方块、床是否会爆炸。
- SendCommandFeedback
  - `默认值：true`
  - 玩家执行命令后是否在聊天栏返回执行信息。以及在命令方块中是否自动开启上一次执行的信息反馈。
- ShowBorderEffect
  - `默认值：true`
  - 边界是否发出红色粒子[有待确认]。
- ShowCoordinates
  - `默认值：false`
  - 是否显示坐标。
- ShowDeathMessages
  - `默认值：true`
  - 是否显示死亡信息③。
- ShowTags
  - `默认值：true`
  - 是否展示物品的能力，如可以破坏、可以放置。
- SpawnRadius
  - `默认值：5`
  - 重生半径。
- TntExplodes
  - `默认值：true`
  - 是否启用TNT爆炸。

**注释：**

①根据MinecraftWiki的描述：MobGriefing还会影响苦力怕、僵尸、末影人、恶魂、凋灵、末影龙、兔子、绵羊、村民和雪傀儡是否能放置、修改或破坏方块，生物是否能捡拾物品，以及唤魔者是否能将蓝色的绵羊变为红色。这个规则也会影响生物（如僵尸猪灵和溺尸）寻找海龟蛋的能力。这还将会阻止村民的繁殖。这一游戏规则不会影响非生物实体，包括TNT和末地水晶。

②根据MinecraftWiki的进一步描述：随即刻度是每游戏刻每区段中随机的方块刻发生的频率（例如植物生长，树叶腐烂等）。为0时禁用随机刻，较高的数字将增大随机刻频率。

③同样影响是否在宠物（狼、猫和鹦鹉）死亡时通知它的主人。

## 用法举例

`/gamerule pvp`  查询当前世界是否允许玩家间互相伤害。

`/gamerule CommandBlockOutput false`  禁止在聊天栏向管理员展示命令方块执行信息。

`/gamerule DoInsomnia true`  允许在夜晚生成幻翼。
