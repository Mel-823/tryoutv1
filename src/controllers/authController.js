const User = require("../models/user");

exports.registerNewUser = (req, res) => {
  User.findOne({ email: req.body.email }, (err, existingEmail) => {
    if (err) {
      return res.status(500).json({ err });
    }
    if (existingEmail) {
      return res.status(200).json({ message: "A user with this email exist" });
    }
  });
  User.create(
    {
      firstName: req.body.firstName,
      lastname: req.body.lastname,
      country: req.body.country,
      email: req.body.email,
    },
    (err, newUser) => {
      if (err) {
        return res.status(500).json({ err });
      }
      if (newUser) {
        return res
          .status(200)
          .json({ message: "registration of newUser Successful" });
      }
    }
  );
};
