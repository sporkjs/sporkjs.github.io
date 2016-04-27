// Spork.js
//John W. Snow (john.snow@cune.edu)
//Version of 2014-2-16
/*This is a JavaScript library that provides easy access to 
 - The HTML 5 canvas
 - Animation
 - Mouse functions
 - Time and date functions
 - Math functions
 - Key functions
*/
//If you find this useful, let me know.

// graphics functions ------------------------------------------------------------------------------------------------------------------------
var theCanvasHandle;
var theCanvas;	//really the context
var theName;
var theLoadDiv;
var storedProgram = new Array();
var storedName = new Array();
var theCode;
var width;
var height;
var theLineNumbers;
var pi=Math.PI;
function size(x,y){
	theCanvasHandle.width=x;
	theCanvasHandle.height=y;
	width=x;
	height=y;
	mouseX=-1;
	mouseY=-1;
	fillcolor('black');
	color('black');
	linewidth(1);
	theCanvas.lineCap='round';
	theCanvas.lineJoin='round';
	theCanvas.font='40px Courier';
}
function background(c){
	var temp = theCanvas.fillStyle;
	var l = arguments.length;
	if (l==1)
		theCanvas.fillStyle = arguments[0];
	else if (l==3)
		theCanvas.fillStyle = "rgb("+arguments[0]+","+arguments[1]+","+arguments[2]+")";
	else if (l==4)
		theCanvas.fillStyle = "rgba("+arguments[0]+","+arguments[1]+","+arguments[2]+","+arguments[3]+")";
	theCanvas.fillRect(0,0,width,height);
	theCanvas.fillStyle=temp;
}
function clear(){
	theCanvas.save();
	theCanvas.setTransform(1,0,0,1,0,0);
	theCanvas.clearRect(0,0,width,height);
	theCanvas.restore();
}
function color(){
	var l = arguments.length;
	if (l==1)
		theCanvas.strokeStyle = arguments[0];
	else if (l==3)
		theCanvas.strokeStyle = "rgb("+arguments[0]+","+arguments[1]+","+arguments[2]+")";
	else if (l==4)
		theCanvas.strokeStyle = "rgba("+arguments[0]+","+arguments[1]+","+arguments[2]+","+arguments[3]+")";
}
function fillcolor(){
	var l = arguments.length;
	if (l==1)
		theCanvas.fillStyle = arguments[0];
	else if (l==3)
		theCanvas.fillStyle = "rgb("+arguments[0]+","+arguments[1]+","+arguments[2]+")";
	else if (l==4)
		theCanvas.fillStyle = "rgba("+arguments[0]+","+arguments[1]+","+arguments[2]+","+arguments[3]+")";
}
var textcolor=fillcolor;
function lineWidth(n){
	theCanvas.lineWidth=n;
}
function linewidth(n){
	lineWidth(n);
}
function line(){
	var l = arguments.length/2;
	var i;
	theCanvas.beginPath();
	theCanvas.moveTo(arguments[0], arguments[1]);
	for (i=1;i<l;i++)
		theCanvas.lineTo(arguments[2*i],arguments[2*i+1]);
	theCanvas.stroke();
}
function rect(x1,y1,x2,y2){
	theCanvas.beginPath();
	theCanvas.rect(x1,y1,x2,y2);
	theCanvas.stroke();
}
function triangle(x1,y1,x2,y2,x3,y3){
	line(x1,y1,x2,y2,x3,y3,x1,y1);
}
function quad(x1,y1,x2,y2,x3,y3,x4,y4){
	line(x1,y1,x2,y2,x3,y3,x4,y4,x1,y1);
}
function arc(x, y, r, a, b){
	theCanvas.beginPath();
	theCanvas.arc(x, y, r, a*pi/180, b*pi/180);
	theCanvas.stroke();
}
function circle(x, y, r){
	arc(x,y,r,0,360);
}
function point(x,y){
	var temp = theCanvas.fillStyle;
	theCanvas.fillStyle = theCanvas.strokeStyle;
	circle(x,y,theCanvas.lineWidth);
	theCanvas.fill();
	theCanvas.fillStyle=temp;
}
function ellipse(x, y, rx, ry, a, b){
	if (arguments.length < 6){
		a=0;
		b=360;
	}
	while (b<a) b+=360;
	var arad = a*pi/180;
	var brad = b*pi/180;
	var t;
	var dt = (brad-arad)/1000;
	theCanvas.beginPath();
	theCanvas.moveTo(x+rx*Math.cos(arad), y+ry*Math.sin(arad));
	for (t=arad;t<=brad;t+=dt)
		theCanvas.lineTo(x+rx*Math.cos(t), y+ry*Math.sin(t));
	theCanvas.stroke();
}
function translate(x,y){
	theCanvas.translate(x,y);
}
function scale(x,y){
	var l = arguments.length;
	if (l==2)
		theCanvas.scale(x,y);
	else if (l==1)
		theCanvas.scale(x,x);
}
function rotate(n){
	theCanvas.rotate(n*pi/180);
}
function save(){
	theCanvas.save();
}
function restore(){
	theCanvas.restore();
}
function fill(){
	theCanvas.fill();
}
function font(x){
	theCanvas.font=x;
}
function print(t, x, y){
	theCanvas.fillText(t, x, y);
}
function fillText(t, x, y){
	theCanvas.fillText(t, x, y);
}
function strokeText(t, x, y){
	theCanvas.strokeText(t, x, y);
}
function filltext(t, x, y){
	theCanvas.fillText(t, x, y);
}
function stroketext(t, x, y){
	theCanvas.strokeText(t, x, y);
}
function measureText(t){
	return(theCanvas.measureText(t).width);
}
function measuretext(t){
	return(theCanvas.measureText(t).width);
}
function resetTransform(){
	theCanvas.setTransform(1,0,0,1,0,0);
}
//not really used for class
function stroke(){
	theCanvas.stroke();
}
function beginpath(){
	theCanvas.beginPath();
}
function beginPath(){
	theCanvas.beginPath();
}
function moveto(x,y){
	theCanvas.moveTo(x,y);
}
function moveTo(x,y){
	theCanvas.moveTo(x,y);
}
function lineto(x,y){
	theCanvas.lineTo(x,y);
}
function lineTo(x,y){
	theCanvas.lineTo(x,y);
}
function arcto(x1,y1,x2,y2,r){
	theCanvas.arcTo(x1,y1,x2,y2,r);
}
// end of graphics functions ----------------------------------------------------------------------------------------------------------------


//Running functions --------------------------------------------------------------------------------------------------------------------------
function setup(){}
function draw(){}
function redraw(){}
CONTINUELOOPING=false;
function loop(){
	CONTINUELOOPING=true;
}
function startloop(){
	if (CONTINUELOOPING ==false){
		CONTINUELOOPING=true;
		doTheLoop();
	}
}
function stoploop(){
	CONTINUELOOPING=false;
}
function noloop(){
	CONTINUELOOPING=false;
}
var timeStep = 1;
function timestep(n){
	timeStep=n;
}
function doTheLoop(){
	draw();
	if (CONTINUELOOPING)
		setTimeout('this.doTheLoop()', timeStep);
}
function runCode(){
	
	setup=function(){};
	draw=function(){};
	redraw=function(){};
	onmousedown=function(){};
	onmouseup=function(){};
	onmousemove=function(){};
	onclick=function(){};
	onmouseover=function(){};
	onmouseout=function(){}
		
	keyDown=false;
	keyCode=-1;
	keyChar='';
	altKey=false;
	ctrlKey=false;
	shiftKey=false;
	onkeydown = function(){};
	onkeyup=function(){};
	onkeypress=function (){};
		
	CONTINUELOOPING=false;
	size(400,400);
	resetTransform();
	mouseX=-1;
	mouseY=-1;
	fillcolor('black');
	color('black');
	linewidth(1);
	theCanvas.lineCap='round';
	theCanvas.lineJoin='round';
	theCanvas.font='40px Courier';
	clear();	
		
	var codeToRun=theCode.value;
		
	try{
		eval(codeToRun);
		setup();
		draw();
	}
	catch(err){
		alert('Your code has an error: '+err.message);
	}
	window['draw']=draw;
	window['redraw']=redraw;
	window['onmousedown']=onmousedown;
	window['onmouseup']=onmouseup;
	window['onmousemove']=onmousemove;
	window['onclick']=onclick;
	window['onmouseover']=onmouseover;
	window['onmouseout']=onmouseout;
	window['onkeydown']=onkeydown;
	window['onkeyup']=onkeyup;
	window['onkeypress']=onkeypress;
	if (CONTINUELOOPING)
		doTheLoop();
}
//----------------------------------------------------------------------------------------------------------------------------------------------

// Mouse events-------------------------------------------------------------------------------------------------------------------------------
var mouseX;
var mouseY;
var mouseDown=false;

function getCoords(e) {
	if (e.offsetX) {
		mouseX=e.offsetX;
		mouseY=e.offsetY;
	}
	else if (e.layerX) {
		mouseX=e.layerX;
		mouseY=e.layerY;
	}
//	else {
//		mouseX= e.pageX - theCanvasHandle.offsetLeft;
//		mouseY= e.pageY - theCanvasHandle.offsetTop;
//	}
	else {  
		var leftOfCanvas=0;
		var topOfCanvas=0;
		var obj=theCanvasHandle;
/*		if (obj.offsetParent) do {
			leftOfCanvas+= obj.offsetLeft;
			topOfCanvas += obj.offsetTop;
		}  while (obj=obj.offsetParent);
*/
		while(obj.offsetParent) {
			leftOfCanvas+= obj.offsetLeft;
			topOfCanvas += obj.offsetTop;
			obj=obj.offsetParent;
		}  
		leftOfCanvas+= obj.offsetLeft;
		topOfCanvas += obj.offsetTop;
		mouseX= e.clientX - leftOfCanvas+obj.scrollLeft;
		mouseY= e.clientY - topOfCanvas+obj.scrollTop;
	}
}

function onmousedown(){}
function mouseDownFunction(e){
	//e.preventDefault();
	mouseDown=true;
	if (e.touches){
		getCoords(e.touches[0]);
	}
	else
		getCoords(e);
	onmousedown();
}
function onmouseup(){}
function mouseUpFunction(e){
	//e.preventDefault();
	mouseDown=false;
	if (e.touches)
		getCoords(e.touches[0]);
	else
		getCoords(e);
	onmouseup();
}
function onmousemove(){}
function mouseMoveFunction(e){
	e.preventDefault();
	if (e.touches)
		getCoords(e.touches[0]);
	else
		getCoords(e);
	onmousemove();
}
function onclick(){}
function mouseClickFunction(e){
	//e.preventDefault();
	if (e.touches)
		getCoords(e.touches[0]);
	else
		getCoords(e);
	onclick();
}
function onmouseover(){}
function mouseOverFunction(e){
	getCoords(e);
	onmouseover();
}
function onmouseout(){}
function mouseOutFunction(e){
	mouseDown=false;
	onmouseout();
}
function touchEndFunction(e){
	mouseDown=false;
	if (e.touches)
		getCoords(e.touches[0]);
	else
		getCoords(e);
	onmouseup();
	onmouseout();
}
// End mouse events -------------------------------------------------------------------------------------------------------------------------

//Key events --------------------------------------------------------------------------------------------------------------

var keyDown =false;
var keyCode;
var keyChar;
var altKey = false;
var crtlKey = false;
var shiftKey = false;
var leftArrow=37;
var upArrow=38;
var rightArrow=39;
var downArrow=40;

function onkeydown(){}
function keyDownFunction(e){
	var keyASCII = parseInt(e.keyCode, 10);
	if (keyASCII == 9)
		return(false);
	else {
		keyDown=true;
		keyCode=e.keyCode;
		keyChar=String.fromCharCode(keyCode);
		altKey=e.altKey;
		ctrlKey=e.ctrlKey;
		shiftKey=e.shiftKey;
		onkeydown();
	}
}

function onkeyup(){}
function keyUpFunction(e){
	keyDown=false;
	onkeyup();
}

function onkeypress(){}
function keyPressFunction(e){
	onkeypress();
}
//End Key Events---------------------------------------------------------------------------------------------------------

// Time ----------------------------------------------------------------------------------------------------------------------------------------
function hour(){
	var h=(new Date()).getHours() % 12;
	if (h==0) h=12;
	return(h);
}
function minute(){
	return((new Date()).getMinutes());
}
function second(){
	return((new Date()).getSeconds());
}
function millisecond(){
	return((new Date()).getMilliseconds());
}
function date(){
	return((new Date()).getDate());
}
function year(){
	return((new Date()).getFullYear());
}
var dayNames=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function day(){
	return(dayNames[(new Date()).getDay()]);
}
function month(){
	return(monthNames[(new Date()).getMonth()]);
}
//end Time -------------------------------------------------------------------------------------------------------------------------------------

// Initialization -------------------------------------------------------------------------------------------------------------------------------
//Make Math object accessible without "Math."
function cacheMath(){
	var aMathFunctions = Object.getOwnPropertyNames(Math);

	for (var i in aMathFunctions){
		window[aMathFunctions[i]] = Math[aMathFunctions[i]];
	}
}
function blockTab(){
	var e = event || window.event;
	var keyASCII = parseInt(e.keyCode, 10);
	if (keyASCII == 9)
	return(false);
}
function init(){
	var i, theDiv;
	cacheMath();
	//If interactive, set up interface handles
	if ((typeof(EDITOR) != 'undefined') && (EDITOR ==1)){
			theLineNumbers = document.getElementById('linenumbers');
		for (i=1;i<200;i++)
			theLineNumbers.value+=i+'\r';
		theCode = document.getElementById('code');
		theName = document.getElementById('name');	
		theLoadDiv = document.getElementById('loadDiv');	
		document.onkeydown = keyDownFunction;
		theCode.onfocus = function(){
			window['onkeydown']=function(){};
		}
	}
	//If not interactive, set up spork div
	else{
		theDiv=document.getElementById('spork');
		if ((theDiv != undefined) && (theDiv != null))
			theDiv.innerHTML="<canvas id='drawing' style='border: 1px solid black;position:relative;' width=400 height=400></canvas>";
	}
	//Set up canvas
	theCanvasHandle = document.getElementById('drawing');
	if ((theCanvasHandle != undefined) && (theCanvasHandle != null)){
	if (theCanvasHandle.getContext) 
	       	theCanvas = theCanvasHandle.getContext("2d");
	width=theCanvasHandle.width;
	height=theCanvasHandle.height;
	
	resetTransform();
	mouseX=-1;
	mouseY=-1;
	fillcolor('black');
	color('black');
	linewidth(1);
	theCanvas.lineCap='round';
	theCanvas.lineJoin='round';
	theCanvas.font='40px Courier';

	//Set up mouse events
	theCanvasHandle.onclick=mouseClickFunction;
	theCanvasHandle.onmousedown=mouseDownFunction;
	theCanvasHandle.onmouseup=mouseUpFunction;
	theCanvasHandle.onmouseover=mouseOverFunction;
	theCanvasHandle.onmousemove=mouseMoveFunction;
	theCanvasHandle.onmouseout=mouseOutFunction;
	
	keyDown=false;
	keyCode=-1;
	keyChar=' ';
	altKey=false;
	ctrlKey=false;
	shiftKey=false;

	document.onkeydown=keyDownFunction;
	document.onkeyup=keyUpFunction;
	document.onkeypress=keyPressFunction;
	
	theCanvasHandle.addEventListener('touchstart', mouseDownFunction, false);
	theCanvasHandle.addEventListener('touchend', mouseUpFunction, false);
	theCanvasHandle.addEventListener('touchmove', mouseMoveFunction, false);
	}
	//Start running if not interactive
	if ((typeof(EDITOR) === 'undefined') || (EDITOR==0)){
		setup();
		draw();
		if (CONTINUELOOPING)
			doTheLoop();
	}
}
//set onload function
window.onload=function(){init();}
//End Initialazation ---------------------------------------------------------------------------------------------------------------------------

// storage --------------------------------------------------------------------------------------------------------------------------------
function backup(){
	var fileName = 'SPORK|backup';
	localStorage[fileName]=theCode.value;	
}
function saveCode(){
	var fileName = 'SPORK|'+theName.value;
	localStorage[fileName]=theCode.value;
}
function display(i){
	theCode.value = storedProgram[i];
	theName.value= storedName[i];
//	theLoadDiv.innerHTML ='';
	theLoadDiv.style.display='none';
}
function append(i){
	theCode.value += '\r'+storedProgram[i];
	theName.value= storedName[i];
//	theLoadDiv.innerHTML ='';
	theLoadDiv.style.display='none';
}
function deleteSpork(i){
	localStorage.removeItem('SPORK|'+storedName[i]);
//	theLoadDiv.innerHTML ='';
	theLoadDiv.style.display='none';
}
function loadCode(){
//	theCode.value = localStorage['runCode'];

	var l = localStorage.length;
	var j, key, splitKey, k;
	k=0;
	for (j=0;j<l;j++){
		key=localStorage.key(j);
		splitKey = key.split('|');
		if ((splitKey[0] == 'SPORK')){
			storedName[k]=splitKey[1];
			storedProgram[k]=localStorage[key];
			k++;
		}
	}
	if (k==0)
		theLoadDiv.innerHTML = '<button onclick=\'loadDiv.style.display=\"none\";\'>Cancel</button><br>No programs were found.';
	else{
		var outputString="<button onclick='loadDiv.style.display=\"none\";'>Cancel</button><ul>";
		for (j=0;j<k;j++)
			outputString+="<li>"+storedName[j]+" <a href='javascript:display("+j+");'>Replace</a> or <a href='javascript:append("+j+");'>Append</a> or <a href='javascript:deleteSpork("+j+");'>Delete</a>";
		outputString+='</ul>';
		theLoadDiv.innerHTML=outputString;
	}
	theLoadDiv.style.display='block';
}
// end storage ---------------------------------------------------------------------------------------------------------------------------

// line number issues -------------------------------------------------------------------------------------------------------------------------
function lineup(){
	theLineNumbers.scrollTop = theCode.scrollTop;
}
function sizeup(){
	alert('hello');
	theLineNumbers.style.height = theCode.style.height;
	theLineNumbers.scrollTop = theCode.scrollTop;
}
// end line number issues ---------------------------------------------------------------------------------------------------------------------

//save image-----------------------------------------------------------------------------------------------------------------------------------
function toim(){
	var image=theCanvasHandle.toDataURL("image/png");
	document.getElementById('theImage').src=image;
	imgDiv.style.display='block';
}
//--------------------------------------------------------------------------------------------------------------------------------------
function startover(){
	stoploop();
	setup();
	draw();
	if (CONTINUELOOPING)
		doTheLoop();
}
function fillContainer(){
	window.onresize=function(){startover();}
	var tobj =document.getElementById('spork'); 
	size(tobj.offsetWidth ||  tobj.clientWidth, tobj.offsetHeight || tobj.clientHeight);
}