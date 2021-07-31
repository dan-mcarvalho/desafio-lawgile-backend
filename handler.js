// const schema = require('./schema');
// const resolvers = require('./resolvers');


module.exports.startPostgraphile = async event => {
  const express = require("serverless-express");
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

  const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin":"*",
          "Access-Control-Allow-Credentials":"true",
          "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers":"Access-Control-Allow-Headers:Origin,Accept:X-Requested-With:Content-Type:Access-Control-Request-Method:Access-Control-Request-Headers:Access-Control-Allow-Methods:Access-Control-Allow-Origin"
      },
      body: JSON.stringify('POST Method succesfully sent!'),
  };

    return response;
}

