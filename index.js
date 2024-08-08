const { MongoClient } = require('mongodb');

async function duplicateDatabase(uri, sourceDb, targetDb) {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const source = client.db(sourceDb);
    const target = client.db(targetDb);

    const collections = await source.listCollections().toArray();

    for (let collection of collections) {
      const docs = await source.collection(collection.name).find().toArray();
      if (docs.length > 0) {
        await target.collection(collection.name).insertMany(docs);
      }
    }
  } finally {
    await client.close();
  }
}

module.exports = duplicateDatabase
