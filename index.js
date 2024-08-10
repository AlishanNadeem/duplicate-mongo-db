const { MongoClient } = require('mongodb');

async function duplicateDatabase(options) {

  const { sourceURI, targetURI, sourceDBName, targetDBName } = options

  const sourceClient = new MongoClient(sourceURI);
  const targetClient = new MongoClient(targetURI);

  try {
    
    await sourceClient.connect();
    await targetClient.connect();

    const source = sourceClient.db(sourceDBName);
    const target = targetClient.db(targetDBName);

    const collections = await source.listCollections().toArray();

    for (let collection of collections) {
      const docs = await source.collection(collection.name).find().toArray();
      if (docs.length > 0) {
        await target.collection(collection.name).insertMany(docs);
      }
    }
  } finally {
    await sourceClient.close();
    await targetClient.close();
  }
}

module.exports = duplicateDatabase
