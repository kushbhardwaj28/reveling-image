var img;
function preload() {
    img = loadImage("IMG_1384.PNG");
}
function setup() {
    createCanvas(600,600);
    
    pixelDensity(1);
    background(129, 145, 154); 
    img.loadPixels();
//    tint(255,10);
//    image(img,width/2,height/2);
}


function draw() {
     
    if(mouseX > 0 && mouseX>img.width && mouseY >0 && mouseY<img.height){
        var xx = (mouseX+mouseY*img.width)*4;
        stroke(img.pixels[xx],img.pixels[xx+1],img.pixels[xx+2],img.pixels[xx+3]);
//        strokeWeight(20);
        point(mouseX,mouseY);
    }
    
}


