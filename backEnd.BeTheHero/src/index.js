const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end;
  * POST: Criar uma informação no back-end;
  * PUT: Alterar uma informação no back-end;
  * DELETE: Deletar uma informação no back-end;
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query: Parâmetros nomeados enviados na rota após ('?') - ( Filtros, paginação, etc );
   * Ex.: http://localhost:3333/users?name=Maria
   * 
   * Route Params: Parâmetros utilizados para identificar recursos;
   * Ex.: http://localhost:3333/users/:id
   * 
   * Body: Corpo da requisição, utilizado para criar ou alterar recursos;
   * Ex.: {	"name": "Beto",	"job": "Dev" }
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
    * 
    * NoSQL: MongoDB, CouchDB, etc;
    */

    /**
     * Driver: Select * from users; - Usando pacote oficial do Banco de Dados, para NodeJs
     * Query Builder: table('users').select('*').where() - Usando recurso 'JavaScript' para o Banco de Dados SQL
     * Iremos utilizar o QueryBuilder: KNEX.JS
     */
