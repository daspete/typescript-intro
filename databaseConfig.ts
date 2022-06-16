type DatabaseUserConfig = {
    username: string
    password: string
}

type DatabaseConfig = {
    host: string
    port: number
    dbName: string
    auth?: DatabaseUserConfig
}

type MongodbDatabaseConfig ={
    host: string
    port: number
    collection: string
    auth?: DatabaseUserConfig
}

const databaseConfig: DatabaseConfig|MongodbDatabaseConfig = {
    host: 'localhost',
    port: 5432,
    collection: 'test',
    // dbName: 'test',
    auth: {
        username: 'test',
        password: 'test'
    }
}
