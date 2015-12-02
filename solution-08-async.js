import bluebird from 'bluebird'
import mongodb from 'mongodb'
const MongoClient = bluebird.promisifyAll(mongodb).MongoClient
const dbUrl = 'mongodb://localhost:27017/learnyoumongo'
const size = process.argv[2]
async function run () {
  const db = await MongoClient.connect(dbUrl)
  const col = await db.collection('prices')
  const res = await col.aggregate([
    { $match: { size: size } },
    { $group: { _id: 'average', average: { $avg: '$price' } } }
  ]).toArray()
  console.log(parseInt(res[0].average, 10).toFixed(2))
  db.close()
}
run()
