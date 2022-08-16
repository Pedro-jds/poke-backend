# Desafio SomoS

Linguagem: `Javascript`/`NODEJS`

Framework: `Express`

## Descrição

REST API feita em NodeJS/express que permite visualizar/cadastrar/alterar/deletar e comparar dados de pokemons

## Pré-requisitos

Antes de iniciar, se assegure que possui os requisitos abaixo:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com)
- [VSCode](https://code.visualstudio.com/) para trabalhar com o código
- [Docker](https://www.docker.com/) ou [Mysql5.7](https://dev.mysql.com/downloads/windows/installer/5.7.html) para o banco de dados

## Bibliotecas utilizadas:
* [Nodemon](https://nodemon.io/) - recarregamento automático durante desenvolvimento.
* [Swagger-UI](https://github.com/swagger-api/swagger-ui) - Visualizar, consumir e documentar APIREST
* [Celebrate](https://github.com/arb/celebrate#readme) - Para fazer validação de dados
* [Knex](https://knexjs.org/) - SQL query builder


## Configurar MySQL

Crie uma instância de MySQL em sua máquina.

Caso utilize o Docker, execute o seguinte comando no terminal para criar um container:

```
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=docker -d mysql:5.7
```
```
Usuário: root
Password: docker
Host: localhost
Port: 3306
```

Essa configuração sugerida é utilizada no arquivo `knexfile.js`.

## Criar Database

Crie uma database de desenvolvimento com o nome:

`pokebackend`

```sql
CREATE DATABASE pokebackend;

```

Você pode fazer isso através de uma GUI como o [DBeaver](https://dbeaver.io/), 
[Mysqlworkbench](https://dev.mysql.com/downloads/workbench/) ou através do terminal.

```sql
USE pokebackend;

# Verifique se a database certa foi selecionada
SELECT DATABASE();
```

# Instalação/Execução

Para instalar/executar este projeto, siga as seguintes etapas:

## Clone este repositório
$ git clone <https://github.com/Pedro-jds/poke-backend>


## Acesse a pasta do projeto no terminal/cmd
$ cd poke-backend


## Instale as dependências
$ npm install


## Execute as Migrations para criação das tabelas necessárias no banco de dados
$npx knex migrate:latest


## Execute a aplicação em modo de desenvolvimento
$ npm start

### O servidor inciará na porta:3333 - acesse <http://localhost:3333/doc>

Clicando no link acima abrirá uma pagina web do seu navagador onde conseguirá visualizar todas as rotas disponiveis,
com todos paramêtros que a aplicação suporta com uma breve descrição.

## Resumo das rotas

#### _1 - Cadastro de cartas_

##### Requisição

**Método**: POST

**Endpoint**: /pokemons

**Body**: A entrada deverá ser um Json, com o nome da carta e seus atributos como o exemplo abaixo

``` json
{
  "name": "bulbasaur",
  "attributes": {
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "special-attack": 65,
    "special-defense": 65,
    "speed": 45
  }
}
```

##### Resposta

```json
{
  "message": "pokemon cadastrado",
  "status": 201,
  "id": [
    40
  ]
}
```

**Status Code**: 201


#### _2 - Listagem de cartas_

##### Requisição

**Método**: GET

**Endpoint**: /pokemons

**Body**: vazio

##### Resposta

Retona uma listagem de até 10 pokemons com paginação


**Query page**: Paginação de pokemons retorna até no maximo 10 (Opcional), exemplo /pokemons?page=2


**Query filter**:Filtros de pokemons pelo nome (Opcional), exemplo /pokemons?filter=pi

``` json
[
    {
        "name": "pikachu",
        "attributes": {
            "hp": 60,
            "attack": 19,
            "defense": 120,
            "special_attack": 170,
            "special_defense": 190,
            "speed": 60
        }
    },
    {
        "name": "pichu",
        "attributes": {
            "hp": 60,
            "attack": 19,
            "defense": 120,
            "special_attack": 170,
            "special_defense": 180,
            "speed": 60
        }
    },
    {
        "paginations": {
            "total": 2,
            "lastPage": 1,
            "perPage": 10,
            "currentPage": 1,
            "from": 0,
            "to": 10
        }
    }
]
```

**Status Code**: 200


#### _3 - Consulta de cartas_

##### Requisição

**Método**: get

**Endpoint**: /pokemons/:id

**Body**: vazio

##### Resposta

Devolve uma carta de acordo com o id.

**Status Code**: 200

Exemplo: /pokemons/1

**Body**: 

``` json
{
  "id": 1,
  "name": "bulbasaur",
  "attributes": {
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "special-attack": 65,
    "special-defense": 65,
    "speed": 45
  }
}
```

#### _4 - Alterar Pokemon_

Esta operação permite alterar os dados de um pokemon

##### Requisição

**Método**: PUT

**Endpoint**: /pokemons/:id

**Body**: A entrada deverá ser um Json, com o nome da carta e seus atributos como o exemplo abaixo e um id no endpoint

``` json
{
  "name": "charmander",
  "attributes": {
    "hp": 40,
    "attack": 49,
    "defense": 49,
    "special-attack": 65,
    "special-defense": 65,
    "speed": 45
  }
}
```

##### Resposta

```json
{
   "message": "pokemon atualizado",
   "status": 200,
}
```

**Status Code**: 200

#### _5 - Deletar pokemon_

Esta operação deleta um pokemon do banco de dados

##### Requisição

**Método**: DELETE

**Endpoint**: /pokemons/:id

**Body**: vazio

##### Resposta

**Status Code**: 200

**Body**: retorno:

``` json
{
   "message": "pokemon deletado",
   "status": 200,
}
```

#### _6 - Comparação de cartas_

 ##### Requisição

**Método**: POST

**Endpoint**: /comparar

**Body**: A entrada deverá ser como Json abaixo, com as chaves "playerOneCard" e "playerTwoCard",
 os valores ficam a escolha dos jogadores.

``` json
{
  "playerOneCard": 7,
  "playerTwoCard": 3
}
```

##### Resposta

**Body**: O retorno é o resultado da comparação e os detalhes sobre o vencedor em cada um dos atributos:

``` json
{
  "winner": 1,
  "loser": 2,
  "details": {
    "hp": 1,
    "attack": 2,
    "defense": 1,
    "special-attack": 1,
    "special-defense": 1,
    "speed": 2
  }
}
```
**Status Code**: caso seja uma comparação bem sucedida gera um registro de vitória,
 no banco de dados para o jogador vitorioso, retorna o status code 201.

 Caso seja empate não registra nada no banco de dados e retorna:

 ```json
{
   error: "Ocorreu um empate",
   statusCode: 400,
}

 ```
**Status Code**:400

#### _7 - Resultado acumulado_

Esta operação fornece um resultado acumulado de todas as comparações feitas dentro da aplicação, 
informando o somatório de vitórias dos dois jogadores.

##### Requisição

**Método**: GET

**Endpoint**: /vitorias

**Body**: vazio

##### Resposta

**Status Code**: 200

**Body**: retorno:

``` json
{
  "playerOne": 12,
  "playerTwo": 21
}
```