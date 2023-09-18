const mongoose = require('mongoose');

class Database {
    async connect() {
        try {
            // let MONGODB_URL="mongodb://localhost:27017";

            let MONGODB_URL="mongodb://eklavyaagarwal1810:ts3dMpKAnSsfAFno@ac-dyqbwx1-shard-00-00.mrorrsw.mongodb.net:27017,ac-dyqbwx1-shard-00-01.mrorrsw.mongodb.net:27017,ac-dyqbwx1-shard-00-02.mrorrsw.mongodb.net:27017/mymongodb?ssl=true&replicaSet=atlas-zcbtu1-shard-0&authSource=admin&retryWrites=true&w=majority";


            await mongoose.connect(MONGODB_URL);
            console.log('Database connection successfull.');
        } catch(err) {
            console.log('Database connection error:', err);
        }
    }
}

module.exports = new Database();