import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Hablame de los UPS y no break en México",
});
        
document.writeln(response.output_text);
console.log(response.output_text);

//-----------------------------------------

function sumar(a,b){
    return a*b;
}

let lista = [1,2,3,4,5];

for(elemento of lista){
    let xd = elemento;
    document.writeln(elemento + "<br>");
}

for(elemento of lista){
    let suma = sumar(elemento,5);
    document.writeln(suma + "<br>");
}
console.log("Si esto está en la consola es porque todo salió bien");