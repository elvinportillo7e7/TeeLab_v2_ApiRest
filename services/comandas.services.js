import { comandas } from "../data/comandas.js";
import { camisetas } from "../data/camisetas.js";

export function postComandas(body) {
    const { cliente, direccion, items } = body;
    validarCliente(cliente);
    validarDireccion(direccion);
    const itemsConPrecios = validarItems(items);

    let totalPedido = 0;
    itemsConPrecios.forEach(item => totalPedido += item.subtotal);

    const nuevaComanda = {
        id: `ORD-${String(comandas.length + 1).padStart(4, '0')}`,
        fecha: new Date().toISOString(),
        estado: "recibida",
        items: itemsConPrecios,
        total: Number(totalPedido.toFixed(2))
    };

    comandas.push(nuevaComanda);
    return nuevaComanda;
}

export function getComandas() {
    return comandas;
}

export function getComandaById(id) {
    if (!id) {
        const err = new Error("Falta el id de la comanda");
        err.status = 400;
        throw err;
    }
    const respuesta = comandas.find(c => c.id === id);
    if (!respuesta) {
        const err = new Error("Comanda Inexistent");
        err.status = 404;
        throw err;
    }
    return respuesta;
}

function validarCliente(cliente) {
    if (!cliente) {
        const err = new Error("Falta el cliente");
        err.status = 400;
        throw err;
    }

    if (!cliente.nombre || cliente.nombre.length < 2) {
        const err = new Error("El nombre tiene que tener al menos 2 caracteres.");
        err.status = 400;
        throw err;
    }

    if (!cliente.email || !cliente.email.includes("@")) {
        const err = new Error("Email inválido.");
        err.status = 400;
        throw err;
    }
}

function validarItems(items) {
    if (!items || !Array.isArray(items) || items.length === 0) {
        const error = new Error('Campo items ha fallado. Debe ser un array no vacío');
        error.status = 400;
        throw error;
    }

    const resultado = [];

    for (const item of items) {
        if (!item.cantidad || item.cantidad < 1) {
            const error = new Error("La cantidad debe ser entero ≥ 1");
            error.status = 400;
            throw error; 
        }

        const camiseta = camisetas.find(c => c.id === item.camisetaId);
        if (!camiseta) {
            const error = new Error(`Camiseta con id ${item.camisetaId} no encontrada`);
            error.status = 404;
            throw error;
        }

        if (camiseta.cantidad < item.cantidad) {
            const error = new Error(`Stock insuficiente para ${camiseta.nombre}.`);
            error.status = 400;
            throw error;
        }

        if (!camiseta.tallas.includes(item.talla)) {
            const error = new Error(`La talla ${item.talla} no existe para ${camiseta.nombre}`);
            error.status = 400;
            throw error;
        }

        if (!camiseta.colores.includes(item.color)) {
            const error = new Error(`El color ${item.color} no existe para ${camiseta.nombre}`);
            error.status = 400;
            throw error;
        }

        camiseta.cantidad -= item.cantidad;

        resultado.push({
            camisetaId: item.camisetaId,
            nombre: camiseta.nombre,
            talla: item.talla,
            color: item.color,
            cantidad: item.cantidad,
            precioUnitario: camiseta.precioBase,
            subtotal: Number((camiseta.precioBase * item.cantidad).toFixed(2))
        });
    }
    return resultado;
}

function validarDireccion(direccion) {
    if (!direccion || !direccion.calle || !direccion.cp || !direccion.ciudad) {
        const error = new Error('Campo dirección incompleto');
        error.status = 400;
        throw error; 
    }
}
