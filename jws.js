function showDiv(d,t){
	homeDiv.style.display='none';
	scheduleDiv.style.display='none';
	examDiv.style.display='none';
	div122.style.display='none';
	div142.style.display='none';
	div219.style.display='none';
	div365.style.display='none';
	
	homeButton.style.textDecoration='none';
	scheduleButton.style.textDecoration='none';
	examButton.style.textDecoration='none';
	button122.style.textDecoration='none';
	button142.style.textDecoration='none';
	button219.style.textDecoration='none';
	button365.style.textDecoration='none';
	calculatorButton.style.textDecoration='none';
	
	var theDiv = document.getElementById(d);
	theDiv.style.display='block';
	
	t.style.textDecoration='underline';
}

function writeHeader(){
	document.write('\
<div id="masterDiv">\
<div id="topNavDiv"> <div id="topNavDivContent">\
	  <button class="navButton" id="homeButton" onclick="showDiv(\'homeDiv\', this);"> home </button>\
	| <button class="navButton" id="scheduleButton" onclick="showDiv(\'scheduleDiv\', this);"> schedule </button>\
	| <button class="navButton" id="examButton" onclick="showDiv(\'examDiv\', this);"> exams </button> \
	| <button class="navButton" id="button122" onclick="top.location=\'statistics/index.html\';"> 122 </button> \
	| <button class="navButton" id="button142" onclick="top.location=\'m142/index.html\';"> 142 </button> \
	| <button class="navButton" id="button219" onclick="showDiv(\'div219\', this);"> 219 </button> \
	| <button class="navButton" id="button365" onclick="showDiv(\'div365\', this);"> 365 </button> \
	| <button class="navButton" id="calculatorButton" onclick="top.location=\'calculator/index.html\';"> calculator </button> \
</div></div>\
<div id="mainContentDiv">	\
	');
}

function writeFooter(){
	document.write('</div><div id="bottomNavDiv"> </div><div id="banner"><img id="bannerImg" src="png/banner.png"></div></div>');
}