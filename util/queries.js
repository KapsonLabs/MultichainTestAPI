const { Pool, Client } = require('pg')
const connectionString = process.env.DATABASE_CONNECTION_STRING


const pool = new Pool({
  connectionString: connectionString,
})


const createSchoolQuery = 'INSERT INTO schools(center_no, subcounty, added_date) VALUES($1, $2, $3) RETURNING *'

const getSchoolsQuery = 'SELECT * FROM schools'

const createConditionQuery = 'INSERT INTO conditions(condition, date_added) VALUES($1, $2) RETURNING *'

const getConditionsQuery = 'SELECT * FROM conditions'

const getIndividualSchool = 'SELECT * FROM schools WHERE center_no = $1'

const createPatientQuery = 'INSERT INTO patients(fname, lname, nin, nin_hash, gender, dob, date_added) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *'

const getPatientsQuery = 'SELECT * FROM patients'
 
module.exports={
  pool, 
  createSchoolQuery, 
  getSchoolsQuery, 
  createConditionQuery, 
  getConditionsQuery,
  getIndividualSchool,
  createPatientQuery,
  getPatientsQuery
}