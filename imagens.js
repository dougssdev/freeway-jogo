let vaquinha;
let estrada;
let carro1;
let carro2;
let carro3;
let trilha;
let passou;
let bateu;

function preload(){
  estrada = loadImage("imagens/estrada.png");
  vaquinha = loadImage("imagens/ator-1.png");
  carro1 =loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  Carros = [carro1, carro2, carro3, carro1, carro2, carro3];
  trilha = loadSound("sons/trilha.mp3");
  bateu = loadSound("sons/colidiu.mp3");
  passou = loadSound("sons/pontos.wav");
}
