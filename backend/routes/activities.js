const express = require('express')
const router = express.Router()

const activityCtrl = require('../controllers/activities')

router.get("/", activityCtrl.foodIndex);
router.get("/:id", activityCtrl.showActivity);
router.post("/", activityCtrl.createActivity);
router.delete("/:id", activityCtrl.destroyActivity);
router.put("/:id", activityCtrl.updateActivity);


module.exports = router
