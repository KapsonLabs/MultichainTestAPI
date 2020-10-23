const client = require("../util/queries")

client.client.connect()

const createSchool = async (request, response) => {
    // async/await
    const {centreNo, subcounty} = request.body
    let now = new Date();
    const values = [centreNo, subcounty, now]
    try {
        const res = await client.client.query(client.text, values)
        console.log(res.rows[0])
        // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
      } catch (err) {
        console.log(err.stack)
      }
}

module.exports = {createSchool}