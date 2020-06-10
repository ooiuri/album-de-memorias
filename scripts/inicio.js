

function inicio(ativo){
    if(ativo == false) return; //verifica se a função deve rodar ou não
    if(pag != 2) {
        background(0);
        for(var i = 0; i < numero_flores; i++){
            flor[i].show();
            flor[i].move();
        }
        stroke('white');
        fill('black');
        rectMode(CENTER);
        rect(width/2, height/2, 300, 150, 10);
        scribble.scribbleRoundedRect( width/2, height/2, 300, 150, 10 );
        scribble.bowing = 1;
        strokeWeight(1);
        textAlign(CENTER);
        text("12/06/2020", width/2,height/2);  
        
    }
    if(pag == 1){
        h = map(constrain(mouseY,height/3,height), 0, height, 0, 90)
        fill(255,h*3-100);
        strokeWeight(1);
        textAlign(CENTER);
        //showtext('clique para continuar',width/2,height/1.5,true);
        texto.show();
        //text("clique para continuar", width/2,height/1.5);  
        luzvalue = 0; 
    }
    if(pag == 2){
        if (luz == true && luzvalue < 255) luzvalue += 1;
        if (luz == false && luzvalue > 0) luzvalue -= 1;
        colorMode(RGB, 255)
        //background(0);
        texto.unshow();
       // background(196,162,143,luzvalue);
       tint(255, luzvalue*5)
        image(bg1,0,0,width,height);
    }
}