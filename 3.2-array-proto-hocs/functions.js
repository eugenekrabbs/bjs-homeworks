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
  return weapons.map(weapon => weapon.name);
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
  const memory = [];

  return function (...args) {
    const found = memory.find(obj => compareArrays(obj.args, args));

    if (found) {
      return found.result;
    }

    memory.push({ args: args, result: fn(...args) });

    if (memory.length > limit) {
      memory.pop();
    }

    return memory[memory.length - 1].result;
  };
};

const sumM = sum(1, 1, 1);
memorize(sumM, 2);