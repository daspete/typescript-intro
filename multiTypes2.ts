type User = {
    id: number
    name: string
}

type Pagecomponent = {
    id: number
    createdBy: User
}

type PostType = {
    id: number
    title: string
    pagecomponents: Pagecomponent[]
    createdBy: User
}

const user: User = {
    id: 1,
    name: 'Bob'
}

const anotherUser: User = {
    id: 2,
    name: 'Alice'
}

const pagecomponent: Pagecomponent = {
    id: 1,
    createdBy: user
}

const post: PostType = {
    id: 1,
    title: 'testpage',
    pagecomponents: [pagecomponent],
    createdBy: anotherUser
}

const items: (PostType|Pagecomponent)[] = [
    post,
    pagecomponent
]

const getItemsCreatedByUsers = (_items: (PostType|Pagecomponent)[]) => {
    const users: User[] = []

    _items.forEach(item => {
        users.push(item.createdBy)
    })

    return users
}

console.log(getItemsCreatedByUsers(items))