const { Client } = require ('pg');


async function getConnection() {
    const client = new Client({
        user:'ofxfctfq',
        host:'heffalump.db.elephantsql.com',
        database:'ofxfctfq',
        password:'hzrm1pn7s0p8AKs7z45JGweEGfdyeBZN'
    });
    await client.connect();
    return client;
}


module.exports = getConnection;