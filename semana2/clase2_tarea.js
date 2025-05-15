const { ask } = require("../helpers/input");
async function main() {
  let opcion = "";
  let frutas = [];

  while (opcion !== "3") {
    opcion = await ask(
      "¿Qué deseas hacer?\\n1. Agregar una fruta\\n2. Quitar una fruta\\n3. Lista de las frutas. \\n4.Salir"
    );

    if (opcion === "1") {
      let frutaNueva = await ask(
        "¿Ingresa el nombre de la fruta que quieres agregar: "
      );
      frutas.push(frutaNueva);
      console.log(`Fruta agregada: ${frutaNueva}`);
      console.log(`Frutas actuales: ${frutas}`);
    } else if (opcion === "2") {
      if (frutas.length === 0) {
        console.log("No hay frutas disponibles");
        continue;
      } else {
        let frutaAEliminar = await ask("¿Qué fruta quieres eliminar?");
        let index = frutas.indexOf(frutaAEliminar);

        if (index !== -1) {
          frutas.splice(index, 1);
          console.log(`${frutaAEliminar} ha sido eliminada.`);
        }
        console.log(`Frutas actuales: ${frutas}`);
      }
    } else if (opcion === "3") {
      for (let i = 0; i < frutas.length; i++) {
        for (let j = 0; j < frutas[i].length; j++) {
          console.log(`Fruta ${i+1}: ${frutas[i] [j]}`);
        }
      }
    } else if (opcion === "4") {
      console.log("Gracias por usar el programa, tus frutas fueron: ", frutas);
    } else {
      console.log("Opción no permitida");
    }
  }
}
main();
