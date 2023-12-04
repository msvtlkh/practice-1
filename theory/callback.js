function learnJS(lang,callback) {
    console.log(`I learn ${lang}`)
    callback()
}

function done() {
    console.log('I ve already learnt')
}

learnJS('JS', done) // () скобки не нужны