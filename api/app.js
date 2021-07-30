// const schema = require('./schema');
// const resolvers = require('./resolvers');
const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();

app.use(
  postgraphile(
    "postgres://Daniel:queijo123@database-lawgile.cad5ofa4qary.us-east-2.rds.amazonaws.com/postgres",
    "postit_database",
    { 
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
    }
  )
);


module.export = app;