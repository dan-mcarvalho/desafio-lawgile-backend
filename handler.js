const serverless = require("serverless-http");
const express = require('serverless-express')
const { postgraphile } = require("postgraphile");
const { cors } = ("middy/middleware")

const app = new express();

app.use(
  postgraphile(
    "postgres://Daniel:queijo123@database-lawgile.cad5ofa4qary.us-east-2.rds.amazonaws.com/postgres",
    "postit_database",
    { 
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      enableCors: true
    }
  )
)

app.use(cors())

module.exports.startPostgraphile = serverless(app);


// const middy = require('@middy/core')
// const { cors } = require('middy/middlewares')
// const { postgraphile } = require("postgraphile");

// const handler = (event, context, callback) => {

//   const response = {
//     statusCode: 200,
//     body: "POST method was succesfull"
//   }

//   return callback(null, response)
// }

// const startPostgraphile = middy(handler)

// startPostgraphile.use(cors()) 

// startPostgraphile.use(
//     postgraphile(
//       "postgres://Daniel:queijo123@database-lawgile.cad5ofa4qary.us-east-2.rds.amazonaws.com/postgres",
//       "postit_database",
//       { 
//         watchPg: true,
//         graphiql: true,
//         enhanceGraphiql: true,
//         enableCors: true
//       }
//     )
// )

// module.exports = { startPostgraphile }

