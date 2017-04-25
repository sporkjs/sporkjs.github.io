function insertCharacter(x){
	display.innerHTML=display.innerHTML+x;
}
function clearDisplay(){
	display.innerHTML="";
}
function calculate(){
	display.innerHTML=eval(display.innerHTML);
}