import { config } from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import  morgan from 'morgan';
import express from 'express';
import apiArgRoutes from './router/api_arg.routs.js';
import connectDB from './db.js';
import { userModel } from './models/userModel.js';
import userRoutes from './router/user.routs.js';
config({ path: process.ENV });

const port = process.env.PORT ?? 3000;
const app = express();
const __dirname = fileURLToPath( import.meta.url );
const pathToFrontEnd = path.join( __dirname, '..', '..', '..', 'frontend', 'dist' );


// sets
console.log( path.join( 'Path to fronend ===> ', pathToFrontEnd ) );

await connectDB();
// await userModel.deleteMany({ email: 'miemaildeprueba@yahoo.com' })
console.log(await userModel.find({}).exec())

// Middlewares
app.use(morgan('dev'));
app.use(express.static( pathToFrontEnd ));
app.use(express.json());

// routes
app.use('/', userRoutes);
app.use('/api', apiArgRoutes);

// Error handler
app.use('/error', (req, res, next, error) => {
  console.error(error);
  res.json(error.toString());
})


app.listen( port, () => {
  console.log(`Escuchando en http://localhost:${ port }`);
} )
 