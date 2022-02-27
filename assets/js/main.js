//Solicitud de ingreso de numero:
let num1 = parseInt(prompt("Ingrese un número entero entre el 1 y 20"))

//Variable para el factorial
const facto1 = num => {
    if (num <=1) return 1
    return num * facto1 (num-1)
}

//Verificacion si el número entre 1 y 20 
const verinum = (num) => {
    if(num >= 1 && num <= 20){
        //Ciclo for para calcular las tablas de multiplicar
        for (let i = 1; i <=num; i++){
            //Generar y mostrar por consola el resultado de las operaciones
            console.log (`${num} x ${i} = ${num*i}`);
        }
        //Aplicar un ciclo for anidado para obtener el factorial del número ingresado.
        for (let i = 1; i <=num; i++){
            console.log(`El Factorial del Número  ${i} es: ${facto1(i)}`);
        }
    }
    //Mensaje por si el número está fuera de rango.
    else{
        console.log("Número fuera del Rango")
    }
}
//Llamado a la funcion para verificar.
verinum(num1);