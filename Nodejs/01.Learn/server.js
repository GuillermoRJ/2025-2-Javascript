const express = require("express");
const app = express();

let port = 3000;

function codificar() {
  const reemplazos = {
    a: "4",
    e: "3",
    i: "2",
    o: "1",
    u: "_",
  };

  const invertido = mensaje.split("").reverse().join("");
  const convertido = invertido.replace(/[aeiou]/gi,(letra) => reemplazos[letra.toLowerCase()] || letra
  );
  const caracteresExtra = "!@#$%&/?";
  const extra1 =
    caracteresExtra[Math.floor(Math.random() * caracteresExtra.length)];
  const extra2 =
    caracteresExtra[Math.floor(Math.random() * caracteresExtra.length)];
  return convertido + extra1 + extra2;
}

function generatePassword() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const limiteCaracteres = 6;

  let password = "";
  for (let i = 0; i < limiteCaracteres; i++) {
    //Math.floor hace que se pueda escoger un número entero entre 2 parámetros
    let random = Math.floor(Math.random() * caracteres.length);
    // es igual a password = password + random
    password = password + caracteres[random];
    console.log(random);
    console.log(password);
  }
  return password;
}

app.get("/", (req, res) => {
  res.send("Hola!");
});

app.get("/home", (req, res) => {
  res.send("Hola desde Home!");
});

app.get("/password", (req, res) => {
  res.send(generatePassword());
});

app.listen(port, () => {
  console.log("Servidor Iniciado");
});

app.get("/enigma", (req, res) => {
  console.log(req.query.mensaje);
  res.send(generatePassword());
});
