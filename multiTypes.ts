
type Post = {
    postName: string
    title: string
    content: string
}

type Article = {
    articleName: string
    title: string
    content: string
    tag: string[]
}

const currentContent: Post|Article = {
    articleName: 'test',
    title: 'test',
    content: 'test',
    tag: ['test']
}

const anotherContent: Post|Article = {
    postName: 'test',
    title: 'test',
    content: 'test'
}

const collections: (Post|Article)[] = [
    {
        postName: 'post1',
        title: 'post1',
        content: 'post1'
    },
    {
        articleName: 'article1',
        title: 'article1',
        content: 'article1',
        tag: ['tag1', 'tag2']
    },
    currentContent,
    anotherContent
]

const getCollectionContents = (_collections: (Post|Article)[]) => {
    const contents: string[] = []

    _collections.forEach(collection => {
        contents.push(collection.content)
    })

    return contents
}

console.log(getCollectionContents(collections))