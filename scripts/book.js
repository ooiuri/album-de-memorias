class pagina{
  constructor(url, legenda){
    this.url = 'url';
    this.legenda = 'legenda';
    this.foto = loadImage(this.url);
  }
  show(){
    imageMode(CENTER);
    img(this.foto, height/2, width/2);
  }
}