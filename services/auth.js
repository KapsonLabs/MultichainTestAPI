const { User } = require("../models/authmodels")
const { request, response } = require('express');
const jwt = require("jsonwebtoken")
const {generateOtp, dispatchOtp} = require('../util/dispatch-otp');
const {config} = require("../config")

const addUser = async (phoneNumber, otp, firstName, lastName) => {
    return await User.create({
        phoneNumber: phoneNumber,
        otp: otp,
        firstName: firstName,
        lastName: lastName
    })
} 

const getUsers = async (request, response) => {
    await User.findAll({raw:true})
    .then(async users => {
        response.json({
            "status":200,
            "data": users
        })
    }).catch(error => {
        return error
    })
}

const getSpecificUser = async (request, response) => {
    const {phonenumber} = request.body
    await User.findOne(
        { where: { phoneNumber: phonenumber }}
    ).then( async user => {
        const otp = generateOtp()
        await User.update({ otp: otp }, {
            where: {
                phoneNumber: phonenumber
            }
        }).then(async a => {
            dispatchOtp(phonenumber, otp)
            response.json({
                "status":200,
                "data": {
                    "otp":otp,
                    "expiry":600
                }
            })
        })
    }).catch(error => {
        console.log(error)
        response.json({
            "status":400,
            "message":"Bad request parameters"
        })
    })
}

const authenticateUser = async(request, response) => {
    const {phonenumber, otp} = request.body
    await User.findOne(
        { where: { phoneNumber: phonenumber }}
    ).then( async user => {
        if(user.otp === parseInt(otp)){
            await jwt.sign(
                {
                payload: {
                    phoneNumber: phonenumber,
                    sig: "kapson"
                }
                },
                config.secret,
                {},
                (error, token) => {
                if (error) {
                    response.status(401).send({ error });
                } else {
                    response.status(200).json({ "status":200, "data":user, "token":token });
                }
                }
            )
        } else {
            response.json({"status":400, "message":"Dont play games, Check that token properly"})
        }
    }).catch(error => {
        console.log(error)
        response.json({"status":400, "message":"Dont play games, Check that token properly"})
    })
}

module.exports = {addUser, getUsers, getSpecificUser, authenticateUser}