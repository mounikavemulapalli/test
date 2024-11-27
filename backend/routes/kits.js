import express from "express";
const router = express.Router();
import Kit from "../models/kit.js";

router.get("/", async (req, res) => {
  try {
    const data = await Kit.find();
    res.json(data);
  } catch (err) {
    res.send("Error");
  }
});

router.get("/byMonth", async (req, res) => {
  const month = req.query.months;

  if (!month) {
    return res.status(400).json({ error: "Please provide a valid months" });
  }

  try {
    const data = await Kit.find({ months: month });

    if (data.length === 0) {
      return res
        .status(404)
        .json({ message: "No Kits found for the given months" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error, please try again later" });
  }
});

router.post("/", async (req, res) => {
  const babyKit = new Kit({
    name: req.body.name,
    about: req.body.about,
    feature: req.body.feature,
    months: req.body.months,
  });
  try {
    const data = await babyKit.save();
    res.json(data);
  } catch (err) {
    res.send("Error");
  }
});

export default router;
