//loop del juego
let time = new Date()
let deltaTime = 0;

if(document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(init, 1)
}else{
    document.addEventListener("DOMContentLoaded", init)
}

function init(){
    time= new Date()
    start ()
    loop ()
}

function loop () {
    deltaTime = (new Date() - time) / 1000
    time = new Date
    update ()
    requestAnimationFrame (loop)
}
 
//logica del juego
let sueloY = 22
let velY = 0
let impulso = 900
let gravedad = 2500

let dinoPosX = 42
let dinoPosY = sueloY

let sueloX = 0
let velEscenario = 1288/3
let gameVel = 1
let puntaje = 0

let parado = false
let saltando = false

let contenedor
let dino
let textoPuntaje
let suelo
let gameOver

function start(){
    suelo = document.querySelector(".suelo")
    contenedor = document.querySelector (".contenedor")
    textoPuntaje = document.querySelector(".puntaje")
    dino = document.querySelector(".dino") 
    document.addEventListener("keycode" , HandlekeyDown)
//Evento tecla espaciadora
document.addEventListener("keydown" , HandlekeyDown)
}

function update(){
    moverSuelo()

    MoverDino()

    velY -= gravedad * deltaTime;
}
function moverSuelo(){
    sueloX += calcularDesplazamiento()
    suelo.style.left = -(sueloX % contenedor.clienWidth) + "px"  
}

function calcularDesplazamiento(){
    return velEscenario * deltaTime * gameVel
}

function HandlekeyDown(evento){
    if(evento.keyCode == 32) {
        Saltar()
    }
}
console.log("2" == 2) //resultado true
console.log("2" === 2 ) //resultado false

function Saltar(){
    if(dinoPosY === sueloY){
        saltando = true
        velY  = impulso
        dino.classList.remove("dino-corriendo")

    }

}
function MoverDino(){
    dinoPosY += velY * deltaTime

    if(dinoPosY < sueloY){
        TocarSuelo()
    }

  dino.style.bottom = dinoPosY + "px"
}

function TocarSuelo(){
    dinoPosY = sueloY;
    velY = 0;

if(saltando){
    dino.classList.add("dino-corriendo")
}

    saltando = false;
}