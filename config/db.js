module.exports={
    HOST:'localhost',
    USER:'postgres',
    PASSWORD:'9995',
    DB:'postgres',
    dialect:'postgres',

    pool:{
        max:5,
        min:0,
        acquire:300000,
        idle:10000
    }
}
