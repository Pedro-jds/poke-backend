import swaggerJSDoc from 'swagger-jsdoc';


const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API Pokebackend',
    version: '1.0.0',
    description:'Uma REST API feita com node/express, que permite buscar/cadastrar/alterar/deletar e comparar dados de pokemons'
  },
  contact: {
    name: 'Pedro Junior da silva',
    url: 'https://github.com/Pedro-jds',
  },
  servers: [
    {
      url: 'http://localhost:3333',
      description: 'Development server',
    },
],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['../../routes/pokemons.routes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec