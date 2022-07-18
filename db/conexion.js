const Pool = require('pg').Pool

const dbParams = {
    user: 'ofxfctfq',
    host: 'heffalump.db.elephantsql.com',
    database: 'ofxfctfq',
    password: 'hzrm1pn7s0p8AKs7z45JGweEGfdyeBZN'
}

const pool = new Pool({
    user: dbParams.user,
    host: dbParams.host,
    database: dbParams.database,
    password: dbParams.password
});

//Modularizamos y exportamos unicamente la constantes pool :)
module.exports = {
    pool
};