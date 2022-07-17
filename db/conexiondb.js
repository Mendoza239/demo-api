const Pool = require('pg').Pool


const dbParams = {
    user:"qxibmjic",
    host:"heffalump.db.elephantsql.com (heffalump-01)",
    database:"qxibmjic",
    password:"xt4k5HNR1y8Pb-bU-6bagbkfEhfb9UH_",
    port:5432,
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