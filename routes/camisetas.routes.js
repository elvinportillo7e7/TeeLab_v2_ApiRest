import { Router } from 'express';
import * as camisetasController from '../controllers/camisetas.controller.js';

const router = Router();

router.get("/", camisetasController.getCamisetas);
router.get("/:id", camisetasController.getCamisetasById);
export default router;
