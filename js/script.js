//seccion de variables
let estado = true;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let total = 0;
let caja1 = document.getElementById("dado1");
let caja2 = document.getElementById("dado2");
let caja3 = document.getElementById("dado3");
let clic =  new Audio('clic.mp3');

const imagen = ['./img/lado1.png', './img/lado2.png', './img/lado3.png', './img/lado4.png', './img/lado5.png', './img/lado6.png'];

cargarInicio();

//funcion para llamar a las funciones para iniciar
function cargarInicio(){
    image1();
    image2();
    image3();
    punteo();
}
//llamnar funcion con el botón
function cambiarDados(){
    clic.play();
    image1();
    image2();
    image3();
    punteo();
}

function punteo(){
    total = num1 + num2 + num3;
    total_f = "Puntos: "+total;
    document.getElementById('puntos').innerHTML=total_f;
}
//seccion de dónde validar los if segun los numeros aleatorios
function image1(){
    let numero1 = parseInt(Math.random() * 6 + 1);
    num1 = numero1;
    if(numero1 ==1){
        caja1.src=imagen[numero1-1];
    }else if(numero1 == 2){
        caja1.src=imagen[numero1-1];
    }else if(numero1 == 3){
        caja1.src=imagen[numero1-1];
    }else if(numero1 == 4){
        caja1.src=imagen[numero1-1];
    }else if(numero1 == 5){
        caja1.src=imagen[numero1-1];
    }else if(numero1 == 6){
        caja1.src=imagen[numero1-1];
    }
}

function image2(){
    let numero2 = parseInt(Math.random() * 6 + 1);
    num2 = numero2;
    if(numero2 ==1){
        caja2.src=imagen[numero2-1];
    }else if(numero2 == 2){
        caja2.src=imagen[numero2-1];
    }else if(numero2 == 3){
        caja2.src=imagen[numero2-1];
    }else if(numero2 == 4){
        caja2.src=imagen[numero2-1];
    }else if(numero2 == 5){
        caja2.src=imagen[numero2-1];
    }else if(numero2 == 6){
        caja2.src=imagen[numero2-1];
    }
}

function image3(){
    let numero3 = parseInt(Math.random() * 6 + 1);
    num3 = numero3;
    if(numero3 ==1){
        caja3.src=imagen[numero3-1];
    }else if(numero3 == 2){
        caja3.src=imagen[numero3-1];
    }else if(numero3 == 3){
        caja3.src=imagen[numero3-1];
    }else if(numero3 == 4){
        caja3.src=imagen[numero3-1];
    }else if(numero3 == 5){
        caja3.src=imagen[numero3-1];
    }else if(numero3 == 6){
        caja3.src=imagen[numero3-1];
    }
}

function cambiarDistribucion(){
    clic.play();
    if(estado==false){
        document.getElementById('caras').style.flexDirection ="row";
        estado = true;
    }else{
        document.getElementById('caras').style.flexDirection ="column";
        estado = false;
    }
}