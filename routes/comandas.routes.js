import { Router } from 'express';
import * as comandasController from '../controllers/comandas.controllers.js';

const router = Router();

router.post("/", comandasController.postComandas);
router.get("/", comandasController.getComandas);
router.get("/:id", comandasController.getComandaById);

export default router;