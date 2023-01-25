---
title: "命令effect"
date: "2022-12-23"
keywords: "effect指令,效果ID,effect用法"
---

---

## 用途

给予玩家指定的效果buff。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/effect <玩家> <效果>「时间」「强度」「是否隐藏粒子效果」

## 参数说明

**<玩家>**：用来指定给予效果的目标对象。这里可以使用[目标选择器](/commands/目标选择器 "目标选择器")，或者直接填写玩家名。

**<效果>**：此处填写给目标给予的效果ID，所有效果ID请见本页面下方ID列表。需要注意的是，若填写clear则会清除目标对象身上的所有buff。

**「时间」**：指定效果的时长。单位：秒。若不填写此项则默认为30秒。

**「强度」**：指定效果的强度（等级）。范围：0-255。若此项不填写则默认为0。0对应的实际等级为1，同理，255对应的实际是256级效果。

**「是否隐藏粒子效果」**：当玩家拥有效果buff时，玩家会冒出药水粒子，您可以通过此参数来指定当玩家拥有效果后是否展现其药水粒子。若为true则会隐藏粒子，为false时不会隐藏，默认为false。

## 用法举例

`/effect @s clear`  清除自己身上的所有效果。

`/effect @a absorption 5 3`  给予所有人5秒钟的伤害吸收4。

## 效果ID列表

PS：电脑用户可使用`Ctrl+F`来快捷查找内容哦~

- `absorption`
  - 【伤害吸收】 `ID：22`
- `bad_omen`
  - 【不祥之兆】 `ID：28`
- `blindness`
  - 【失明】 `ID：15`
- `conduit_power`
  - 【潮涌能力】 `ID：26`
- `darkness`
  - 【黑暗】 `ID：30`
- `fatal_poison`
  - 【致命的中毒】 `ID：25`
- `fire_resistance`
  - 【防火】 `ID：12`
- `haste`
  - 【急迫】 `ID：3`
- `health_boost`
  - 【生命提升】 `ID：21`
- `hunger`
  - 【饥饿】 `ID：17`
- `instant_damage`
  - 【瞬间伤害】 `ID：7`
- `instant_health`
  - 【瞬间治疗】 `ID：6`
- `invisibility`
  - 【隐身】 `ID：14`
- `jump_boost`
  - 【跳跃提升】 `ID：8`
- `levitation`
  - 【漂浮】 `ID：24`
- `mining_fatigue`
  - 【挖掘疲劳】 `ID：4`
- `nausea`
  - 【反胃】 `ID：9`
- `night_vision`
  - 【夜视】 `ID：16`
- `poison`
  - 【中毒】 `ID：19`
- `regeneration`
  - 【生命恢复】 `ID：10`
- `resistance`
  - 【抗性提升】 `ID：11`
- `saturation`
  - 【饱和】 `ID：23`
- `slow_falling`
  - 【缓降】 `ID：27`
- `slowness`
  - 【缓慢】 `ID：2`
- `speed`
  - 【速度】 `ID：1`
- `strength`
  - 【力量】 `ID：5`
- `village_hero`
  - 【村庄英雄】 `ID：29`
- `water_breathing`
  - 【水下呼吸】 `ID：13`
- `weakness`
  - 【虚弱】 `ID：18`
- `wither`
  - 【凋零】 `ID：20`
