// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 

function calculateVolumeAndArea(ribLength) {
    if (!Number.isInteger(ribLength) || typeof(ribLength) == 'string' || ribLength < 0) {
        return "При вычислении произошла ошибка"
    } else {
        let volume = ribLength * ribLength * ribLength
        let area = 6 * (ribLength * ribLength)

        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`
    }
}

console.log(calculateVolumeAndArea(-15))

// 2) Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
function getCoupeNumber(seat) {
    if (!Number.isInteger(seat) || seat < 0) {
        return "Ошибка. Проверьте правильность введенного номера места"
    } else if (seat === 0 || seat > 36) {
        return "Таких мест в вагоне не существует"
    } else {
        return Math.ceil(seat / 4)
    }
}


console.log(getCoupeNumber(33))


// 3) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
function getTimeFromMinutes(time) {
    let hour = Math.floor(time / 60)
    let minute = time % 60

    let str = ''

    if(!Number.isInteger(time) || typeof(time) !== 'number' || time < 0) {
        return "Ошибка, проверьте данные"
    } else if (hour === 0) { 
        str = 'часов'
    } else if (hour === 1) {
        str = 'час'
    } else {
        str = 'часа'
    }

    return `Это ${hour} ${str} и ${minute} минут`
}

// 4) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
//    Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

function findMaxNumber(a,b,c,d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a,b,c,d)
    }
}

// 5) фибаначи
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

fib(5)

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

// fib('7') => ''"

// fib(1) => "0"

// fib(0) => ''"



