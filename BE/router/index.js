const express = require("express");
let router = express.Router();
const controllerKomentar= require("../controller/komentar");
const controllerProfile = require("../controller/profile");
router.get("/komentar", controllerKomentar.komentar);
router.get("/profile", controllerProfile.profile);

module.exports = { router };