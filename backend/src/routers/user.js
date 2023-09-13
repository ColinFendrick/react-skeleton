const express = require("express");
const router = new express.Router();
const User = require("../models/user");

router.get("/users", async (req, res, next) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/users", async (req, res, next) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({
      _id: req.params.id,
    });
    if (!user) {
      res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
