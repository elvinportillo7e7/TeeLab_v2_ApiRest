import { comandas } from "../data/comandas.js";
import { camisetas } from "../data/camisetas.js";

export function postComandas(body) {
    const { cliente, direccion, items } = body;
    validarCliente(cliente)
    validarDireccion(direccion)
    validarItems(items)
    const nuevaComanda = body;
    comandas.push(nuevaComanda);
    return comandas;
}

export function getComandas() {
    return comandas;
}

function validarCliente(cliente) {
    if (!cliente) {
        const err = new Error("Falta el cliente");
        err.status = 400;
        throw err;
    }

    if (!cliente.nombre || cliente.nombre.length < 2) {
        const err = new Error("El nombre debe tener al menos 2 caracteres. y no puede estar vacio");
        err.status = 400;
        throw err;
    }

    if (!cliente.email || !cliente.email.includes("@")) {
        const err = new Error("Correo electronico invalido. Debe tener almenos un '@'. y no puede estar vacio");
        err.status = 400;
        throw err;
    }
}
function validarItems(items) {
    if (!items || !Array.isArray(items) || items.length === 0) {
        const error = new Error('Campo items ha fallado. Debe ser un array no vacio');
        error.status = 400;
        throw error;
    }
    for (const item of items) {
        const camiseta = camisetas.find(c => c.id === item.camisetaId);
        if (!camiseta) {
            const error = new Error(`Camiseta con id ${item.camisetaId} no encontrada`);
            error.status = 404;
            throw error;
        }
    }
}

function validarDireccion(direccion) {
    if (!direccion || !direccion.calle || !direccion.cp || !direccion.ciudad) {
        const error = new Error('Campo direccion ha fallado. Debe contener calle, codigo postal y ciudad');
        error.status = 400;
        throw error;
    }
}
