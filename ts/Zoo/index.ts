import Animal from "ts/Animal/index"

class Zoo {
    animals: Animal[] = []

    addAnimal(animal: Animal) {
        this.animals.push(animal)
    }

    getAnimal(name: string) {
        return this.animals.find(animal => animal.name === name)
    }
}

export default Zoo