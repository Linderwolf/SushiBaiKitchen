const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize){
    const attributes = {
        accountID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        email: {type: DataTypes.STRING, primaryKey: false, allowNull: false},
        password: {type: DataTypes.STRING, primaryKey: false, allowNull: false}
    }

    const options = {
        timestamps: true
    }

    return sequelize.define('tblUserAccount', attributes, options)
}