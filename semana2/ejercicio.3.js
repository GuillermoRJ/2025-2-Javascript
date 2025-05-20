const { ask } = require("../helpers/input");

async function main() {
    const nombres = ["Ana", "adriana", "arturo", "jose", "manuel", "Roberto", "Marisol", "Sol",];

    for (let i = 0; i <nombres.length; i++){
        if (nombres[i].length >= 5){
            console.log(`${nombres[i]} tiene 5 caracteres o más.`);
        } else{
            console.log(`${nombres[i]} tiene menos de 5 caracteres.`);

        }
    }

    const nombres2 = ["Oscar", "Ana", "Luis", "Eduardo", "Isabel", "María", "Úrsula"];
    const vocales = ["a", "e", "i", "o", "u"];

    for (let a = 0; a < nombres2.length; a++){
        const primeraLetra = nombres2[a][1].toLowerCase();
        for (let b = 0; b < vocales.length; b++) {
            if (primeraLetra === vocales[b]){
                console.log(vocales[b]);
            }
        }
    }

    const palabraAlReves = await ask("Escribe una palabra: ");
    let resultado = "";
    for (let c = palabraAlReves.length - 1; c >= 0; c--){
        //forma compacta de escribir "resultado = resultado + palabraAlReves[c];"  
        resultado += palabraAlReves[c]; 
    }
    console.log(resultado)    
}
main();