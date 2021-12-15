const config = require('../config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize(){
    //create db if it does not already exist
    const {host, port, user, password, database} = config.database;
    const connection = await mysql.createConnection({host,port,user,password});
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    //connect to db
    const sequelize = new Sequelize(database, user, password, {dialect:'mysql'});

    //init the models
    db.tblUserAccount = require('../tables/userAccountTable/user_account.model.js')(sequelize);
    //associations

    //sync all modeuls with the db
    await sequelize.sync();
}