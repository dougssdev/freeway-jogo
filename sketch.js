


//vaquinha


function setup() {
  createCanvas(500, 400);
  trilha.loop()
}

function draw() {
  background(estrada);
  mostraOsCarros();
  mostraVaca();
  movCarros();
  movVaca ();
  inicio();
  verificaColisao();
  mostraPonto();
  marcaPonto();
  comeceDeNovo();
}



