interface Input<GenericType> {
    content: GenericType
}

function setContent<GenericType>(input: Input<GenericType>, content: GenericType): void {
    input.content = content
}

const numberInput: Input<number> = { content: 4 }
setContent<number>(numberInput, 5)

const stringInput: Input<string> = { content: 'test' }
setContent<string>(stringInput, 'test2')

console.log(numberInput, stringInput)