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
    },
    dbConn:function(sql,sqlObj,callBack){
        let pool=mysql.createPool(this.config)
        pool.getConnection((err,conn)=>{
            if(err){
                console.log(err)
                return;
            }
            conn.query(sql,sqlObj,callBack)
            conn.release();
            
        })
    }
};
 
module.exports = app;