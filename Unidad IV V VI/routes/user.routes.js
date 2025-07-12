import {Router } from 'express';
import { registerUser } from '../src/controllers/user.controller.js';
import {loginUser} from '../src/controllers/auth.controller.js';

export const userRoutes = Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUser);



