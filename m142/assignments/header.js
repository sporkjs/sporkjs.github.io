function showHeader(){
	document.write('\
<div id="masterDiv">\
	<div id="topNavDiv"> \
	<div id="topNavDivContent">\
	  <a href="http://jwsnow.com"><span class="navButton" id="jwsButton">jwsnow.com</span></a>\
	| <a href="../index.html"><span class="navButton" id="homeButton">home</span></a>\
	| <a href="../sporkeditor/index.html"><span class="navButton" id="editorButton">spork editor</span></a>\
	| <a href="../studentlinks.html"><span class="navButton" id="linksButton">students</span></a> \
</div></div>\
<div id="mainContentDiv">	\
	');
}

function writeShortHeader(){
	document.write('\
<div id="masterDiv">\
<div id="topNavDiv"> <div id="topNavDivContent">math 142\
</div></div>\
<div id="mainContentDiv">	\
	');	
}
function showFooter(){
	document.write('</div><div id="bottomNavDiv"> </div></div>');
}