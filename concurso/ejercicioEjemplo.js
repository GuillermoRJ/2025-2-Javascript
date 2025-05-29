const fs = require("fs");
//const { ask } = require('/..alksjdlasdlkasjdl')

async function main() {
  //const nombre = await ask("Cual es tu nombre?");
  const nombre = fs.readFileSync(0, "utf8").trim();
  console.log("Hola " + nombre);
}
main();