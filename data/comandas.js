class Cliente{
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}
class Direccion {
  constructor(calle, cp, ciudad) {
    this.calle = calle;
    this.cp = cp;
    this.ciudad = ciudad
  }
}

class Items {
  constructor(Items) {
    this.Items = Items
  }
  addItem(item) {
    this.Items.push(item)
  }
}

export const comandas = [{cliente:Cliente(Cliente.nombre = "Anna",email = "elvin")}];
