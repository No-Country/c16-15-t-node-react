import { Router } from "express";
import { authLogin, signIn, signUp } from "../controllers/users/login.controller.js";
import validateJWT from "../middleware/validateJWT.js";

const router = Router();


router.post('/signup', signUp);
router.get('/signin', signIn);
router.get('/authenticate', validateJWT, authLogin);


const userRoutes = router;

export default userRoutes;