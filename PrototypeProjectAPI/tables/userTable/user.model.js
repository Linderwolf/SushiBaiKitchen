const { DataTypes } = require('sequalize');

module.exports = model;

function model(sequelize){
    const attributes = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        username: {type: DataTypes.STRING, primaryKey: false, allowNull: false},
        hometown: { type: DataTypes.STRING, allowNull: false}
    }

    const options = {
        timestamps: true
    }

    return sequelize.define('tblUser', attributes, options)
}