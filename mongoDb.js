const MongoClient = require('mongodb').MongoClient

class MongoDb {
  async dbConnect() {
    const connectionString = 'mongodb+srv://baseUser:baseUser@cluster0.v6w1c.mongodb.net/apiSearch?retryWrites=true&w=majority';
    
    try {
      const client = await MongoClient.connect(connectionString, {
        useUnifiedTopology: true
      });
    } catch (err) {
      console.log('ERR:');
      console.log(err);
    }
    
    console.log('Connected to Database')
    this.db = client.db('apiSearch')
  }

  fetchData() {
    console.log('fetch');
    console.log(this.test);
  }
};

module.exports = MongoDb;