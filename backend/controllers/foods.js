const axios = require('axios');
const { Food } = require("../models");
const express = require("express");
const OAuth = require("oauth");
var API_KEY = process.env.REACT_APP_API_KEY;
var API_SECRET = process.env.REACT_APP_API_SECRET;

module.exports = {
  foodIndex,
  createFood,
  showFood,
  destroyFood,
  updateFood
};

async function foodIndex(req, res) {
  try {
    res.json(await Food.find({}));
  } catch (error) {
    res.status(400).json("hi", { error: error.message });
  }
}

async function createFood(req, res) {
  try {
    // generateIcon(req, res)
    res.status(201).json(await Food.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function showFood(req, res) {
  try {
    res.json(await Food.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function destroyFood(req, res) {
  try {
    res.json(await Food.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function updateFood(req, res) {
  try {
    res.json(await Food.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}
