const getConnection = require('../db/conexiondb');

class services{
    constructor(){};
    async find(){
        const client = await getConnection();
        const rta =await client.query('SELECT * FROM "public"."usuarios" LIMIT 100');
        return rta.rows;
    }
}
module.exports = services;