const express = require("express");
const router = express.Router();

const ControllerMyApplications = require("../controllers/controllerMyApplications");

router.post("/", ControllerMyApplications.addMyApplications);
router.get('/', ControllerMyApplications.allMyApplications)
router.delete('/:id', ControllerMyApplications.deleteMyApplications)


module.exports = router;