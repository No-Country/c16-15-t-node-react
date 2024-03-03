import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export default function validateJWT(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({ error: 'No token provided.' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    req.user = decodedToken; // Almacenar la información del usuario en req para uso posterior
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).send({ error: 'Token expired.' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(401).send({ error: 'Invalid token.' });
    } else {
      console.error('Error verifying token:', error);
      return res.status(500).send({ error: 'Internal server error.' });
    }
  }
}
