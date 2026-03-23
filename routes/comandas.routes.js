import { Router } from 'express';
import * as comandasController from '../controllers/comandas.controllers.js';

const router = Router();

router.post("/", comandasController.postComandas);
router.get("/", comandasController.getComandas);


export default router;