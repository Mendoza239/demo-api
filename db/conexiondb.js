const Pool = require('pg').Pool


const dbParams = {
    user:"",
    host:"",
    database:"",
    password:"",
    port:5000,
    ssl: {rejectUnautorized:false}
}

const pool = new Pool({
    user: dbParams.user,
    host: dbParams.host,
    database: dbParams.database,
    password: dbParams.password,
    port: dbParams.port,
    ssl: {rejectUnautorized:false}
})

module.exports = {
    pool
};