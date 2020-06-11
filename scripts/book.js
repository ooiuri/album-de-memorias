let frame;
let booksetup = 0;
function book(pag){
  if(pag < 3) return;
  if(booksetup == 0){
    color('white');
    frame = new Scribble();
    let npages = dados.getColumnCount();
  }
  
    //image(bg1, (mouseX*0.01+width/2),(mouseY*0.01+height/2));
    color('white');
    fill('white');
    strokeWeight( 10 );
    strokeWeight( 3 );
      //set the color of the hachure to a nice blue
    stroke( 0, 50, 180 );
    frame.scribbleRect( width/2, height/2, 100, 100 );
    frame.scribbleFilling( width/3, height/2, 3.5, 100 );
  
}

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