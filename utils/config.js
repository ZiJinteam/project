let app = {
    user: 'root',
    password: '123456',
    server: 'localhost',
    database: 'managerment',
    port: 3306,
    options: {
    encrypt: true // Use this if you're on Windows Azure
    },
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 3000
    }
};
 
module.exports = app;