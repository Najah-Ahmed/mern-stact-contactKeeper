const mongoos = require('mongoose');

const config = require('config');
const db = config.get('mongoURL');

/*

* const connectDB = () => {
  *mongoos
   * .connect(db, {
    *  useNewUrlParser: true,
     * useCreateIndex: true,
      *useFindAndModify: false,
      *useUnifiedTopology: true
    *})
    *.then(() => console.log('mongoDB connect'))
    *.catch((err) => {
     * console.error(err.message);
     * process.exit(1);
    *});
*};
*/
//* asyn await connect data
const connectDB = async () => {
  try {
    await mongoos.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('mongoDB connected ...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
