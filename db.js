const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'NODE2906',
    user: 'postgres',
    password: 'khoapham',
    max: 20,
    idleTimeoutMillis: 1000
});

pool.connect((err, client) => {
    if (err) return console.log(err.toString());
    client.query('SELECT * FROM "Product"', (errQuery, result) => {
        if (errQuery) console.log(errQuery.toString());
        console.log(result.rows);
    });
});

function queryDB(sql, cb) {
    //cb(data);
}
