let arrayPizza = ["harina", "salsa", "muzzarella", "rucula", "huevo", "morron", "jamon", "agua", "tomate", "parmesano"]


function contarLetras(a) {
    var pares = [];
    var impares = [];


    for (let i = 0; i < 10; i++) {
        if (arrayPizza[i].length % 2 == 0) {
            pares.push(arrayPizza[i]);
        } else {
            impares.push(arrayPizza[i]);
        }
    }
    console.log(`Los ingredientes pares son ${pares}`);
    console.log(`Los ingredientes impares son ${impares}`);
}
console.log(contarLetras(arrayPizza));