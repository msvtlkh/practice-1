//1
let me = 'Masha'

console.log(`Hi,${me}`)

//2 - objects
let obj = {}

obj.color = 'blue'
obj['color of the bird'] = 'black'

console.log(obj)

//3 - if/switch
let num = 60

if (num === 30) {
    console.log('cool')
} else {
    console.log('loser')
}

(num === 30) ? console.log('cool') : console.log('loser')

switch(num) {
    case 40:
        console.log('shut up')
        break;
    case 55:
        console.log('shut up')
        break;
    case 30:
        console.log('cool')
        break;
    default:
        console.log('sad')
        break;
}

//4 - loop
let a = 50;

// while (a <= 55) {
//     // a++
//     console.log(a)
//     a++
// }

// do {
//     // a++
//     console.log(a)
//     a++
// } while (a <= 55) 

// for (let i = 0; i <= 5; i++) {
//     console.log(a)
//     a++
// }

for (let i = 0; i <= 5; i++) {
    // if (i == 4) {
    //     break
    // }

    if (i == 4) {
        continue
    }

    console.log(i)
}

//5 - function

const calc = (a,b) => a + b
