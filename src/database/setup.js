const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/crudapp";

module.exports = function () {
  mongoose.connect(
    connectionString,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Database Connected Successfully");
      }
    }
  );
};
