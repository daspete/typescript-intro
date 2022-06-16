interface IShape {
    area(): number
}

interface ISquareShape extends IShape {
    x: number
}

interface IRectangleShape extends ISquareShape {
    y: number
}

const rectangle: IRectangleShape = {
    x: 1,
    y: 2,
    area() {
        return this.x * this.y
    }
}

class Rectangle implements IRectangleShape {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    area() {
        return this.x * this.y
    }
}

const instancedRectangle: Rectangle = new Rectangle(1, 2)
console.log(instancedRectangle.area())