//VARIAVEIS DA BOLINHA
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
//VELOCIDADE DA BOLINHA
let velocidadeXBolinha =6;
let velocidadeYBolinha =6;
let raio = diametro / 2;
//VARIAVEIS MINHA RAQUETE
let xRaquete = 1;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

//PLACAR DO JOGO
let meusPontos = 0;
let pontosDoOponente = 0;

//VARIAVEIS RAQUETE DO OPONENTE
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let velocidadeXOponente;



function setup() {
    createCanvas(600, 400);
}

//FUNÇÕES//
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificandoColisao();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  stroke(color(255,255,0))
  fill(color(0,128,0))
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
   xBolinha += velocidadeXBolinha
   yBolinha += velocidadeYBolinha
}

function verificandoColisao(){
    if (xBolinha + raio > width || xBolinha - raio <0 ){velocidadeXBolinha *= -1;
}
    if (yBolinha + raio > height || yBolinha - raio < 0 ){velocidadeYBolinha *= -1;
}
}
function mostraRaquete (x, y){
  stroke(255)
  fill(255)
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente (x, y){
  fill(255)
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1
  }
}

function verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, diametro);
  if (colidiu){
    velocidadeXBolinha *= -1
  }
}


function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
   if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){
  stroke(color(0,128,0))
  fill(color(255,255,0))
  rect(150, 10, 40, 20);
  rect(450, 10, 40, 20);
  fill(255)
  textAlign(CENTER)
  textSize(20)
  stroke(0)
  fill(0,0,255)
  text(meusPontos, 170, 26);
  text(pontosDoOponente, 470, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  
  if (xBolinha < 10){
    pontosDoOponente += 1;
    
  }
}


function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
