import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { router } from './routes/travels.routes.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT, console.log('Server corriendo en el puerto:', PORT));
