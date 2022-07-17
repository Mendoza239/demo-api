const Pool = require('pg').Pool


const dbParams = {
    user:"zcgyexkeswijsc",
    host:"ec2-34-239-241-121.compute-1.amazonaws.com",
    database:"dcjhcp6nb4003h",
    password:"6065823d6595ae2bb7e679074972cd7e2ca81a5ae3179da2cf67e868b51dc237",
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