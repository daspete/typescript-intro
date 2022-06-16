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

const databaseConfig: DatabaseConfig = {
    host: 'localhost',
    port: 5432,
    dbName: 'test',
    auth: {
        username: 'test',
        password: 'test'
    }
}