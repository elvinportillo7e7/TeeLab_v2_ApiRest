import { camisetas } from "../data/camisetas.js";


// Función para obtener todas las camisetas

export function getCamisetas(filtros) {
  let resultado = [...camisetas];
  const opcionesValidas = ['precio_asc', 'precio_desc', 'nombre_asc', 'nombre_desc'];

  if (filtros.sort && !opcionesValidas.includes(filtros.sort)) {
    const error = new Error();
    error.status = 400;
    error.message = `Sort inválido. Opciones válidas: ${opcionesValidas.join(', ')}`;
    throw error;
  }

  if (filtros.talla) {
    resultado = resultado.filter(c =>
      c.tallas.some(t => t.toLowerCase() === filtros.talla.toLowerCase())
    );
  }
  if (filtros.colores) {
    resultado = resultado.filter(c =>
      c.colores.some(col => col.toLowerCase() === filtros.colores.toLowerCase())
    );
  }
  if (filtros.tags) {
    resultado = resultado.filter(c =>
      c.tags.some(tag => tag.toLowerCase() === filtros.tags.toLowerCase())
    );
  }
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

export function getCamisetaById(id) {
  const restultado = camisetas
  if (!camisetas.some(c => c.id.toLowerCase() === id.toLowerCase())) {
    const error = new Error();
    error.status = 404;
    error.message = `Camiseta no encontrada`;
    throw error;
  }
  return camisetas.find(c => c.id.toLowerCase() === id.toLowerCase());
}

