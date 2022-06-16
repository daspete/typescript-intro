interface IGenericShape {
    x: number
}

interface IGenericShape {
    y: number
}

interface IGenericShape {
    area(): number
}

const myRectangle: IGenericShape = {
    x: 1,
    y: 2,
    area() {
        return this.x * this.y
    },
}

console.log(myRectangle.area())