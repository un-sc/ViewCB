---
title: "命令enchant"
date: "2022-08-02"
keywords: "enchant指令,附魔,enchant用法"
---

---

## 用途

给实体手持物品进行附魔。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/enchant <实体> <魔咒名称>「魔咒等级」

## 参数说明

**<实体>**：用来指定目标对象（不只对玩家生效），即给谁执行附魔操作。这里可以使用[目标选择器](/commands/目标选择器 "目标选择器")，或者直接填写玩家名。

**<魔咒名称>**：指定要附魔的魔咒，更多魔咒名称请见下方魔咒列表。

**「魔咒等级」**：指定魔咒的具体等级，不可超过等级上限（就相当于用铁砧附魔，这个指令没法搞什么32767，不要想了，正常是几级就附魔几级）。

## 用法举例

`/enchant un50 fortune`  给玩家名为un50的玩家手持物品赋予时运1魔咒。

`/enchant @e[type=zombie,r=30] sharpness 5`  给半径30内的所有僵尸的手持物品赋予锋利5魔咒。

## 魔咒列表

PS：电脑用户可使用`Ctrl+F`来快捷查找内容哦~

- `aqua_affinity`
  - 【水下速掘】 `ID：8` 最高等级：1
- `bane_of_arthropods`
  - 【节肢杀手】 `ID：11` 最高等级：5
- `binding`
  - 【绑定诅咒】 `ID：27` 最高等级：1
- `blast_protection`
  - 【爆炸保护】 `ID：3` 最高等级：4
- `channeling`
  - 【引雷】 `ID：32` 最高等级：1
- `depth_strider`
  - 【深海探索者】 `ID：7` 最高等级：3
- `efficiency`
  - 【效率】 `ID：15` 最高等级：5
- `feather_falling`
  - 【摔落保护】 `ID：2` 最高等级：4
- `fire_aspect`
  - 【火焰附加】 `ID：13` 最高等级：2
- `fire_protection`
  - 【火焰保护】 `ID：1` 最高等级：4
- `flame`
  - 【火失】 `ID：21` 最高等级：1
- `fortune`
  - 【时运】 `ID：18` 最高等级：3
- `frost_walker`
  - 【冰霜行者】 `ID：25` 最高等级：2
- `impaling`
  - 【穿刺】 `ID：29` 最高等级：5
- `infinity`
  - 【无限】 `ID：22` 最高等级：1
- `knockback`
  - 【击退】 `ID：12` 最高等级：2
- `looting`
  - 【抢夺】 `ID：14` 最高等级：3
- `loyalty`
  - 【忠诚】 `ID：31` 最高等级：3
- `luck_of_the_sea`
  - 【海之眷顾】 `ID：23` 最高等级：3
- `lure`
  - 【饵钓】 `ID：24` 最高等级：3
- `mending`
  - 【经验修补】 `ID：26` 最高等级：1
- `multishot`
  - 【多重箭】 `ID：33` 最高等级：1
- `piercing`
  - 【穿透】 `ID：34` 最高等级：4
- `power`
  - 【力量】 `ID：19` 最高等级：5
- `projectile_protection`
  - 【弹射物保护】 `ID：4` 最高等级：4
- `protection`
  - 【保护】 `ID：0` 最高等级：4
- `punch`
  - 【冲击】 `ID：20` 最高等级：2
- `quick_charge`
  - 【快速填装】 `ID：35` 最高等级：3
- `respiration`
  - 【水下呼吸】 `ID：6` 最高等级：3
- `riptide`
  - 【激流】 `ID：30` 最高等级：3
- `sharpness`
  - 【锋利】 `ID：9` 最高等级：5
- `silk_touch`
  - 【精准采集】 `ID：16` 最高等级：1
- `smite`
  - 【亡灵杀手】 `ID：10` 最高等级：5
- `soul_speed`
  - 【灵魂急行】 `ID：36` 最高等级：3
- `swift_sneak`
  - 【迅捷潜行】 `ID：8` 最高等级：3
- `thorns`
  - 【荆棘】 `ID：5` 最高等级：3
- `unbreaking`
  - 【耐久】 `ID：17` 最高等级：3
- `vanishing`
  - 【消失诅咒】 `ID：28` 最高等级：1
