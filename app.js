
//variables
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ");

    console.log(numeroUsuario);
    /*
    Este código 
    realiza la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos la condición fue correcta
            alert(`Acertaste, el numero es: ${numeroUsuario} Lo hiciste en ${intentos} ${palabraVeces}`);
            //No acertamos la condición no fue correcta
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        // incrementamos el contador cuando la persona no acierta 
        intentos = intentos + 1;
        palabraVeces = 'veces';
        if(intentos > 3) {
            alert('Llegaste al numero máximo de intentos');
            break
        }
        // alert('Lo siento no acertaste el numero');

    }
}