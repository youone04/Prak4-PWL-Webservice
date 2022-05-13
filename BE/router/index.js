const express = require("express");
let router = express.Router();
const controllerKomentar= require("../controller/komentar");
const controllerProfile = require("../controller/profile");
const controllerKeahlian = require("../controller/keahlian");
const controllerProject = require("../controller/project");


router.get("/komentar/:id", controllerKomentar.komentar);
router.post("/komentar", controllerKomentar.addKomentar);
router.get("/profile", controllerProfile.profile);
router.get("/keahlian", controllerKeahlian.keahlian);
router.get("/project", controllerProject.project);


module.exports = { router };