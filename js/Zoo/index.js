class Zoo {
    animals = []

    addAnimal(animal) {
        this.animals.push(animal)
    }

    getAnimal(name) {
        return this.animals.find(animal => animal.name === name)
    }

}

export default Zoo