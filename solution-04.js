const mongo = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017/learnyoumongo'
var age = parseInt(process.argv[2], 10)
mongo.connect(dbUrl).then(db => {
  db.collection('parrots', (err, col) => {
    col
      .find(
        { age: { $gt: age } },
        { _id: false }
      )
      .toArray()
      .then(cols => {
        console.log(cols)
        db.close()
      })
      .catch(err => console.error(err))
  })
  .catch(err => { console.error(err) })
})
