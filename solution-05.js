const mongo = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017/learnyoumongo'
const firstName = process.argv[2]
const lastName = process.argv[3]
mongo.connect(dbUrl).then(db => {
  db.collection('docs', (err, col) => {
    const doc = { firstName, lastName }
    col.insert(doc, (err, res) => {
      if (err) return console.error(err)
      console.log(JSON.stringify(doc))
      db.close()
    })
  })
  .catch(err => { console.error(err) })
})
