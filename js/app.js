
for(let i = 1; i<=5; i++ ){
    let ingresarProductos = prompt('Ingresá 5 productos que estés buscando!');
    console.log(" Acá podés conseguir " + ingresarProductos)
}


let num = Number(prompt('Ingresá el precio total de tu producto')) 
let num2 = Number(prompt('Ingresá el descuento en % de tu cupón'))


function prueba (num, num2){
        resultado5 = num * (num2 / 100)

    return parseInt(resultado5)
}

 function resultado (num, resultado5){
    resultadofinal = num - (`${resultado5}`)

    return parseInt(resultadofinal)
}

  prueba (num, num2);
  resultado (num, resultado5);

let alerta = alert(`El total de tu compra es: $ ${resultadofinal}. Gracias por elegirnos! `);


