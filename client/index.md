# xna-cncnet-client-CN Docs

暂未施工

```yaml
Warhead@1Dam: SpreadDamage //弹头伤害属性
        Spread: 341  //散布
        Damage: 45  //损伤
        Falloff: 1000, 368, 135, 50, 18, 7, 0 
        ValidTargets: Ground, Water, Trees
        Versus: //弹头对不同装甲的损伤
            None: 90
            Light: 70
            Heavy: 40
            Concrete: 100
        DamageTypes: Prone50Percent, TriggerProne, SmallExplosionDeath, Incendiary //抛射体被摧毁后播放的特殊伤害动画（例如火球会播放一个火球爆裂的动画）
    Warhead@3Eff: CreateEffect //
        Explosions: napalm //爆炸动画
        ImpactSounds: firebl3.aud //武器爆炸声音
    Warhead@4EffWater: CreateEffect //抛射体入水的字段
        Explosions: large_splash //抛射体入水的动画
```
