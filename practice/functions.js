// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
function sayHello(name) {
    return `Привет, ${name}`
}

console.log(sayHello('Anna'))

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
let listOfNumbers = []

function returnNeighboringNumbers(num) {
    for (let i = num - 1; i <= num + 1; i++) {
        listOfNumbers.push(i)
    }

    //return [num - 1, num, num + 1]
}

returnNeighboringNumbers(5)
console.log(listOfNumbers)


// 3) Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.


function getMathResult(number,times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return number
    }

    let str = ''

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${number * i}`
        } else {
            str += `${number * i}---`
        }
        
    }

    console.log(str)
}

getMathResult(5,3)

