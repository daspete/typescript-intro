interface InputNumber {
    content: number
}

interface InputString {
    content: string
}

interface InputBoolean {
    content: boolean
}

function setContent(input: InputNumber, content: number): void;
function setContent(input: InputString, content: string): void;
function setContent(input: InputBoolean, content: boolean): void;
function setContent(input: { content: any }, content: any) {
    input.content = content
}

