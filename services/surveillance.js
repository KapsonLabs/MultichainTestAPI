const {pool, 
        createSchoolQuery, 
        getSchoolsQuery,
        createConditionQuery,
        getConditionsQuery,
        getIndividualSchool,
        createPatientQuery,
        getPatientsQuery
      } = require("../util/queries");
const {assignJwtToken} = require("../util/validators")
const { response } = require("express");

const authenticateSchool = async (request, response) => {
  await pool.connect()
  const {center_no} = request.body

  try{
    const res = await pool.query(getIndividualSchool, [center_no])
    if(res.rowCount==0){
      return response.json({
        "status":400,
        "message":"school not found"
      })
    }else{
      const token = await assignJwtToken(center_no)
      return response.json({
        "status":200,
        "token":token,
        "data":res.rows[0]
      })
    }
  } catch (err) {
    console.log(err.stack)
  }
}

const createSchool = async (request, response) => {
    await pool.connect()
    const {centre_no, subcounty} = request.body
    let now = new Date();
  
    const values = [centre_no, subcounty, now]
    try {
        const res = await pool.query(createSchoolQuery, values)
        return response.json({
          "status": 201,
          "data": res.rows[0]
        })
        
      } catch (err) {
        console.log(err.stack)
      }
}

const getAllSchools = async (request, response) => {
  await pool.connect()
  try{
    const res = await pool.query(getSchoolsQuery)
    return response.json({
      "status": 200,
      "data": res.rows
    })
  } catch (err) {
    console.log(err.stack)
  }
}

const createCondition = async (request, response) => {
  await pool.connect()
  const {condition} = request.body
  let now = new Date();

  const values = [condition, now]
  try {
      const res = await pool.query(createConditionQuery, values)
      return response.json({
        "status": 201,
        "data": res.rows[0]
      })
      
    } catch (err) {
      console.log(err.stack)
    }
}

const getAllConditions = async (request, response) => {
await pool.connect()
try{
  const res = await pool.query(getConditionsQuery)
  return response.json({
    "status": 200,
    "data": res.rows
  })
} catch (err) {
  console.log(err.stack)
}
}

const createPatient = async (request, response) => {
  await pool.connect()
  const {fname, lname, nin, nin_hash, gender, dob} = request.body
  let now = new Date();

  const values = [fname, lname, nin, nin_hash, gender, dob, now]
  try {
      const res = await pool.query(createPatientQuery, values)
      return response.json({
        "status": 201,
        "data": res.rows[0]
      })
      
    } catch (err) {
      console.log(err.stack)
    }
}

const getAllPatients = async (request, response) => {
  await pool.connect()
  try{
    const res = await pool.query(getPatientsQuery)
    return response.json({
      "status": 200,
      "data": res.rows
    })
  } catch (err) {
    console.log(err.stack)
  }
}

module.exports = {
  createSchool, 
  getAllSchools, 
  createCondition, 
  getAllConditions,
  authenticateSchool,
  createPatient,
  getAllPatients
}