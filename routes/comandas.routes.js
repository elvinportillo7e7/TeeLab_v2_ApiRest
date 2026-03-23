import { Router } from 'express';
import * as camisetasController from '../controllers/comandas.controller.js';

const router = Router();

router.post("/comandas", camisetasController.getCamisetas);

export default router;
