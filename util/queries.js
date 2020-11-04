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

const createCasesQuery = 'INSERT INTO cases(cases_school_id, cases_patient_id, cases_condition_id, report_date) VALUES($1, $2, $3, $4) RETURNING *'

const getCasesQueryPatient = 'SELECT * FROM cases WHERE cases_patient_id  = $1'
 
module.exports={
  pool, 
  createSchoolQuery, 
  getSchoolsQuery, 
  createConditionQuery, 
  getConditionsQuery,
  getIndividualSchool,
  createPatientQuery,
  getPatientsQuery,
  createCasesQuery,
  getCasesQueryPatient
}