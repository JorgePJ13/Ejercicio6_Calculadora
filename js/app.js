function suma() {
    let numero1 = parseInt(campo1.value);
    let numero2 = parseInt(campo2.value);
    let resultado = numero1 + numero2;
    campo3.value = resultado;
}

function resta() {
    let numero1 = parseInt(campo1.value);
    let numero2 = parseInt(campo2.value);
    let resultado = numero1 - numero2;
    campo3.value = resultado;
}

function multiplicacion() {
    let numero1 = parseInt(campo1.value);
    let numero2 = parseInt(campo2.value);
    let resultado = numero1 * numero2;
    campo3.value = resultado;
}

function division() {
    let numero1 = parseInt(campo1.value);
    let numero2 = parseInt(campo2.value);
    let resultado = numero1 / numero2;
    campo3.value = resultado;
}

function resto() {
    let numero1 = parseInt(campo1.value);
    let numero2 = parseInt(campo2.value);
    let resultado = numero1 % numero2;
    campo3.value = resultado;
}