const arr = [1,2,3,4,5]

arr.pop()
arr.push()// с конца

arr.shift() //unshift

for (let i = 0; i < arr.length; i++) {{
    console.log(arr[i])
}}

for (let value of arr) {
    console.log(value)
}
// brake continue
// string

//length - состоит из посл.индекса + 1

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} into array ${arr}`)
})

//map - модифицирует в новый массив с результатом


//колл бэк функцию, затем перебирает массив и воздейств.на кжд
//слово
//item - button elements form array
//index - number 
//arr - массив

const str = prompt('','')
const products = str.split(', ')
products.sort(compareNum)

function compareNum (a,b) {
    return a-b
}
// сортирует как строки
// псевдомассив структура обьекта, но выгядит как массив - методы не работают, тупо хранят данные 
console.log(products)
//join - str
//split - arr

