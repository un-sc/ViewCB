---
title: "命令damage"
date: "2022-01-13"
keywords: "damage指令,造成伤害,damage用法"
---

---

## 用途

对实体造成伤害。

## 执行权限

权限等级：1

有关权限等级的定义和来源[参考此处](/commands/权限等级 "参考此处")。

## 参数列表

/damage <被伤害的对象> <伤害数值>「伤害原因」「entity」「伤害发出者」

## 参数说明

**<被伤害的对象>**：用来指定撤销谁管理员权限。这里可以使用[目标选择器](/commands/目标选择器 "目标选择器")，或者直接填写玩家名。

**<伤害数值>**：需要填写整数，用于指定伤害数值。例如铁傀儡的生命值是100，如果你在这里指定伤害数值同样为100，那么你可以直接将铁傀儡杀死。

**「伤害原因」**：指定生物为什么受到伤害，即造成伤害的原因。具体原因请参考本页面下方伤害原因表。

**「entity」**：如果你指定了`「伤害原因」`，那么这里必须填写、不可省略，有且仅有一个填写方法：填写`entity`即可。

**「伤害发出者」**：如果你指定了`「伤害原因」`，这里同样也必须指定内容。该参数用于指定伤害的施加者。可以使用[目标选择器](/commands/目标选择器 "目标选择器")，或者直接填写玩家名。

## 用法举例

`/damage @a 3`  对所有玩家造成3点伤害。

`/damage @e[type=zombie,r=10] 5 thorns entity @s`  对半径10以内的所有僵尸造成5点伤害，伤害类型为盔甲的荆棘，伤害来源为自己。

## 伤害原因表

请注意：中文翻译并不准确（我在翻译时没有查询官方译名，有的我也不知道），仅供理解，请以英文名称为主。

- `all`  所有
- `anvil`  铁砧
- `block_explosion`  方块爆炸
- `charging`  猛烈冲击
- `contact`  接触
- `drowning`  溺水
- `entity_attack`  实体攻击
- `entity_explosion`  实体爆炸
- `fall`  跌落
- `falling_block`  方块坠落
- `fire`  火焰
- `fire_tick`
- `fireworks`  烟花爆炸
- `fly_into_wall`
- `freezing`  冰冻
- `lava`  岩浆
- `lightning`  闪电
- `magic`  魔法
- `magma`
- `none`  无来源
- `override`
- `piston`  活塞
- `projectile`  弹射物
- `stalactite`  钟乳石
- `starve`  饥饿
- `suffocation`  窒息
- `suicide`  自杀
- `temperature`  温度
- `thorns`  荆棘
- `void`  虚空
- `wither`  凋零
