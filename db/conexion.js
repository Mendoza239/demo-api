const Pool = require('pg').Pool

const dbParams = {
    user: 'qxibmjic',
    host: 'heffalump.db.elephantsql.com (heffalump-01)',
    database: 'qxibmjic',
    password: 'xt4k5HNR1y8Pb-bU-6bagbkfEhfb9UH_',
    ssl: { rejectUnauthorized: false }
}

const pool = new Pool({
    user: dbParams.user,
    host: dbParams.host,
    database: dbParams.database,
    password: dbParams.password,
    ssl: { rejectUnauthorized: false }
});

//Modularizamos y exportamos unicamente la constantes pool :)
module.exports = {
    pool
};