const { Animals } = require("../models/Animal");
const express = require('express')

module.exports = {
  index,
  create,
  show
}

async function index(req,res,next) {
	try { 
    res.json(await Animals.find());
  } catch (error) {
    res.status(400).json(error);
  }
};

async function create(req,res,next) {
  try {
    res.json(await Animals.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

async function show(req,res,next) {
  try {
      res.json(await Animals.findById(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
};