/* código principal */
var numero_flores = 5;
let flor = [numero_flores]; //objeto flor que fica no background
var lastmousex;
var scribble; //retangulo desenhado a mao


var pag = 0; // variável controle de caminho
var luz = true;
let luzvalue = 0;

let texto;

let bg1;

function preload() {
  bg1 = loadImage('assets/bg1.jpg');
}


function setup(){
    createCanvas(windowWidth, windowHeight); //criando canva
    background('black');
    lastmousex = mouseX;
    scribble = new Scribble();
    textSize(18);
    //Criando as flores
    for(i = 0; i < numero_flores; i++){
        flor[i] = new flower(random(windowWidth)/.2, random(windowHeight)/.2, 80, 11, 10, random(.05,.2)); //padão
    }
    texto = new textreveal('clique para continuar',width/2,height/1.5);
}

function draw(){
    //background(0);
    inicio(pag < 3);
}




//reconhece cliques do mouse
function mousePressed() {
    pag = pag + 1;
    if(pag > 3) pag = 0;
}

//botoes
function keyPressed(){
   
    if(key == 'l'){
        luz = true;
    }else if(key == 'k'){
        luz = false;
    }
}

//redimensiona a página
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

