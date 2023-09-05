import express, { response } from "express";
import * as dotenv from "dotenv";
import OpenAi from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.route("/", (req, res) => {
  res.status(200).json({ message: "Hello World! from router.js" });
});

export default router;
