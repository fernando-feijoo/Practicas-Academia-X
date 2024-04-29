class Vehiculo {
  constructor(ruedas) {
    this.ruedas = ruedas;
  }

  tipoVehiculo() {
    console.log("Este es el vehiculo");
  }
}

class Carro extends Vehiculo {
  constructor(ruedas, pasajeros) {
    super(ruedas);
    this.pasajeros = pasajeros;
  }

  tipoVehiculo() {
    console.log(
      `Este vechículo tiene ${this.ruedas} ruedas. Puede transportar ${this.pasajeros} pasajeros.`
    );
  }
}

class Bicicleta extends Vehiculo {
  constructor(ruedas) {
    super(ruedas);
  }

  tipoVehiculo() {
    console.log(
      `Este vechículo tiene ${this.ruedas} ruedas. Es una bicicleta de tipo Montaña.`
    );
  }
}

const vehiculoUno = new Carro(4, 5);
const vehiculoDos = new Bicicleta(2);

vehiculoUno.tipoVehiculo();
vehiculoDos.tipoVehiculo();

