//carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velCarros = [3, 3.4, 2.5, 4, 5, 2.7];
let compCarro = 50
let altCarro = 30

function mostraOsCarros(){
  for (let c = 0; c < Carros.length; c = c + 1 ){
    image(Carros [c], xCarros[c], yCarros[c], compCarro,  altCarro);
   }
  }

function movCarros (){
    for (let c = 0; c < Carros.length; c = c + 1){
    xCarros[c] -= velCarros[c];} 
}

function inicio(){
  for (let c = 0; c < Carros.length; c = c + 1)
  if (voltaProInicio(xCarros[c])){
    xCarros [c] = 600
  }
}

function voltaProInicio(xCarros){
    return xCarros < - 50
}