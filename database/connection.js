const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: 'root',
  port: 5432,
});

const getData = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public."patientData"', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }


  const getMedicationData = (patiendKey) => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public."Medications" WHERE "PatientKey" = $1', [patiendKey], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  module.exports = {
    getData,
    getMedicationData
  }