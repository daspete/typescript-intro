import Zoo from 'ts/Zoo'
import Animal from 'ts/Animal'

const zoo: Zoo = new Zoo()
const animal: Animal = new Animal('lion')
zoo.addAnimal(animal)

console.log(zoo)