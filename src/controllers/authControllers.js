const User = require("../models/user");

exports.registerNewUser = (req, res) => {
  User.create(
    {
      firstName: req.body.firstName,
      lastname: req.body.lastname,
      country: req.body.country,
    },
    (err, newUser) => {
      if (err) {
        return res.status(500).json({ err });
      } else {
        return res
          .status(200)
          .json({ message: "registration of newUser Successful" });
      }
    }
  );
};
