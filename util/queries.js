const { Pool, Client } = require('pg')
const client = new Client({
    user: process.env.USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DATABASE_PORT,
})

const text = 'INSERT INTO schools(centre_no, subcounty, added_date) VALUES($1, $2, $3) RETURNING *'


module.exports={client, text}