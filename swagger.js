import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        version: "1.0.0",
        title: "API Pokebackend",
        description: "API REST construída com nodejs/express que permite criar/consultar/alterar/deletar e comparar dados de pokemons"
    },
    host: "localhost:3333",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Pokemons",
            "description": "Endpoints"
        }
    ]
    }

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/app']

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async() => {
    await import('./src/app')           
})