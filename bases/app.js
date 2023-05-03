"use strict";
// Modo observador
// tsc --w
// tsc -w
const msg = 'Hola mundo';
const hero = {
    name: 'Ironman',
    age: 45,
};
// hero.age = '50'; ❌
hero.age = 55; // ✔
console.log(msg);
console.log(hero);
