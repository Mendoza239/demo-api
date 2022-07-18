const Pool = require('pg').Pool

const dbParams = {
    user: 'ofxfctfq',
    host: 'heffalump.db.elephantsql.com',
    database: 'ofxfctfq',
    password: 'hzrm1pn7s0p8AKs7z45JGweEGfdyeBZN',
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