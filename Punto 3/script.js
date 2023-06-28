const numeros = [];
 let numero = 8;
 while (true){
     let numero = parseInt(prompt("Ingresa un numero al azar, si deseas finalizar ingresa el numero 0: "));
 if(numero === 0){
     break;
 }
 if(!isNaN(numero)){
     numeros.push(numero);
 }
 }
 console.log(`Este es el arreglo:" ${numeros}`);

//El resultado se visualiza en la consola