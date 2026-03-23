import * as camisetasService from '../services/comandas.services.js';

export function crearComanda(req, res) {
  const body = req.body
  const { cliente, direccion, items } = req.body;
  const resultado = camisetasService.validarDatos(cliente,direccion,items);

  res.status(200).json(resultado);
}
