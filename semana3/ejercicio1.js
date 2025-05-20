const { ask } = require("../helpers/input");

async function main() {
  /* const personas = [
    {
      nombre: "Guillermo",
      edad: 19,
      profesion: "Community Manager",
      hobbies: ["Musica", "Videojuegos", "Cocinar"],
      birthDate: "2006-05-10",
      saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}`);
      },
    },
    {
      nombre: "Arturo",
      edad: 19,
      profesion: "Community Manager",
      hobbies: ["Musica", "Videojuegos", "Cocinar"],
      birthDate: "2006-05-10",
      saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}`);
      },
    },
    {
      nombre: "Pato",
      edad: 19,
      profesion: "Community Manager",
      hobbies: ["Musica", "Videojuegos", "Cocinar"],
      birthDate: "2006-05-10",
      saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}`);
      },
    },
  ];
  
  console.log(personas);
*/
      
    const alumno1 = { 
    nombre: "Guillermo",
    matricula: "UP240322",
    promedio: 75,
    edad: 19,
    mayorDeEdad: false,
    mostrarInfo: function () {
        console.log(`Nombre: ${this.nombre}| Matrícula: ${this.matricula}| Promedio: ${this.promedio}| Edad: ${this.edad}`)
        if (this.edad >= 18){
            console.log("El alumno es mayor de edad")
        }
     },
    }

    const alumno2 = { 
    nombre: "Guillermo",
    matricula: "UP240322",
    promedio: 75,
    edad: 19,
    mayorDeEdad: false,
    mostrarInfo: function () {
        console.log(`Nombre: ${this.nombre}| Matrícula: ${this.matricula}| Promedio: ${this.promedio}| Edad: ${this.edad}`)
        if (this.edad >= 18){
            console.log("El alumno es mayor de edad")
        }
     },
    }

    const alumno3 = { 
    nombre: "Guillermo",
    matricula: "UP240322",
    promedio: 75,
    edad: 19,
    mayorDeEdad: false,
    mostrarInfo: function () {
        console.log(`Nombre: ${this.nombre} | Matrícula: ${this.matricula} | Promedio: ${this.promedio} | Edad: ${this.edad} | Es mayor de edad: ${this.mayorDeEdad}`)
        if (this.edad >= 18){
            console.log("El alumno es mayor de edad")
        }else{
            console.log("El alumno es menor de edad")
        }
     },
     setMayorEdad: function() {
        if (this.edad >= 18){
            this.mayorDeEdad = true;
        }else{
            this.mayorDeEdad = false;
        }
     }
    }
    const alumnos = [alumno1,alumno2,alumno3];
    for (let i = 0; i<alumnos.lenght; i++){
        alimnos[i].mostrarInfo;
    }

}main();