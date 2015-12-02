const mongo = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017/learnyoumongo'
const size = process.argv[2]
mongo.connect(dbUrl).then(db => {
  db.collection('prices', (err, col) => {
    if (err) console.error(err)
    else col.aggregate([
      { $match: { size: size } },
      { $group: { _id: 'average', average: { $avg: '$price' } } }
    ])
    .toArray((err, res) => {
      if (err) console.error(err)
      else console.log(parseInt(res[0].average, 10).toFixed(2))
      db.close()
    })
  })
  .catch(err => { console.error(err) })
})
