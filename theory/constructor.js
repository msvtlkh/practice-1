function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.exit = function() {
    console.log(`User ${this.name} has left this room`)
}

const ivan = new User('Ivan', 28)
const alex = new User('Alex', 32)

ivan.exit()
ivan.hello()

console.log(ivan)
console.log(alex)

//обычная функция: this = window, but if "use strict" = undef
function showThis(a,b) {
    function sum() {
        return a + b
    }

    console.log(sum())
}

showThis(4,5)

