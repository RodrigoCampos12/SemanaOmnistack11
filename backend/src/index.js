const express = require('express');
const cors = require('cors');
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(8000);

/*
* Rotas / Recursos
*/

/* 
 * Metodo HTTP 
 *
 * Metodo GET / BUscar alguma infoma;cão no back-end 
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipo de parâmetros
 *  
 * Query PArams: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da rewuisoção, utilizadopara criar ou alterar a recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...
  */

  /**
   * Driver: SELECT * FROM Users;
   * Query Builder: 
   */



