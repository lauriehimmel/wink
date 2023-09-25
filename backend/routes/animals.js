const express = require('express');
const router = express.Router();

const animalCtrl = require('../controllers/animals');

router.get('/', animalCtrl.index);
router.get('/', animalCtrl.create)


router.get("/:id", (req, res) => {
	res.status(200).json({message: "people show route: " + req.params.id })
});

router.delete("/:id", (req, res) => {
	res.status(200).json({message: "animal delete route: " + req.params.id })
});

router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "animal update route: " + req.params.id })
});





module.exports = router
