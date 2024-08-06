const mongoose = require('mongoose');
require('dotenv').config();

const db=mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log("DB is connected");
})
.catch((error) => {
  console.error('Error in connection', error);
});

module.exports = db;