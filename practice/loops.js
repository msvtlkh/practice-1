// // При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// for (let i = 5; i <= 10; i++) {
//     console.log(i)
// }

// // При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// for (let i = 20; i >= 10; i--) {
//     if (i == 13) {
//         break
//     }

//     console.log(i)
// }

// // При помощи цикла for выведите чётные числа от 2 до 10 включительно
// for (let i = 2; i <= 10; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }

// // Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// let num = 2

// while (num <= 16) {
//     if (num % 2 === 0) {
//         continue;
//     } else {
//         console.log(num);
//     }
//     num++
// }

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
let arr = [];

for (let i = 5; i <= 10; i++) {
    arr.push(i)
}

console.log(arr)

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
const arr1 = [3, 5, 8, 16, 20, 23, 50];
const copiedArr = []
//const copyArr = arr.slice() 

for (let i = 0; i < arr1.length; i++) {
    copiedArr.push(arr1[i])
}

console.log(copiedArr)



// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

let arr3 = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < arr3.length; i++) {
    if (typeof(arr3[i]) === 'number') {
        arr3[i] *= 2
    } else if (typeof(arr3[i]) === 'string') {
        arr3[i] = `${arr3[i]} - done`
    } 
}

console.log(arr3)

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]
}

console.log(data)
console.log(result)