const electroBasicBullet = extend(BasicBulletType, {
update(b){
if(b.fin()<0.001){
for(var i = 0; i < this.lightning; i++){
Lightning.create(b, this.lightningColor, this.lightningDamage < 0 ? this.damage : this.lightningDamage, b.x, b.y + 2, b.rotation() + Mathf.range(this.lightningCone) + this.lightningAngle, this.lightningLength + Mathf.random(this.lightningLengthRand));
}
}
this.super$update(b);
}
});
electroBasicBullet.backColor = Color.valueOf("c2cc37");
electroBasicBullet.width = 14;
electroBasicBullet.height = 14;
electroBasicBullet.shrinkY = 0.1;
electroBasicBullet.shrinkX = 0.2;
electroBasicBullet.spin = 3.5;
electroBasicBullet.speed = 2;
electroBasicBullet.damage = 43;
electroBasicBullet.shootEffect = Fx.railShoot;
electroBasicBullet.hitColor = electroBasicBullet.frontColor = Color.valueOf("f1fc58");
electroBasicBullet.despawnEffect = Fx.railHit;
electroBasicBullet.lifetime = 90;
electroBasicBullet.knockback = 1;
electroBasicBullet.lightning = 3;//количество молний
electroBasicBullet.lightningLength = 1;//длина молнии
electroBasicBullet.lightningLengthRand = 10;//рандомное число от 0 до 50 будет прибавляться к длине молнии, то есть рандомизация длины
electroBasicBullet.lightningDamage = 21;//урон молнии
electroBasicBullet.lightningAngle = 0;//угол направления молний относительно угла пули
electroBasicBullet.lightningCone = 45;//рандомизация угла направления молний 
electroBasicBullet.lightningColor = Color.valueOf("f1fc58");

const axon = extendContent(ItemTurret, "axon", {});
axon.health = 1260;
axon.size = 3;
axon.rotateSpeed = 0.5;
axon.shots = 3;
axon.hasItems = true;
axon.hasLiquids = true;
axon.localizedName = "Axon";
axon.description = "Powerful Electric shotgun.";
axon.buildVisibility = BuildVisibility.shown;
axon.requirements = ItemStack.with(Items.titanium, 200, Vars.content.getByName(ContentType.item,"braindustry-graphenite"), 480, Items.silicon, 350, Vars.content.getByName(ContentType.item, "braindustry-exotic-alloy"), 140);
axon.category = Category.turret;
axon.ammo(
    Vars.content.getByName(ContentType.item, "braindustry-exotic-alloy"), electroBasicBullet
);
