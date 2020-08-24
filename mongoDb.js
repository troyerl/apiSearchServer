const chalk = require('chalk');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

class MongoDb {

  // connects to db when server starts
  constructor() {
    const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.v6w1c.mongodb.net/apiSearch?retryWrites=true&w=majority`;

    MongoClient.connect(connectionString, {
      useUnifiedTopology: true
    }, (err, client) => {
      if (err) return console.error(err);
      console.log(chalk.cyan('Connected to Database'));
      this.db = client.db('api-search');
    })
  };

  // fetches first element from collection, returns keywords array from the first/only doc
  async fetchKeywords() {
    let keywords = await this.db.collection('keywordsCollection').find().toArray();
    return keywords[0].keywords;
  }

  // fetches list of api docs that contain keywords
  async fetchApi(searchKeywords) {
    let res = await this.db.collection('apiCollection').find({ keywords: searchElements}).toArray();
    return res;
  };

  // fetches list of api docs that contain keywords
  async fetchDatabase(searchKeywords) {
    let res = await this.db.collection('databaseCollection').find({ keywords: searchElements}).toArray();
    return res;
  };

  async fetchData(searchKeywords) {
    let res = null;
    if (searchKeywords.includes('database')) {
      res = await this.fetchDatabase(searchKeywords);
    } else {
      res = await this.fetchApi(searchKeywords);
    }
  };

  sendData() {
    
  };
};

module.exports = MongoDb;