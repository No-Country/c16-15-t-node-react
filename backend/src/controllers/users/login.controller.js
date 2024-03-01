import { decrypt, encrypt } from "../../utils/bcrypt.js";
import { userModel } from "../../models/userModel.js";
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();


export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password) {
      return res.status(400).json({ ok: false, message: 'Password is required' });
    }
    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ ok: false, message: 'Invalid email format' });
    }
    const emailExists = await userModel.exists({ email });
    if (emailExists) {
      return res.status(409).json({ ok: false, message: 'Email already exists' });
    }
    const encryptedPass = await encrypt(password);
    const user = new userModel({ email, password: encryptedPass, role: 'user' });
    await user.save();
    return res.status(201).json({ ok: true, message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: 'Internal server error' });
  }
}

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  // Validación de campos requeridos
  if (!email || !password) {
    return res.status(400).json({ ok: false, message: 'Email and password are required' });
  }
  try {
    const user = await userModel.findOne({ email }).exec();
    if (!user) {
      return res.status(401).json({ ok: false, message: 'Invalid email or password' });
    }
    const isValidPassword = await decrypt(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ ok: false, message: 'Invalid email or password' });
    }
    // Generar token JWT
    const token = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '1h' });
    // Establecer la cookie con el token
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // La cookie expira en 1 hora
    return res.status(200).json({ ok: true, message: 'Login successful', userEmail: user.email });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: 'Internal server error' });
  }
}

export const authLogin = async(req, res) => {
  res.status(200).send('Authentication has been succesful');
}