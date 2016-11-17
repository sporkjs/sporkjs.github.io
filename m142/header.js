function showHeader(){
	document.write('\
<div id="masterDiv">\
<div id="topNavDiv"> <div id="topNavDivContent">\
	  <button class="navButton" id="jwsButton" onclick="top.location=\'http://jwsnow.com\';"> jwsnow.com </button>\
	| <button class="navButton" id="homeButton" onclick="top.location=\'index.html\';"> home </button>\
	| <button class="navButton" id="editorButton" onclick="top.location=\'sporkeditor/index.html\';"> spork editor </button>\
	| <button class="navButton" id="linksButton" onclick="top.location=\'studentlinks.html\';"> students </button> \
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