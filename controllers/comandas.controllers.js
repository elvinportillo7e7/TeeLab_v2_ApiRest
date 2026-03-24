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
export function getComandaById(req, res) {
    const  id  = req.params;
    const comanda = comandasService.getComandaById(id);
    if (!comanda) {
        return res.status(400).json({ error: "camisetaId inválido" });
    }  
    res.json(comanda);
}