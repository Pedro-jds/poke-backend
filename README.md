# Desafio SomoS

Linguagem: `Javascript`

Framework: `NODEJS`

## Descrição

REST API feita em NodeJS/express que permite visualizar/cadastrar/alterar/deletar e comparar dados de pokemons

## Pré-requisitos

Antes de iniciar, se assegure que possui os requisitos abaixo:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com)
- [VSCode](https://code.visualstudio.com/) para trabalhar com o código
- [Docker](https://www.docker.com/) ou [Mysql5.7](https://dev.mysql.com/downloads/windows/installer/5.7.html) para o banco de dados


## Configurar MySQL

Crie uma instância de MySQL em sua máquina.

Caso utilize o Docker, execute o seguinte comando no terminal para criar um container:

```
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=docker -d mysql:5.7
```

Usuário: root
Password: docker
Host: localhost
Port: 3306

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


## Instalação/Execução

Para instalar/executar este projeto, siga as seguintes etapas:

# Clone este repositório
$ git clone <https://github.com/Pedro-jds/poke-backend>


# Acesse a pasta do projeto no terminal/cmd
$ cd poke-backend


# Instale as dependências
$ npm install


## Execute as Migrations
$npx knex migrate:latest


# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3333 - acesse <http://localhost:3333/doc> 

