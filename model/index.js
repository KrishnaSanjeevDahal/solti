const {Sequelize,DataTypes} = require('sequelize');
const dbConfig = require('../config/dbConfig');

const {database,user,password,host,port,dialect,pool} = dbConfig;

const sequelize = new Sequelize(database,user,password,{
    host,
    port,
    dialect,
    pool
});

sequelize.authenticate()
.then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log("unable to connect to the database", err)
});


const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize.sync({force: false}).then(()=>{
    console.log("Synced Done")
});

module.exports = db;