 import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors'

dotenv.config()

const app = express();

import dalleRoute from "./routes/dalle.route.js"

app.use(cors());
app.use(express.json({limit : "50mb"}));

app.use('/api/vi/dalle', dalleRoute)

app.get('/', (req, res) => { 
    res.status(200).json({message : 'Hello World!'})
 })

 app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
 })