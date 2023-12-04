//объект - как набор свойств и методов
//примитивные - строки

const soldier = {
    health: 400,
    armor: 100
} //-prototype

const john = Object.create(soldier)

// const john = {
//     health: 100
// }

//old vers
// john.__proto__ = soldier 

//new
//Object.setPrototypeOf(john, soldier)

let animal = {
    eats: true
  };
  
  let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
  });
  
  alert(rabbit.jumps); // true


console.log(john.armor)

