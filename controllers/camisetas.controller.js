import * as camisetasService from '../services/camisetas.services.js';

export function getCamisetas(req, res) {
  const filtros = req.query
  const resultado = camisetasService.getCamisetas(filtros);
  res.status(200).json(resultado);
}
export function getCamisetasById(req,res){
  const camisa = camisetasService.getCamisetasById(req.params.id)
  res.status(200).json(camisa)
}