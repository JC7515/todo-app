const postgres_db = require('./config.js')
const {Client, Pool} = require('pg')


// const connection = new Client(postgres_db)

// const pgPool = new Client(postgres_db)
// const connection = {
//     async connect() {
//         for (let nRetry = 1; ; nRetry++) {
//             try {
//                 const client = await pgPool.connect();
//                 if (nRetry > 1) {
//                     console.log('Se logro la conexion con Postgres');
//                 }
//                 return client;
//             } catch (e) {
//                 if (e.toString().includes('ECONNREFUSED') && nRetry < 5) {
//                     console.log('ECONNREFUSED connecting to Postgres, ' +
//                         'maybe container is not ready yet, will retry ' + nRetry);
//                     // Wait 1 second
//                     await new Promise(resolve => setTimeout(resolve, 1000));
//                 } else {
//                     throw e;
//                 }
//             }
//         }
//     }
// };

// const connection = new Pool({
//     connectionString: "postgres://postgres:root1234@backend-db-1:5432/mydb"
// })
const connection = new Pool({
    connectionString: "postgres://postgres:root1234@db:5432/mydb"
})


connection.connect((err, conn) => {
   if(err){
    console.log('Ha ocurrido un error con la conexion a la base de datos')
    console.log(err)
   }else{
       console.log('Conexion exitosa a la base de datos')
       return conn
   }

})

console.log(connection)

// connection.end()

module.exports = connection;