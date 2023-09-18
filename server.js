const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

// const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_MODEL_URN, MONGODB_URL } = process.env;

let FORGE_CLIENT_ID="DGEP7IuKDb7ihJwic9eI5joxMXlAa6sx";
let FORGE_CLIENT_SECRET="9vbBM4cpt9cbk9tV";


let FORGE_MODEL_URN="dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGdlcDdpdWtkYjdpaGp3aWM5ZWk1am94bXhsYWE2c3gtYmFzaWMtYXBwL1ZpbGxhXzIwMjJfdXBkYXRlZC5ydnQ";

// let MONGODB_URL="mongodb://localhost:27017";


let MONGODB_URL="mongodb://eklavyaagarwal1810:ts3dMpKAnSsfAFno@ac-dyqbwx1-shard-00-00.mrorrsw.mongodb.net:27017,ac-dyqbwx1-shard-00-01.mrorrsw.mongodb.net:27017,ac-dyqbwx1-shard-00-02.mrorrsw.mongodb.net:27017/mymongodb?ssl=true&replicaSet=atlas-zcbtu1-shard-0&authSource=admin&retryWrites=true&w=majority";


let FORGE_BUCKET,PORT;

if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET || !FORGE_MODEL_URN || !MONGODB_URL) {
  console.warn('Provide all the following env. variables to run this application:');
  console.warn('FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_MODEL_URN, MONGODB_URL');
  return;
}

const db = require('./model/db');
const app = express();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["*", "data:", "blob:", "'unsafe-inline'"]
    },
  })
);
app.set('view engine', 'pug');
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/procurement', require('./routes/procurement'));
app.use('/api/maintenance', require('./routes/maintenance'));

const port = process.env.PORT || 3000;
db.connect()
  .then(() => app.listen(port, () => console.log(`Server listening on port ${port}`)))
  .catch((err) => console.error(err));