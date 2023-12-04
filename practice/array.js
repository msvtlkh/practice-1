// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin

//1
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(str) {
    if (str.length == 0) {
        return 'Семья пуста'
    } else {

        return newString = `Семья состоит из: ${str.join(' ')}`
    }
}

console.log(showFamily(family))

//2
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(str) {
    // let newString = ''

    // return newString = str.join('\n').toLowerCase()

    str.forEach(element => {
        console.log(element.toLowerCase())
    });
}

console.log(standardizeStrings(favoriteCities))

//это метод, позволяющий перебирать и взаимодействовать с элементами массива, вызывая для каждого колбэк-функцию.

