const { Pool } = require('pg');

var connectionString = 'postgresql://postgres:postgres@localhost/mydb';
var pool = new Pool({
    connectionString: connectionString
});

module.exports = {
    query: (text, params, callback) => {
        const start = Date.now();
        return pool.query(text, params, (err, res) => {
            const duration = Date.now() - start;
            console.log('executed query', { text, duration });//, rows: res.rowCount });
            callback(err, res);
        });
    }
};
