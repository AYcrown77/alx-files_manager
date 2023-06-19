import { MongoClient } from 'mongodb';


const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_DATABASE = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${DB_HOST}:${DB_PORT}`;


class DBClient {
  constructor() {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
      if (!err) {
        this.dbs = client.db(DB_DATABASE);
        this.users = this.dbs.collection('users');
        this.files = this.dbs.collection('files');
      } else {
        console.log(err.message);
        this.dbs = false;
      }
    });
  }

  isAlive() { return !!this.dbs; }

  async nbUsers() { return this.users.countDocuments(); }

  async nbFiles() { return this.files.countDocuments(); }

  async getUser(query) {
    const usr = await this.dbs.collection('users').findOne(query);
    return usr;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
