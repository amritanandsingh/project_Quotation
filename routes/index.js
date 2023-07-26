const express = require("express");
const router = express.Router();


const userController = require("../controller/user");

// signup api
router.get("/",userController.test);
router.post("/signup", userController.signUp);
router.get("/singin",userController.signIn);

module.exports = router;