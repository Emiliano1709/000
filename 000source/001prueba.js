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