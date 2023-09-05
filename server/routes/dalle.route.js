import express from 'express';
import OpenAI from "openai";
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Value of OPENAI_API_KEY: " + process.env.OPENAI_API_KEY });
})


router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: 'b64_json'
    });
    const image_url = response.data.data[0].b64_json;

    res.status(200).json({ photo: image_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
})

export default router;