const axios = require('axios');
const { Activity } = require("../models");
var API_KEY = process.env.REACT_APP_API_KEY;
var API_SECRET = process.env.REACT_APP_API_SECRET;

module.exports = {
  activityIndex,
  createActivity,
  showActivity,
  destroyActivity,
  updateActivity
};

async function activityIndex(req, res) {
  try {
    res.json(await Activity.find({}));
  } catch (error) {
    res.status(400).json("hi", { error: error.message });
  }
}

async function createActivity(req, res) {
  try {
    res.status(201).json(await Activity.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function showActivity(req, res) {
  try {
    res.json(await Activity.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function destroyActivity(req, res) {
  try {
    res.json(await Activity.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function updateActivity(req, res) {
  try {
    res.json(await Activity.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}
