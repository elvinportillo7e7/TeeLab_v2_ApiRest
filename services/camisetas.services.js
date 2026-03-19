import { camisetas } from "../data/camisetas.js";


// Valida campos mínimos camisetas
function validateStudent(obj) {
 if (!obj || typeof obj !== "object") return "Body inválido";
 if (!obj.id || !obj.nombre || !obj.curso) return "Faltan campos: id, nombre, curso";
 else return null;
}
// Comprueba si el id de camisetas ya existe
const existsId = (id) => camisetas.some(s => s.id === id);
export function getAll() {
 return camisetas;
}
export function getById(id) {
 return camisetas.find(s => s.id === id);
}
export function create(alumnoNew) {
 const validationMsg = validateStudent(alumnoNew);
 if (validationMsg) return { error: validationMsg };

 if (existsId(alumnoNew.id)) return { error: "id ya existe", status: 409 };

 camisetas.push({ id: alumnoNew.id, nombre: alumnoNew.nombre, curso: alumnoNew.curso });
 return { data: alumnoNew };
}

export function update(id, payload) {
 const idx = camisetas.findIndex(s => s.id === id);
 if (idx === -1) return null;

 if (payload && typeof payload === "object") {
   if (payload.nombre !== undefined) camisetas[idx].nombre = payload.nombre;
   if (payload.curso !== undefined) camisetas[idx].curso = payload.curso;
 }

 return camisetas[idx];
}

export function removeStudent(id) {
  removeNotas(id)
 const before = camisetas.length;
 const filtered = camisetas.filter(s => s.id !== id);

 if (filtered.length === before) return false;

 camisetas.length = 0;
 camisetas.push(...filtered);
 return true;
}

