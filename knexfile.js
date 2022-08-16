export const development = {
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "docker",
    database: "pokebackend",
  },
  migrations: {
    directory: "./src/database/migrations",
  },
  useNullAsDefault: true,
};
