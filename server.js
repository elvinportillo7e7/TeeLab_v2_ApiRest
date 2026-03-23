import express from 'express';
import camisetasRouter from './routes/camisetas.routes.js';
import  comandasRouter  from './routes/comandas.routes.js';

const app = express();
const PORT = 3000;
// Middlewares globales
app.use(express.json());

// Log mínimo
app.use((req, res, next) => {
 console.log(req.method, req.url);
 next();
});

// Ruta info camisetas
app.use('/camisetas', camisetasRouter);
app.use('/comandas', comandasRouter); 

// Middleware de errores
app.use((err, req, res, next) => {
 console.error(err.message);
 res.status(500).json({ message: "Error interno" });
});

app.listen(PORT, () => {
 console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
