var lastX, lastY;

function onmousedown(){
  //record position to start drawing
  lastX=mouseX;
  lastY=mouseY;
  
}

function onmousemove(){
  if(mouseDown){
    line(lastX,lastY,mouseX,mouseY);
    lastX=mouseX;
    lastY=mouseY;
  }
  
}
function setup() {
	fillContainer();
}