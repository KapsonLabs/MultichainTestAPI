const {pool, 
        createSchoolQuery, 
        getSchoolsQuery,
        createConditionQuery,
        getConditionsQuery,
        getIndividualSchool,
        createPatientQuery,
        getPatientsQuery,
        createCasesQuery
      } = require("../util/queries");
const {assignJwtToken} = require("../util/validators")
const { response } = require("express");

const authenticateSchool = async (err, request, response) => {
  
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
      return response.json({
        "status":500,
        "message":"Internal Server Error"
      })
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
        return response.json({
          "status":500,
          "message":"Internal Server Error"
        })
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
    return response.json({
      "status":500,
      "message":"Internal Server Error"
    })
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
      return response.json({
        "status":500,
        "message":"Internal Server Error"
      })
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
  return response.json({
    "status":500,
    "message":"Internal Server Error"
  })
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
      return response.json({
        "status":500,
        "message":"Internal Server Error"
      })
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
    return response.json({
      "status":500,
      "message":"Internal Server Error"
    })
  }
}

const createCase = async (request, response) => {
  await pool.connect()
  const {school_id, patient_id, conditions} = request.body
  let now = new Date();
  
  Object.keys(conditions).map(function(key, index) {
    
    const values = [school_id, patient_id, conditions[key], now]
    try {
      pool.query(createCasesQuery, values).then(
        console.log(res)
      )
      
    } catch (err) {
      return response.json({
        "status":500,
        "message":"Internal Server Error"
      })
    }
  })
  return response.json({
    "status": 201,
    "data": conditions
  })
}

module.exports = {
  createSchool, 
  getAllSchools, 
  createCondition, 
  getAllConditions,
  authenticateSchool,
  createPatient,
  getAllPatients,
  createCase
}