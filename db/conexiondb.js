import { Client } from 'pg';


async function getConnection() {
    const client = new Client({
        user:"qxibmjic",
        host:"heffalump.db.elephantsql.com",
        database:"qxibmjic",
        password:"xt4k5HNR1y8Pb-bU-6bagbkfEhfb9UH_"
    });
    await client.connect();
    return client;
}


export default getConnection;