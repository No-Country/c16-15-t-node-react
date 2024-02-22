import { config } from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import  morgan from 'morgan';
import express from 'express';
import apiArgRoutes from './router/api_arg.routs.js';
import connectDB from './db.js';
import userRoutes from './router/user_routes.js';
config({ path: process.ENV });

const port = process.env.PORT ?? 3000;
const app = express();
const __dirname = fileURLToPath( import.meta.url );
const pathToFrontEnd = path.join( __dirname, '..', '..', '..', 'frontend', 'dist' );


// sets
console.log( path.join( 'Path to fronend ===> ', pathToFrontEnd ) );

await connectDB();

// Middlewares
app.use(morgan('dev'));
app.use(express.static( pathToFrontEnd ));
app.use(express.json());

// routes
app.use('/', userRoutes);
app.use('/api', apiArgRoutes);

// Catch error 400 bad request
app.use((req, res) => {
  // res.status(400).json({message: 'Bad Request, URL path malformed'})
  res.status(400).send(`
  <h1>Error 400</h1>
  <p>Bad Request, URL path malformed</p>
  `)
})



app.listen( port, () => {
  console.log(`Escuchando en http://localhost:${ port }`);
} )
 