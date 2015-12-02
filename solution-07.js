const mongo = require('mongodb').MongoClient
const dbName = process.argv[2]
const collection = process.argv[3]
const id = process.argv[4]
const dbUrl = 'mongodb://localhost:27017/' + dbName
mongo.connect(dbUrl).then(db => {
  db.collection(collection, (err, col) => {
    col.remove({ _id: id }, (err, res) => {
      if (err) console.error(err)
      else console.log('deleted')
      db.close()
    })
  })
  .catch(err => { console.error(err) })
})
