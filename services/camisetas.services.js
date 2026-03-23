import { camisetas } from "../data/camisetas.js";



export function getCamisetas(filtros) {
  let resultado = [...camisetas];

  if (filtros.tallas){resultado = resultado.filter(c =>
    c.tallas.some(talla => talla.toLowerCase() === filtros.talla.toLowerCase())
  )}
  if (filtros.tags) {
    resultado = resultado.filter(c =>
      c.tags.some(tag => tag.toLowerCase() === filtros.tags.toLowerCase())
    );
  }
  if (filtros.colores){resultado = resultado.filter(c =>
    c.colores.some(color => color.toLowerCase() === filtros.colores.toLowerCase())
  )}

  if (filtros.q) {
    const busqueda = filtros.q.toLowerCase();
    resultado = resultado.filter(c =>
      c.nombre.toLowerCase().includes(busqueda) || c.descripcion.toLowerCase().includes(busqueda)
    );
  }

  if (filtros.sort) {
    switch (filtros.sort) {
      case 'precio_asc':
        resultado.sort((a, b) => a.precioBase - b.precioBase);
        break;
      case 'precio_desc':
        resultado.sort((a, b) => b.precioBase - a.precioBase);
        break;
      case 'nombre_asc':
        resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'nombre_desc':
        resultado.sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
      default:
        break;
    }
  }



  return resultado;
}

export function getCamisetasById(id){
   return camisetas.find(c => c.id === id);
}