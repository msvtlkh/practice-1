const btn = document.querySelector('.btn')

let timerId,
    i = 0

function myAnimation() {
    const elem = document.querySelector('.box')
    let pos = 0;

    const id = setInterval(frame, 10)

    function frame() {
        if (pos == 300) {
            clearInterval(id)
        } else {
            pos++
            elem.style.top = pos + 'px'
            elem.style.left = pos + 'px'
        }
    }
}

btn.addEventListener('click', myAnimation)

// btn.addEventListener('click', () => {
//     //const timerId = setTimeout(logger, 1000)
//     timerId = setInterval(logger, 500)
// })

// //хотим, чтобы скрипт повторялся постоянно, а не 1 раз - setInterval

// //скобки не нужны
// //мы убираем в переменные, чтобы ращные использовать, т.к. без, он неуникальный

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId) //останавливает
//     }

//     console.log('text')
//     i++
// }

// let id = setTimeout(function log() {
//     console.log('hello')
//     id = setTimeout(log, 500)
// }, 500)


