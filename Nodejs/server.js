const express = require("express");

let port = 0;

const enviroment = process.argv[2];

if (enviroment.includes("--dev")){
    port = 3000;
} else if(enviroment.includes("--qa")){
    port = 3001;
    }

const app = express();

app.get("/", requestAnimationFrame, (resp) => {
  resp.send("Hello World!");
});

app.get("/admin", requestAnimationFrame, (resp) => {
  resp.send("Hello Admin!");
});

app.listen(3000, () => {
  console.log("Server is running on port: ", port);
  console.log("Argumentos de linea de comando", process.argv);
});

//cambio