var comps=[];
var nums=[];
var names=[];
var theComp=0;
var theType=0;
var theVariant=0;

function doit(){
	var i,j,k,l;
	var used=[];
	var adding=[];
	var problemsToAdd=[];
	var r='';
	for (i=0;i<comps.length;i++)
	if (document.getElementById('check'+i).checked){
		r+='\r'+names[i]+'\r';
		r+=r='\\begin{enumerate}\r';
		problemsToAdd=[];
		for (j=0;j<comps[i].length;j++){
			adding=[];
			for (k=0;k<comps[i][j].length;k++)
				used[k]=0;
			while (adding.length < nums[i][j]){
				k=Math.floor(Math.random()*comps[i][j].length);
				while (used[k]!=0)
					k=Math.floor(Math.random()*comps[i][j].length);
				adding[adding.length]=comps[i][j][k];
				used[k]=1;
				}
		for (k=0;k<adding.length;k++)
				problemsToAdd[problemsToAdd.length]=adding[k];
		}
		for (k=0;k<problemsToAdd.length;k++)
			used[k]=0;
		j=0;
		while (j<problemsToAdd.length){
			k=Math.floor(Math.random()*problemsToAdd.length);
			while (used[k] !=0)
				k=Math.floor(Math.random()*problemsToAdd.length);
			r+='\r'+problemsToAdd[k]+'\r';
			used[k]=1;
			j++;
		}
		r+='\\end{enumerate}\r\\eject\r';
	}
	theLatex.value=r;
//	theLatex.style.height = (theLatex.scrollHeight)+"px";
	r=r.replace(/\\item/g, '<li>');
	r=r.replace(/\\begin{enumerate}/g, '<ol>')
	r=r.replace(/\\end{enumerate}/g, '</ol>')
	r=r.replace(/\\begin{quotation}/g, '<center>')
	r=r.replace(/\\end{quotation}/g, '</center>')
	r=r.replace(/\\noindent/g, '')
	r=r.replace(/\\eject/g, '')
	//r=r.replace(/\\\\/g, '<br>')

	thePreview.innerHTML=r;
	MathJax.Hub.Typeset();
}

function showall(){
	var i,j,k,l;
	var used=[];
	var adding=[];
	var problemsToAdd=[];
	var r='';
	for (i=0;i<comps.length;i++)
	if (document.getElementById('check'+i).checked){
		r+='\r'+names[i]+'\r';
		for (j=0;j<comps[i].length;j++){
			r+='\r Type '+j+' ('+nums[i][j]+')'+'\r \\begin{enumerate}\r';
			for (k=0;k<comps[i][j].length;k++)
				r+='\r'+comps[i][j][k]+'\r';
			r+='\\end{enumerate}\r'
		}
	r+='\r\\eject\r';
	}
	theLatex.value=r;
//	theLatex.style.height = (theLatex.scrollHeight)+"px";
	r=r.replace(/\\item/g, '<li>');
	r=r.replace(/\\begin{enumerate}/g, '<ol>')
	r=r.replace(/\\end{enumerate}/g, '</ol>')
	r=r.replace(/\\begin{quotation}/g, '<center>')
	r=r.replace(/\\end{quotation}/g, '</center>')
	r=r.replace(/\\noindent/g, '')
	r=r.replace(/\\eject/g, '')
	//r=r.replace(/\\\\/g, '<br>')

	thePreview.innerHTML=r;
	MathJax.Hub.Typeset();
}
function setup(){
	var i;
	var r='';
	for (i=0;i<comps.length;i++)
		r+='<label for="check'+i+'"> <input type="checkbox" id="check'+i+'"> '+names[i].replace('Competency ', '')+' </label><br>';
	r+="<br><button onclick='doit();'>Create Test</button><button onclick='showall();'>All Types</button>";
	controlPanel.innerHTML=r;
	MathJax.Hub.Typeset();
}
window.onload=function(){setup();}