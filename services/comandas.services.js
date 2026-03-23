import { comandas } from "../data/comandas.js";


export function crearComanda() {
    const resultado = comandas
    comprobarDatos(datos)
    return resultado;
}

export function validarDatos(cliente, direccion, items) {
    const respuesta = true
    if (cliente.nombre === null || cliente.email === null) { respuesta = false }
    if (direccion.calle === null || direccion.cp === null || direccion.ciudad === null) { respuesta = false }

        items => {
            item.camisetaId === null || item.talla === null|| item.color === null || item.cantidad == null
        }
    
}