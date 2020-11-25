const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);


const User  = sequelize.define('user', {
    phoneNumber : {
        type: DataTypes.STRING,
        unique: true,
    },
    otp : {
        type: DataTypes.INTEGER,
    },
    firstName : {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    }
});

// const Uploads = sequelize.define('user', {

// })

module.exports = {User}