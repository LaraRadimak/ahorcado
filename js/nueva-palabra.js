var palabras = ["MANZANA", "PERA", "MURCIELAGO","CASA","MESA", "ESCUELA","PROGRAMA"];

const inicio =document.querySelector(".botones");
const agregar=document.querySelector("#adicionar");
const btnAgregar= document.querySelector(".agregar");

if (btnAgregar){
btnAgregar.addEventListener("click",function(event){
    event.preventDefault()
    console.log(palabras);
    agregar.style.display="";
    inicio.style.display="none";
    
});
}
