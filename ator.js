let xVaquinha = 100
let yVaquinha = 368;
let colisao = false 
let pontos = 0

print(yVaquinha)

function mostraVaca(){
    image(vaquinha, xVaquinha, yVaquinha, 30, 30);
}
function movVaca (){
  if (keyIsDown(UP_ARROW))
    yVaquinha -= 5
  if (keyIsDown(DOWN_ARROW))
    yVaquinha += 5
  }
function verificaColisao (){
  for (let c = 0; c < Carros.length; c = c + 1){
  colisao = collideRectCircle(xCarros[c], yCarros[c], compCarro, altCarro, xVaquinha, yVaquinha, 20)
  if (colisao){
  colidiu();
  bateu.play()
  if (perderPonto()){
    pontos -=1
  }
  //print ("colidiu")
  }
  }  
  } 
function colidiu(){
  yVaquinha = 368; 
} 
function mostraPonto(){
  textAlign(CENTER)
  fill(96, 254, 156)
  textSize(25)
  text(pontos, width / 5, 25)
}
function marcaPonto(){
  if (yVaquinha < 10){
   pontos += 1;
   passou.play();
  colidiu();
  }
}
function comeceDeNovo(){
  if(yVaquinha > 370){
    colidiu();
  }    
}
function perderPonto(){
  return pontos > 0;
}
