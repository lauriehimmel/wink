const express = require('express')
const router = express.Router()

router.get("/", async (req,res) => {
  res.status(200).json({message: "animal index route"})
});

router.post("/", async (req,res) => {
  res.status(202).json({message: "animal create route"})
});

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
