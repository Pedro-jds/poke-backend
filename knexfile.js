export const development = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'docker',
        database: 'pokebackend',
    },
    migrations: {
        directory: './src/database/migrations',
    },
    typeCast: function (field, next) {
        if (field.type === 'JSON') {
          return (JSON.parse(field.string()))
        }
        return next()
      },
    useNullAsDefault: true,
};