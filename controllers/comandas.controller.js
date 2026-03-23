import * as camisetasService from '../services/comandas.services.js';

export function crearComanda(req, res) {
  const filtros = req.body
  const resultado = camisetasService.crearComanda(filtros);
  res.status(200).json(resultado);
}
