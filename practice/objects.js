// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function () {
        let str = ''
        let {age} = this
        let {languages} = this.skills

        let langInfoCorrected = languages.join(' ').toUpperCase()
        //join -> to string
        //slice -> to array

        str = `Мне ${age} и я владею языками: ${langInfoCorrected}`

        return str
        
    }
};

console.log(personalPlanPeter.showAgeAndLangs())

function showProgrammingLangs (data) {
    let str = ''

    let {programmingLangs} = data.skills

    for (let key in programmingLangs) {
        str = str + `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    // прибавляю результат к друг-другу за каждый проход
    // переписать на обычный массив

    return str
}

console.log(showProgrammingLangs(personalPlanPeter))

function showExperience(obj) {
    let {exp} = obj.skills
    return exp
}


console.log(showExperience(personalPlanPeter))