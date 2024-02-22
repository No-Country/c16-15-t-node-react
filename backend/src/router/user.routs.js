import { Router } from "express";
import { signIn, signUp } from "../controllers/users/login.controller.js";

const router = Router();


router.post('/signup', signUp);
router.get('/signin', signIn);


const userRoutes = router;

export default userRoutes;