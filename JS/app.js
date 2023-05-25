// //Operadores artitméticos : suma, resta, multiplicación y división

// let numero = 31;
// let numero2 = 19;
// let suma = numero + numero2
// console.log(`${numero} + ${numero2} = ${suma}`);

// //Expresiones booleanas


// //Acumuladores y contadores

// let num = 1;
// let nm = '1';

// if (num === nm){
//     console.log(`${num} y ${nm} son lo mismo`)
// }else{
//     console.log(`${num} y ${nm} no son lo mismo`)

// }

let repetir = true;
let saldo = 1000000;
let valorTransaccion = 0;


while(repetir){
    let menu = parseInt( prompt('Ingrese la operación que desea ejecutar: \n 1. Consultar saldo \n 2. Retirar dinero \n 3. Consignar \n 4. Salir'));

    switch(menu){
        case 1:
            console.log(`Consultando saldo... Su saldo es $${saldo}`)
            break;
        case 2:
            console.log('Retire su dinero.')
            valorTransaccion = parseInt(prompt('Ingrese el valor que desea retirar: '))
            if(valorTransaccion < saldo){
                saldo -= valorTransaccion
                console.log(`Su nuevo saldo es: $${saldo}`)
            }else{
                console.log('El valor de transacción es mayor a su saldo')
            }
            break;
        case 3:
            console.log('Realizando consignación');
            break;
        case 4:
            repetir = false
            console.log('Para servirle')
            break;
        default:
            console.log('Operación inválida')
            break;
    }
}

