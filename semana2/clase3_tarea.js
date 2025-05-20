const { ask } = require("../helpers/input");

async function main() {
   let opcion = "";
  let edad = [];

  while (opcion !== "2") {
    opcion = await ask("¿Qué deseas hacer? \\n1. Agregar una edad \\n2. Salir \\n3. Salir");

    if (opcion === "1") {
      let edadNueva = await ask("¿Ingresa la edad que quieres agregar: ");
      edad.push(edadNueva);
      console.log(`Edad agregada: ${edadNueva}`);
      console.log(`Edades actuales: ${edad}`);

    } else if (opcion === "2") {
        for (let i = 0; i <edad.length; i++){
        if (edad[i].length >= 18){
            console.log(`${edad[i]} es mayor de edad`);
        }
    }

    } else if (opcion === "3") {
        console.log('Gracias por usar el programa, tus edades fueron: ',edad)
    } else {
      console.log("Opción no permitida");
    }
  }
}
main();