import Zoo from './js/Zoo/index.js'
import Animal from './js/Animal/index.js'

const zoo = new Zoo()
const animal = new Animal('lion')
zoo.addAnimal(animal)

console.log(zoo)