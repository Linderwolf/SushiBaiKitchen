const express = require('express');
const router = express.Router();
const Joi = require('joi');

const userAccountService = require('./user_account.service')

router.post('/sign-up', registerSchema, register);

function registerSchema(req,res, next){
    const schema = Joi.object({
        accountID: Joi.number(),
        email: Joi.String().required(),
        password: Joi.string()
    })
    
}

function register(req, res, next){
    userAccountService.create(req.body).then(()=>res.json({message: 'Registration Successful'})).catch(next);
}

module.exports = router;