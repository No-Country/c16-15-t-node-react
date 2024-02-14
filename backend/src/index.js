import { config } from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import  morgan from 'morgan';
import express from 'express';
import apiArgRoutes from './router/api_arg.routs.js';

config({ path: process.ENV });

const port = process.env.PORT;
const app = express();


// Middlewares
app.use(morgan('dev'));

app.use('/api', apiArgRoutes);




app.listen( port, () => {
  console.log(`Escuchando en http://localhost:${ port }`);
} )
 