const express = require('express')
const router = express.Router()

const foodCtrl = require('../controllers/foods')

router.get("/", foodCtrl.foodIndex);
// router.get("/icon", foodCtrl.generateIcon);
router.get("/:id", foodCtrl.showFood);
router.post("/", foodCtrl.createFood);
router.get("/:id", foodCtrl.destroyFood);
router.put("/:id", foodCtrl.updateFood);


module.exports = router
