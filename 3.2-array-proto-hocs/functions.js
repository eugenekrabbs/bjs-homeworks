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
  return weapons.map(weapon => weapon.name));
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

// Задача 2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return (arr1.length === arr2.length) && (arr1.every((arr1, index) => arr1[index] === arr2[index]));
}

function memorize(fn, limit) {
  return function (...args) {
    const memory = [];
    const found = memory.find(obj => compareArrays(obj.args, arguments));
    
    if (found) {
      return found.result;
    }

    memory.push({ args: arguments, result: fn(arguments) });
    
    if (memory.length > limit) {
      memory.pop();
    }
    
    return fn(...args);
  };
};