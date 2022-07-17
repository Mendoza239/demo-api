const {Client} = require('pg');


async function getConnection() {
    const client = new Client({
        user:"qxibmjic",
        host:"heffalump.db.elephantsql.com (heffalump-01)",
        database:"qxibmjic",
        password:"xt4k5HNR1y8Pb-bU-6bagbkfEhfb9UH_",
        port:5432,
    });
    await client.connect();
    return client;
}


module.exports = getConnection;