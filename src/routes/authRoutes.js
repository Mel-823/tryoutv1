const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/authControllers");

router.post("/signup", AuthController.registerNewUser);
router.post("/login", AuthController.loginUser);
router.put("/users/:id", AuthController.updateUser);
router.delete("/users/:id", AuthController.deleteUser);

module.exports = router;
