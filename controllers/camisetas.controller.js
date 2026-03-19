import * as camisetasService from '../services/camisetas.services.js';

export function getAll(req, res) {
 res.json(camisetasService.getAll());
}
export function getById(req, res) {
 const student = camisetasService.getById(req.params.id);

 if (!student) return res.status(404).json({ message: "Not Found" });
 res.json(student);
}

export function create(req, res) {
 const result = camisetasService.create(req.body);

 if (result.error) {
   const status = result.status || 400;
   return res.status(status).json({ message: result.error });
 }

 res.status(201).json({ message: "Created", student: result.data });
}

export function update(req, res) {
 const updated = camisetasService.update(req.params.id, req.body);

 if (!updated) return res.status(404).json({ message: "Not Found" });
 res.json(updated);
}

export function remove(req, res) {
 const deleted = camisetasService.removeStudent(req.params.id);

 if (!deleted) return res.status(404).json({ message: "Not Found" });
 res.sendStatus(204);
}
