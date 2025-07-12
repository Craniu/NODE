import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { travelLog } from './middleware/travel.middleware.js';
import { travelRouter } from './routes/travels.routes.js';
import { userRoutes } from './routes/user.routes.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(travelLog);

app.use(userRoutes);
app.use(travelRouter);



app.listen(PORT, console.log('Server corriendo en el puerto:', PORT));


