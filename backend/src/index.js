import { config } from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import  morgan from 'morgan';
import express from 'express';
import apiArgRoutes from './router/api_arg.routs.js';

config({ path: process.ENV });

const port = process.env.PORT ?? 3000;
const app = express();
const __dirname = fileURLToPath( import.meta.url );
const pathToFrontEnd = path.join( __dirname, '..', '..', '..', 'frontend', 'dist' );


// sets
console.log( path.join( 'Path to fronend ===> ', pathToFrontEnd ) );

// Middlewares
app.use(morgan('dev'));
app.use(express.static( pathToFrontEnd ))

app.use('/api', apiArgRoutes);




app.listen( port, () => {
  console.log(`Escuchando en http://localhost:${ port }`);
} )
 