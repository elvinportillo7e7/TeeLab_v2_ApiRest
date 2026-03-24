# TeeLab_v2_ApiRest

Se puede consultar el catálogo con filtros y crear pedidos validando stock y datos del cliente.

## Instalación y ejecución

1. Instalar las dependencias necesarias:
```bash
brew install node
```

```bash
npm install express
```

```bash
npm install cors
```
2. Arrancar el servidor en modo desarrollo:
```bash
npm start
```
* El servidor corre por defecto en http://localhost:3000*

## Endpoints de la API

### Camisetas
* **GET /camisetas**: Lista de todas las camisas.
    * Query params: `talla`, `color`, `tag`, `q` (búsqueda en nombre/descripción).
    * Ordenación: `sort=precio_asc`, `sort=precio_desc`, `sort=nombre_asc`, `sort=nombre_desc`.
* **GET /camisetas/:id**: Detalle de una camiseta específica. Devuelve 404 si no existe.

### Comandas
* **POST /comandas**: Crea un nuevo pedido.
    * Valida: Nombre cliente (mín. 2), email (@), mira si hay items items y los valida, stock, talla y color.
    * Genera un ID (ORD-0001) y calcula el ticket final con subtotales y total.
    * Devuelve 201 en caso de éxito.
* **GET /comandas**: Lista de todas las comandas hechas.
* **GET /comandas/:id**: Detalles de un ticket específico por su ID.

## Ejemplo de Body para POST /comandas
```json
{
  "cliente": {
    "nombre": "Elvin",
    "email": "elvin@mail.com"
  },
  "direccion": {
    "calle": "Calle Falsa 123",
    "cp": "08001",
    "ciudad": "Barcelona"
  },
  "items": [
    {
      "camisetaId": "TSH01",
      "talla": "M",
      "color": "negro",
      "cantidad": 2
    }
  ]
}
