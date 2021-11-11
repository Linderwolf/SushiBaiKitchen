const express = require('express');
const router = express.Router();
const Joi = require('joi');

const userService = require('./user.service')

router.post('/register', registerSchema, register);

function registerSchema(req,res, next){
    const schema = Joi.object({
        id: Joi.number(),
        username: Joi.String().required(),
        hometown: Joi.string()
    })
    
}

function register(req, res, next){
    userService.create(req.body).then(()=>res.json({message: 'Registration Successful'})).catch(next);
}