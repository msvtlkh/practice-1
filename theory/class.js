class Rectangle {
    constructor(heigth, width) {
        this.height = heigth;
        this.width = width
    }

    calcArea() {
        return this.height * this.width
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(heigth, width, text, bgColor) {
        super(heigth, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red')
div.showMyProps()
console.log(div.calcArea())

//super - вызывает, что было у родителя

// const square = new Rectangle(10,10)
// const square2 = new Rectangle(20,20)

// console.log(square.calcArea())
// console.log(square2.calcArea())