const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../../_helpers/db');

module.exports = {
    create
}

async function create(params){
    //make sure its unique
    if(await db.tblUserAccount.findOne({where: {email: params.email}})){
        throw 'Email already exists. '
    }

    await db.tblUserAccount.create(params);
}