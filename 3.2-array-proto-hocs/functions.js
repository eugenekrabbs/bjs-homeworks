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
  if (arr1.length === arr2.length) {
    return arr1.every(index => arr1[index] === arr2[index]);
  } else {
    return false;
  }
}

function memorize(fn, limit) {
  const memory = [];
  
  function newFunction (arguments) {
    const found = memory.find(obj => compareArrays(obj.args, arguments));
    if (found) {
      return found.result;
    } else {
      memory.push({args: arguments, result: fn(arguments)});
      if (memory.length > limit) {
        memory.pop();
      }
    };
  };

  return fn();
};