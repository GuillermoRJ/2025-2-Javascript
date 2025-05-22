// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require("../helpers/input");
async function main() {
  let opcion = "";
  let alumnos = [
    nombre="",
    edad = 0,
    calificacion = 0
   ];

  while (opcion !== "4") {
    opcion = await ask(
      "¿Qué deseas hacer?\n1. Agregar alumno \n2. Quitar un alumno \n3. Lista de alumnos \n4. Salir"
    );

    if (opcion === "1") {
      let alumnoNuevo = await ask(
        "Ingresa el nombre: "
      );
      alumnos.push(alumnoNuevo.nombre);
      console.log(`Nuevo alumno: ${alumnoNuevo}`);
      console.log(`Alumnos actuales: ${alumnos}`);

    } else if (opcion === "2") {
      if (alumnos.length === 0) {
        console.log("No hay alumnos disponibles");
        continue;
      } else {
        let alumnoAEliminar = await ask("¿Qué alumno quieres eliminar?");
        let index = alumnos.indexOf(alumnoAEliminar);

        if (index !== -1) {
          alumnos.splice(index, 1);
          console.log(`${alumnoAEliminar} ha sido eliminado.`);
        }
        console.log(`Alumnos actuales: ${alumnos}`);
      }

    } else if (opcion === "3") {
      for (let i = 0; i < alumnos.length; i++) {
        for (let j = 0; j < alumnos[i].length; j++) {
          console.log(`Alumno ${i+1}: ${alumnos[i] [j]}`);
        }
      }

    } else if (opcion === "4") {
      console.log("Gracias por usar el programa, tus alumnos fueron: ", alumnos);
    } else {
      console.log("Opción no permitida");
    }
  }
}
main();
