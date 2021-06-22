const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'postgres',
  password: 'root',
  port: 5432,
});

const getFAQs = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM faqs ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}


module.exports = {
  getFAQs,
}