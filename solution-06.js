const mongo = require('mongodb').MongoClient
const dbName = process.argv[2]
const dbUrl = 'mongodb://localhost:27017/' + dbName
mongo.connect(dbUrl).then(db => {
  db.collection('users', (err, col) => {
    const query = { username: 'tinatime' }
    const delta = { $set: { age: 40 } }
    col.update(query, delta, (err, res) => {
      if (err) console.error(err)
      else console.log('updated')
      db.close()
    })
  })
  .catch(err => { console.error(err) })
})
