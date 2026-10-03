function Hola() {
    alert("Hola, Bienvenido a la Calculadora");
}

function suma() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    resultado = num1 + num2;        

   document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function resta() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    resultado = num1 - num2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function multiplicacion() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);        
    
    resultado = num1 * num2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function division() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (num2 !== 0) {
        resultado = num1 / num2;
        document.getElementById("resultado").innerText = "Resultado: " + resultado;
    } else {
        document.getElementById("resultado").innerText = "Error: División por cero";
    }
}

function potencia() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);   

    resultado = Math.pow(num1, num2);

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function raiz() {   
    let num1 = parseFloat(document.getElementById("num1").value);

    if (num1 >= 0) {
        resultado = Math.sqrt(num1);
        document.getElementById("resultado").innerText = "Resultado: " + resultado;
    } else {
        document.getElementById("resultado").innerText = "Error: Raíz cuadrada de un número negativo";
    
    }
}
 