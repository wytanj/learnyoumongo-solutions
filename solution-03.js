const mongo = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017/learnyoumongo'
var age = parseInt(process.argv[2], 10)
mongo.connect(dbUrl).then(db => {
  db.collection('parrots').then(col => {
    col
      .find({ age: { $gt: age } })
      .toArray()
      .then(cols => {
        console.log(cols)
        db.close()
      })
  })
})
