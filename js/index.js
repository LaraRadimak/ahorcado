
var palabras = ["MANZANA", "PERA", "MURCIELAGO","CASA","MESA", "ESCUELA","PROGRAMA"];
var tablero =  document.getElementById("ahorcado").getContext("2d");
var letras = [];
var palabraCorrecta = "";
var errores = 0;


function escojerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabra);
    return palabraSecreta;

} 
function dibujarLineas(){

   tablero.lineWidth = 6
   tablero.lineCap = "round"
   tablero.lineJoin = "round"
   tablero.strokeStyle = "#0A3871"
   tablero.beginPath()

   var ancho = 600 / palabraSecreta.length;
   for ( let i = 0 ; i < palabraSecreta.length; i++){
       tablero.moveTo(500+(ancho*i),660);
       tablero.lineTo(550+(ancho*i),660);
    }
    tablero.stroke();
    tablero.closePath();

} 
dibujarLineas(escojerPalabraSecreta());

function escribirLetraCorrecta(index){
    tablero.font ="bold 52px inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    var ancho = 600 / palabraSecreta.length
    tablero.fillText(palabraSecreta[index],505 +(ancho*index),620);
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font ="bold 40px inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
   var ancho = 600 / palabraSecreta.length;
    tablero.fillText(letra, 535+(40*(10-errorsLeft)),710, 40);
}
function verificarLetrasClicada(key){
    if (letras.length<1 || letras.indexOf(key)< 0)
    {
        letras.push(key)
        return false
    }    
    else{
        letras.push(key)
    return true
    
    }
    
}
function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase()
}
function adicionarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<=0){
        errores +=1
    }
}
var aciertos = palabraSecreta.length - palabraCorrecta;
document.onkeydown = (e) => {
    let letra=e.key.toUpperCase()
    if(!verificarLetrasClicada(e.key)){
        if(palabraSecreta.includes(letra)){ 
            console.log(letra) 
        adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
        
        
        for (let i = 0; i < palabraSecreta.length; i++){
            if(palabraSecreta[i]== letra){
                escribirLetraCorrecta(i);
                
            }
                if( palabraCorrecta.length == palabraSecreta.length){
                    
                    document.querySelector("#ganador").style.display = "flex"
                }

               
                
            }  
       } 
      
    
     else{
        if(!verificarLetrasClicada(e.key))return
            adicionarLetraIncorrecta(letra)
            escribirLetraIncorrecta(letra, errores)
            dibujaAhorado(errores)

        }
    }

}; 

function dibujaHorca(tablero){
    tablero.fillStyle = '#462501';
    tablero.fillRect(64,9,26,237);
    tablero.fillRect(175,193,26,53);
    tablero.fillRect(64,193,136,15);
    tablero.fillRect(64,9,115,11);
    tablero.beginPath();
    tablero.moveTo(64,65);
    tablero.lineTo(64,80);
    tablero.lineTo(133,11);
    tablero.lineTo(118,11);
    tablero.fill();
 }
 function dibujaCabeza(tablero){
    var img = new Image();
    img.onload = function(){
        tablero.fillStyle = "#f2d666";
        tablero.drawImage(img,150,38);
        tablero.fillRect(172,12,4,28);
        
    }
    img.src = "../imagenes/cabeza.svg"
}

 function dibujaCuerpo(tablero){
    tablero.beginPath();
    tablero.moveTo(171,82);
    tablero.lineTo(168,119);
    tablero.lineTo(162,147);
    tablero.lineTo(189,149);
    tablero.lineTo(185,111);
    tablero.lineTo(183,83);
    tablero.fill()
 }
 function dibujaBrazoIzq(tablero){
    tablero.beginPath();
    tablero.moveTo(173,102);
    tablero.lineTo(140,128);
    tablero.lineTo(155,133);
    tablero.lineTo(178,114);
    tablero.fill()
 }
 function dibujaBrazoDer(tablero){
    tablero.beginPath();
    tablero.moveTo(180,99);
    tablero.lineTo(222,121);
    tablero.lineTo(209,133);
    tablero.lineTo(183,110);
    tablero.fill()
 }
 function dibujaPiernaIzq(tablero){
    tablero.beginPath();
    tablero.moveTo(166,142);
    tablero.lineTo(139,175);
    tablero.lineTo(164,178);
    tablero.lineTo(175,144);
    tablero.fill()
 }
 function dibujaPiernaDer(tablero){
    tablero.beginPath();
    tablero.moveTo(178,145);
    tablero.lineTo(193,178);
    tablero.lineTo(212,170);
    tablero.lineTo(188,142);
    tablero.fill()
 }
 
;
function dibujaAhorado(errores){
    var tablero =  document.getElementById("ahorcado").getContext("2d");
    
        if(errores >0){
            dibujaHorca(tablero)
            
        }
            if(errores >1){
            
                dibujaCabeza(tablero)
              
            }
            tablero.fillStyle = '#1f3e18';
            if(errores>2){
                
                dibujaCuerpo(tablero)
            }
            if(errores>3){
                
                dibujaBrazoIzq(tablero)
            }
            if(errores>4){
                
                dibujaBrazoDer(tablero)
            }
            if(errores>5){
                
                dibujaPiernaIzq(tablero)
            }
            if(errores>6){
                
                dibujaPiernaDer(tablero)
                
            } 
            if(errores>7){
                document.querySelector("#perdedor").style.display = "flex";
                
                
            }   
 
}  



  
    