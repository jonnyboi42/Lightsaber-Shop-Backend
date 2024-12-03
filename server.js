import express from 'express';
import cors from 'cors';
import path from 'path';
import { lightsabers } from './routes/sabers.js'


const app = express();
app.use(cors()); // Enables CORS for all routes

// Serve static files from the 'public' directory (adjust if your images are elsewhere)
app.use('/assets', express.static(path.join(process.cwd(), 'src/assets')));



//Endpoints
app.get('/sabers', (req,res)=>{
    res.json(lightsabers)
})

app.listen(3000, ()=>{
    console.log('Sever Listening on port 3000')
})