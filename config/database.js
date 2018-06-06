// Create connection to database
module.exports = {
    config: {
        userName: process.env.MSSQL_USER, // update me
        password: process.env.MSSQL_PASS, // update me
        server: process.env.MSSQL_HOST, // update me
        options: 
        {
            database: process.env.MSSQL_DBNAME, //update me
            encrypt: true,
            rowCollectionOnRequestCompletion: true,
        }
    }
}