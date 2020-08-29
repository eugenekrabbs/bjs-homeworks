console.clear();

const weapons = [
  new Knife(),
  new Staff(),
  new Axe(),
  new StormStaff(),
  new LongBow(),
  new Bow()
];

function getNames() {
  const names = [];
  weapons.forEach(weapon => names.push(weapon.name));
  return names;
}

function getCountReliableWeapons(durability) {
  const quantity = weapons.filter(weapon => weapon.durability > durability);
  return quantity.length;
}

function hasReliableWeapons(durability) {
  const reliableWeapons = weapons.some(weapon => weapon.durability > durability);
  return reliableWeapons;
}

function getReliableWeaponsNames(durability) {
  const reliableWeaponNames = weapons
    .filter(weapon => weapon.durability > durability)
    .map(weapon => weapon.name);
  return reliableWeaponNames;
}

function getTotalDamage() {
  const totalDamage = weapons.reduce((total, weapon) => {
    return total + weapon.durability;
  }, 0);
  return totalDamage;
}