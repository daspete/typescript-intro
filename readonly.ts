interface User {
    readonly id: number
    name: string
}

interface Post {
    readonly id: number
    name: string
    content: string
    readonly createdBy: User
}

const user: User = {
    id: 1,
    name: 'Bob'
}

const post: Post = {
    id: 1,
    name: 'testpage',
    content: 'testcontent',
    createdBy: user
}

post.id = 2

