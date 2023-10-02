const express = require('express')
const router = express.Router()

const animalCtrl = require('../controllers/animals')

router.get("/", animalCtrl.index);
router.post("/", animalCtrl.create)
router.get("/:id", animalCtrl.show)
router.delete("/:id", animalCtrl.destroy)
router.put("/:id", animalCtrl.update)
router.get("/foodid", animalCtrl.findAnimalbyFoodId)





module.exports = router
