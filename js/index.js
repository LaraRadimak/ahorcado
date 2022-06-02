
var palabras = ["MANZANA", "PERA", "MURCIELAGO","CASA","ESPANTAPAJAROS","MESA", "ESCUELA","PROGRAMA","COMPUTADORA"];
var tablero =  document.getElementById("ahorcado").getContext("2d");
var letras = [];
var palabraCorrecta = "";
var errores = 9;
function escojerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random)*palabras.length];
    palabrasecreta = palabra;
    console.log(palabra);
    return palabra;

} escojerPalabraSecreta();

