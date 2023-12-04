const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    maketest: function () {
        console.log('hi')
    }
}

const {border, bg} = options.colors
console.log(bg)
// options.maketest()

// console.log(options.name)
// console.log(options['colors']['border'])

// delete options.name

// console.log(options)

// for (let key in options) {
//     console.log(`Cвойство ${key} имеет значение ${options[key]}`)
// }

// for (let key in options) {
//     if (typeof(options[key] === 'object')) {
//         for (let key2 in options[key]) {
//             console.log(`Cвойство ${key2} имеет значение ${options[key][key2]}`)
//         }
//     } else {
//         console.log(`Cвойство ${key} имеет значение ${options[key]}`)
//     }
// }

// console.log(Object.keys(options).length)