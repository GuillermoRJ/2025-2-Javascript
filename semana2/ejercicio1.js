

function diffDays(actualDate, birthDate){
    const diff = actualDate - birthDate;
    const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));
    return edadEnDias;
}

async function main() {
    const futureDate = new Date (await ask("¿Hasta cuando quieres imprimir la fecha? Formato: (yyyy-mm-dd)"))
    let diff = diffDays (newDate)




    const personas = []
    console.log("Recorrer con for");
    for (let i = personas.length - 1; i>= 0; i--){
        personas.forEach((persona) => saludar(persona))
    }
}

