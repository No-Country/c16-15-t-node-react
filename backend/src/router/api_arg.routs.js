import { Router } from 'express';
import { getAll, getOrder } from '../controllers/apis/api_arg.controller.js';
import { createEvent } from '../controllers/forms/event_form.controller.js';

const router = Router();


router.get('/', getAll);
router.get('/:id', getOrder );
// router.post('/create-event', createEvent );
router.post('/formulario', createEvent );


const apiArgRoutes = router;
export default apiArgRoutes;
