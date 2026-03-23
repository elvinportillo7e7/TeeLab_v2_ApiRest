import * as comandasService from '../services/comandas.services.js';

export function postComandas(req, res) {
    const objeto = req.body;
    const comandas = comandasService.postComandas(objeto);
    res.json(comandas);
}
export function getComandas(req, res) {
    const objeto = req.body;
    const comandas = comandasService.getComandas(objeto);
    res.json(comandas);
}