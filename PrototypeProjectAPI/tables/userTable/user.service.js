const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    create
}

async function create(params){
    //make sure its unique
    if(await db.tblUser.findOne({where: {username: params.username}})){
        throw 'Username taken'
    }

    await db.tblUser.create(params);
}