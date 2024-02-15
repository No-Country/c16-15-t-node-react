import { Router } from 'express';
import { getAll, getOrder } from '../controllers/apis/api_arg.controller.js';

const router = Router();


router.get('/', getAll);
router.get('/:order', getOrder );



const apiArgRoutes = router;
export default apiArgRoutes;
