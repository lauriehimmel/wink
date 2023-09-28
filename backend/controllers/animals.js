const { Animal } = require("../models");
const express = require("express");

module.exports = {
  index,
  create,
  show,
  destroy,
  update,
};

async function index(req, res) {
  try {
    res.json(await Animal.find());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    res.status(201).json(await Animal.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    res.json(await Animal.findById(req.params.id).populate("foods"));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function destroy(req, res) {
  try {
    res.json(await Animal.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    console.log('req.body', req.body)
    res.json(await Animal.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

// async function update(req, res) {
//   try {
//     console.log("req.body", req.body);
//     const result = await Animal.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: { name: req.body.name },
//         $set: { type: req.body.type },
//         $push: { foods: req.body.foods },
//       },
//       { new: true}
//     );
//     console.log("result", result);
//     res.json(result);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// }
