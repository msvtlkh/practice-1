// // если мы кладем обьект в дргую перемнную, типо копируем, топри изменении
// //все равно будет меняться начальный обьект 
// // передача по ссылке идет на уже сущ.обьект

// // loop

// function copy (mainObj) {
//     let objCopy = {}

//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj [key]
//     }

//     return objCopy
// }

// const number = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 7,
//         e: 8
//     }
// }

// const newNumbers = copy(number)
// console.log(newNumbers)

// //поверхностная копия (вложенная уже не копируется)

// //object assign
// const add = {
//     a: 2,
//     f: 10
// }

// //console.log(Object.assign(number, add))
// const clone = Object.assign({}, add)
// console.log(clone)

// //array

// const arr = [1,2,3,4,5]
// const newArr = arr.slice()

// //copy arr with slice

// //spread
// const video = ['youtube', 'rutube','vimeo'],
// vlogs = ['wordpress', 'livejournal'],
// internet = [...video,...vlogs,'vk','fb']

// console.log(internet)

// const num = [1,2,3]

// function log(a,b,c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// log(...num)

// const arr1 = ['a','b']

// const newArr1 = [...arr1]

// const q = {
//     one:1,
//     two:2
// }

// const newObj = {...q}


//rest - превращает элем в массив

const log = function(a,b, ...rest) {
    console.log(a, b, rest)
}

log('basic', 'rest', 'operator', 'usage')

function calcOrDouble(number, basis = 2) {
    console.log(number * basis)
}

calcOrDouble(3,5)