//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 2.2 Limit Laws';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow  5} \\frac{x-5}{x^2-25}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow  -3} \\frac{x+3}{x^2+4x+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow  -5} \\frac{x^2+3x-10}{x+5}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow  2} \\frac{x^2-7x+10}{x-2}$',
		'\\item Find the limit: $\\lim_{t \\rightarrow  1} \\frac{t^2+t-2}{t^2-1}$',
		'\\item Find the limit: $\\lim_{t \\rightarrow  -1} \\frac{t^2+3t+2}{t^2-t-2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow  -2} \\frac{-2x-4}{x^3+2x^2}$',
		'\\item Find the limit: $\\lim_{y \\rightarrow  0} \\frac{5y^3+8y^2}{3y^4-16y^2}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow  9} \\frac{\\sqrt{x}-3}{x-9}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow  4} \\frac{4x-x^2}{2-\\sqrt{x}}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow  1} \\frac{x-1}{\\sqrt{x+3}-2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow   -1}\\frac{\\sqrt{x^2+x}-3}{x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow  2} \\frac{\\sqrt{x^2+12}-4}{x-2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow  -2} \\frac{x+2}{\\sqrt{x^2+5}-3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow  -3} \\frac{2-\\sqrt{x^2-5}}{x+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow  4} \\frac{4-x}{5-\\sqrt{x^2+9}}$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 2.3 The Precise Definition of a Limit';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Consider the function $f(x)=2x+3$. Then $\\lim_{x \\rightarrow 4}f(x)=11$. Suppose that $\\epsilon=0.01$. Find $\\delta>0$ so that if $0<|x-4|<\\delta$ then $|f(x)-11|<\\epsilon$.',
		'\\item Consider the function $f(x)=3x+4$. Then $\\lim_{x \\rightarrow 5}f(x)=19$. Suppose that $\\epsilon=0.01$. Find $\\delta>0$ so that if $0<|x-5|<\\delta$ then $|f(x)-19|<\\epsilon$.',
		'\\item Consider the function $f(x)=4x+5$. Then $\\lim_{x \\rightarrow 6}f(x)=29$. Suppose that $\\epsilon=0.01$. Find $\\delta>0$ so that if $0<|x-6|<\\delta$ then $|f(x)-29|<\\epsilon$.',
		'\\item Consider the function $f(x)=5x+6$. Then $\\lim_{x \\rightarrow 7}f(x)=41$. Suppose that $\\epsilon=0.01$. Find $\\delta>0$ so that if $0<|x-7|<\\delta$ then $|f(x)-41|<\\epsilon$.',
		'\\item Consider the function $f(x)=6x+7$. Then $\\lim_{x \\rightarrow 8}f(x)=55$. Suppose that $\\epsilon=0.01$. Find $\\delta>0$ so that if $0<|x-8|<\\delta$ then $|f(x)-55|<\\epsilon$.',
		'\\item Consider the function $f(x)=7x+8$. Then $\\lim_{x \\rightarrow 9}f(x)=71$. Suppose that $\\epsilon=0.01$. Find $\\delta>0$ so that if $0<|x-9|<\\delta$ then $|f(x)-71|<\\epsilon$.',
		'\\item Consider the function $f(x)=8x+9$. Then $\\lim_{x \\rightarrow 1}f(x)=17$. Suppose that $\\epsilon=0.01$. Find $\\delta>0$ so that if $0<|x-1|<\\delta$ then $|f(x)-17|<\\epsilon$.',
		'\\item Consider the function $f(x)=9x+1$. Then $\\lim_{x \\rightarrow 2}f(x)=19$. Suppose that $\\epsilon=0.01$. Find $\\delta>0$ so that if $0<|x-2|<\\delta$ then $|f(x)-19|<\\epsilon$.',
		'\\item Consider the function $f(x)= x+2$. Then $\\lim_{x \\rightarrow 3}f(x)=5$. Suppose that $\\epsilon=0.01$. Find $\\delta>0$ so that if $0<|x-3|<\\delta$ then $|f(x)-5|<\\epsilon$.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 2.4 One-Sided Limits';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Consider the function $f(x)$ whose graph is depicted here: \
			\\begin{center}\
			\\includegraphics[height=2in]{png/24a.png}\
			\\end{center}\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 1^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 1^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 1} f(x)$ exist? Explain.\
			\\end{enumerate}		',
		'\\item Consider the function $f(x)$ whose graph is depicted here: \
			\\begin{center}\
			\\includegraphics[height=2in]{png/24a.png}\
			\\end{center}\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 2^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 2^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 2} f(x)$ exist? Explain.\
			\\end{enumerate}		',
		'\\item Consider the function $f(x)$ whose graph is depicted here: \
			\\begin{center}\
			\\includegraphics[height=2in]{png/24a.png}\
			\\end{center}\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 3^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 3^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 3} f(x)$ exist? Explain.\
			\\end{enumerate}	',
		'\\item Consider the function $f(x)$ whose graph is depicted here: \
			\\begin{center}\
			\\includegraphics[height=2in]{png/24b.png}\
			\\end{center}\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 0^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 0^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 0} f(x)$ exist? Explain.\
			\\end{enumerate}		',
		'\\item Consider the function $f(x)$ whose graph is depicted here: \
			\\begin{center}\
			\\includegraphics[height=2in]{png/24b.png}\
			\\end{center}\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 1^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 1^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 1} f(x)$ exist? Explain.\
			\\end{enumerate}		',
		'\\item Consider the function $f(x)$ whose graph is depicted here: \
			\\begin{center}\
			\\includegraphics[height=2in]{png/24c.png}\
			\\end{center}\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 0^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 0^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 0} f(x)$ exist? Explain.\
			\\end{enumerate}		',
		'\\item Consider the function $f(x)$ whose graph is depicted here: \
			\\begin{center}\
			\\includegraphics[height=2in]{png/24c.png}\
			\\end{center}\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 1^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 1^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 1} f(x)$ exist? Explain.\
			\\end{enumerate}		',
		'\\item Consider the function $f(x)$ whose graph is depicted here: \
			\\begin{center}\
			\\includegraphics[height=2in]{png/24c.png}\
			\\end{center}\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 2^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 2^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 2} f(x)$ exist? Explain.\
			\\end{enumerate}						',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Let $f(x)=\\begin{cases} 3-x & x < 2 \\\\ \\frac{x}{2}+1 & x>2\\end{cases}$\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 2^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 2^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 2} f(x)$ exist? Explain.\
			\\end{enumerate}						',
		'\\item Let $f(x)=\\begin{cases} 4-x & x < 2 \\\\ \\frac{x}{2}+1 & x>2\\end{cases}$\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 2^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 2^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 2} f(x)$ exist? Explain.\
			\\end{enumerate}						',
		'\\item Let $f(x)=\\begin{cases} 3-x & x < 2 \\\\ \\frac{x}{2}-1 & x>2\\end{cases}$\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 2^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 2^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 2} f(x)$ exist? Explain.\
			\\end{enumerate}						',
		'\\item Let $f(x)=\\begin{cases} 4-x & x < 2 \\\\ \\frac{x}{2}-1 & x>2\\end{cases}$\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 2^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 2^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 2} f(x)$ exist? Explain.\
			\\end{enumerate}		',
		'\\item Let $f(x)=\\begin{cases} 3-x & x < 2 \\\\ \\frac{x}{2}+1 & x>2\\end{cases}$\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 2^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 2^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 2} f(x)$ exist? Explain.\
			\\end{enumerate}						',
		'\\item Let $f(x)=\\begin{cases} 4-x & x < 0 \\\\ x^2+4 & x>0\\end{cases}$\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 0^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 0^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 0} f(x)$ exist? Explain.\
			\\end{enumerate}						',
		'\\item Let $f(x)=\\begin{cases} 4-x & x < 0 \\\\ x^2-4 & x>0\\end{cases}$\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 0^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 0^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 0} f(x)$ exist? Explain.\
			\\end{enumerate}						',
		'\\item Let $f(x)=\\begin{cases} 1-x & x < 0 \\\\ x^2+1 & x>0\\end{cases}$\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 0^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 0^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 0} f(x)$ exist? Explain.\
			\\end{enumerate}						',
		'\\item Let $f(x)=\\begin{cases} 1-x & x < 0 \\\\ x^2-1 & x>0\\end{cases}$\
			\\begin{enumerate}\
			\\item Find $\\lim_{x \\rightarrow 0^+} f(x)$\
			\\item Find $\\lim_{x \\rightarrow 0^-} f(x)$\
			\\item Does $\\lim_{x \\rightarrow 0} f(x)$ exist? Explain.\
			\\end{enumerate}						',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{\\theta \\rightarrow 0} \\frac{ \\sin(\\theta \\sqrt{2})}{\\theta}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{\\sin(3x)}{x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{\\sin(2x)}{3x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{x}{\\sin(5x)}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{x \\csc(2x)}{\\cos(5x)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{x+x\\cos(x)}{\\sin(x) \\cos(x)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{x^2-x+\\sin(x)}{2x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{\\sin(2x)}{\\sin(5x)}$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 2.6 Limits Involving Infinity';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{2x+3}{5x^2+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{2x^2+7}{x^3-x^2+x+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{x+1}{x^2+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{3x+7}{x^2-2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{7x^2}{x^3-3x^2+6x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{9x^3+x}{2x^4+5x^2-x+6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{10x^5+x^4+31}{x^6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{x^3+7x^2-2}{x^4-x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{3x^7+5x^2-1}{6x^8-7x+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{5x^4-2x^3+9}{3+x-4x^5}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{2x+3}{5x^2+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{2x^2+7}{x^3-x^2+x+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{x+1}{x^2+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{3x+7}{x^2-2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{7x^2}{x^3-3x^2+6x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{9x^3+x}{2x^4+5x^2-x+6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{10x^5+x^4+31}{x^6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{x^3+7x^2-2}{x^4-x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{3x^7+5x^2-1}{6x^8-7x+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{5x^4-2x^3+9}{3+x-4x^5}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{2x^2+3}{5x^2+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{2x^3+7}{x^3-x^2+x+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{x^2+1}{x^2+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{3x^2+7}{x^2-2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{7x^3}{x^3-3x^2+6x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{9x^4+x}{2x^4+5x^2-x+6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{10x^6+x^4+31}{x^6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{x^4+7x^2-2}{x^4-x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{3x^8+5x^2-1}{6x^8-7x+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{5x^5-2x^3+9}{3+x-4x^5}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{2x^2+3}{5x^2+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{2x^3+7}{x^3-x^2+x+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{x^2+1}{x^2+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{3x^2+7}{x^2-2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{7x^3}{x^3-3x^2+6x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{9x^4+x}{2x^4+5x^2-x+6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{10x^6+x^4+31}{x^6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{x^4+7x^2-2}{x^4-x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{3x^8+5x^2-1}{6x^8-7x+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{5x^5-2x^3+9}{3+x-4x^5}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{2x^3+3}{5x^2+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{2x^4+7}{x^3-x^2+x+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{x^3+1}{x^2+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{3x^4+7}{x^2-2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{7x^5}{x^3-3x^2+6x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{9x^6+x}{2x^4+5x^2-x+6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{10x^7+x^4+31}{x^6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{x^6+7x^2-2}{x^4-x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{3x^9+5x^2-1}{6x^8-7x+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{5x^7-2x^3+9}{3+x-4x^5}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{2x^3+3}{5x^2+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{2x^5+7}{x^3-x^2+x+7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{x^3+1}{x^2+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{3x^4+7}{2-x^2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{7x^4}{x^3-3x^2+6x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{9x^6+x}{2x^4+5x^2-x+6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{10x^7+x^4+31}{x^6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{x^6+7x^2-2}{x^4-x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{3x^9+5x^2-1}{6x^8-7x+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{5x^7-2x^3+9}{3+x-4x^5}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\sqrt{\\frac{8x^2-3}{2x^2+8}}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{2\\sqrt{x}+x^{-1}}{3x-7}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{2+\\sqrt{x}}{2-\\sqrt{x}}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{\\sqrt[3]{x}-\\sqrt[5]{x}}{\\sqrt[3]{x}+\\sqrt[5]{x}}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{\\sqrt{x^2+1}}{x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{\\sqrt{2x^2+1}}{7x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{\\sqrt{3x^2+1}}{1-2x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{\\sqrt{4x^2+1}}{1-3x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{\\sqrt{5x^2+1}}{6x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{\\sqrt{x^2+1}}{x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{\\sqrt{2x^2+1}}{7x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{\\sqrt{3x^2+1}}{1-2x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{\\sqrt{4x^2+1}}{1-3x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{\\sqrt{5x^2+1}}{6x+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{x-3}{\\sqrt{4x^2+25}}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{x-3}{\\sqrt{4x^2+25}}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{4-3x^3}{\\sqrt{x^6+9}}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{4-3x^3}{\\sqrt{x^6+9}}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{x^3-2}{|x|^3+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{3x^3-2}{2|x|^3+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{x-1}{|2x+1|}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\frac{3x+5}{|x|+2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{x^3-2}{|x|^3+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{3x^3-2}{2|x|^3+1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{x-1}{|2x+1|}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -\\infty} \\frac{3x+5}{|x|+2}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow -3^+} \\frac{x+2}{x+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -3^-} \\frac{x+2}{x+3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 1^+} \\frac{2-x}{(x-1)^2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 1^-} \\frac{2-x}{(x-1)^2}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0^+} \\frac{x-1}{x^2(x+2)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0^-} \\frac{x-1}{x^2(x+2)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -2^+} \\frac{x-1}{x^2(x+2)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow -2^-} \\frac{x-1}{x^2(x+2)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\pi^-} \\cot(x)$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\pi^+} \\cot(x)$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 2\\pi^-} x \\csc(x)$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 2\\pi^+} x \\csc(x)$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 2^-} \\frac{x^2-2x}{x^2-4x+4}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 2^+} \\frac{x^2-2x}{x^2-4x+4}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 2^+} \\frac{x^2-2x-8}{x^2-5x+6}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 2^-} \\frac{x^2-2x-8}{x^2-5x+6}$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 2.6b Asymptotes';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find all vertical asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{x+2}{x+3}$',
		'\\item Find all vertical asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{2-x}{(x-1)^2}$',
		'\\item Find all vertical asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{x-1}{x^2(x+2)}$',
		'\\item Find all vertical asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{x^2-2x}{x^2-4x+4}$',
		'\\item Find all vertical asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{x^2-2x-8}{x^2-5x+6}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{2\\sqrt{x}+x^{-1}}{3x-7}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{2+\\sqrt{x}}{2-\\sqrt{x}}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{\\sqrt[3]{x}-\\sqrt[5]{x}}{\\sqrt[3]{x}+\\sqrt[5]{x}}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{\\sqrt{x^2+1}}{x+1}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{\\sqrt{2x^2+1}}{7x+1}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{\\sqrt{3x^2+1}}{1-2x}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{\\sqrt{4x^2+1}}{1-3x}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{\\sqrt{5x^2+1}}{6x+1}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{x-3}{\\sqrt{4x^2+25}}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{4-3x^3}{\\sqrt{x^6+9}}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{x^3-2}{|x|^3+1}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{3x^3-2}{2|x|^3+1}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{x-1}{|2x+1|}$',
		'\\item Find all horizontal asymptotes of this function. Your answer must be supported by limits. $f(x)=\\frac{3x+5}{|x|+2}$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 2.5 Continuity';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find all points of discontinuity of this function. Label each as jump, infinite, or removable. You must support your answers with limits. $f(x)=\\frac{x^2-x-2}{x-2}$',
		'\\item Find all points of discontinuity of this function. Label each as jump, infinite, or removable. You must support your answers with limits. $f(x)=\\begin{cases} \\frac{1}{x^2} & x \\neq 0 \\\\ 1 & x= 0\\end{cases}$',
		'\\item Find all points of discontinuity of this function. Label each as jump, infinite, or removable. You must support your answers with limits. $f(x)=\\begin{cases} \\frac{x^2-x-2}{x-2} & x \\neq 2 \\\\ 1 & x=2 \\end{cases}$',
		'\\item Find all points of discontinuity of this function. Label each as jump, infinite, or removable. You must support your answers with limits. $f(x)=\\frac{x^2+2x+1}{x^2-1}$',
		'\\item Find all points of discontinuity of this function. Label each as jump, infinite, or removable. You must support your answers with limits. $f(x)=\\frac{x^2-1}{|x-1|}$',
		'\\item Find all points of discontinuity of this function. Label each as jump, infinite, or removable. You must support your answers with limits. $f(x)=\\frac{|x^2-4|}{x+2}$',
		'\\item Find all points of discontinuity of this function. Label each as jump, infinite, or removable. You must support your answers with limits. $f(x)=\\frac{x^2-5x+6}{x^2-4x+4}$',
		'\\item Find all points of discontinuity of this function. Label each as jump, infinite, or removable. You must support your answers with limits. $f(x)=\\begin{cases} x+1 & x \\leq 1 \\\\ \\frac{1}{x} & 1 < x<3 \\\\ \\sqrt{x-3} & 3 \\leq x\\end{cases}$',
		'\\item Find all points of discontinuity of this function. Label each as jump, infinite, or removable. You must support your answers with limits. $f(x)=\\begin{cases} 1+x^2 & x \\leq 0 \\\\ 2-x & 0 < x \\leq 2 \\\\ (x-2)^2 & 2 < x \\end{cases}$',
		'\\item Find all points of discontinuity of this function. Label each as jump, infinite, or removable. You must support your answers with limits. $f(x)=\\begin{cases} x+2 & x<0 \\\\ 2x^2 & 0 \\leq x \\leq 1 \\\\ 2-x & 1 < x \\end{cases}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item For what value of $a$ is this function continuous everywhere?\
		$$f(x)=\\begin{cases}\
		x^2-1 & x < 3 \\\\ 2ax & x \\geq 3\
		\\end{cases}$$',
		'\\item For what value of $a$ is this function continuous everywhere?\
		$$f(x)=\\begin{cases}\
		x & x<-2 \\\\ ax^2 & x \\geq -2\
		\\end{cases}$$',
		'\\item For what value of $a$ is this function continuous everywhere?\
		$$f(x)=\\begin{cases}\
		x^2-1 & x < 3 \\\\ 2ax & x \\geq 3\
		\\end{cases}$$',
		'\\item For what value of $a$ is this function continuous everywhere?\
		$$f(x)=\\begin{cases}\
		a^2x-2a & x \\geq 2 \\\\ 12 & x < 2\
		\\end{cases}$$',
		'\\item For what value of $a$ is this function continuous everywhere?\
		$$f(x)=\\begin{cases}\
		\\frac{x-1}{a+1} & x < 0 \\\\ x^2+a & x \\geq 0\
		\\end{cases}$$',
		'\\item For what values of $a$ and $b$ is this function continuous everywhere?\
		$$f(x)=\\begin{cases}\
		-2 & x \\leq 1 \\\\ ax-b & -1 < x <1 \\\\ 3 & 1 \\leq x\
		\\end{cases}$$',
		'\\item For what values of $a$ and $b$ is this function continuous everywhere?\
		$$f(x)=\\begin{cases}\
		ax+2b & x \\leq 0 \\\\ x^2+3a-b & 0 < x\\leq 2 \\\\ 3x-5 & 2 < x\
		\\end{cases}$$'
		];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
	'\\item Use the Intermediate Value Theorem to explain why the equation $x=\\cos(x)$ has at least one solution.',
	'\\item Use the Intermediate Value Theorem to explain why the equation $x^3-15x+1=0$ has at least one solution.',
	'\\item Use the Intermediate Value Theorem to explain why the equation $x^3+x+1=0$ has at least one solution.',
	'\\item Use the Intermediate Value Theorem to explain why the equation $x^3-x+1=0$ has at least one solution.',
	'\\item Use the Intermediate Value Theorem to explain why the equation $x^3-3x-1=0$ has at least one solution.',
	'\\item Use the Intermediate Value Theorem to explain why the equation $2x^3-2x^2=2x-1$ has at least one solution.',
	'\\item Use the Intermediate Value Theorem to explain why the equation $x(x-1)^2=1$ has at least one solution.',
	'\\item Use the Intermediate Value Theorem to explain why the equation $x^4+x-3=0$ has at least one solution.',
	'\\item Use the Intermediate Value Theorem to explain why the equation $\\sqrt[3]{x}=1-x$ has at least one solution.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 3.1/3.2 Definition of the Derivative';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Use the definition to find the derivative of $f(x)=4-x^2$ at the point $(-1,3)$.',
		'\\item Use the definition to find the derivative of $f(x)=(x-1)^2+1$ at the point $(1,1)$.',
		'\\item Use the definition to find the derivative of $f(x)=2\\sqrt{x}$ at the point $(1,2)$.',
		'\\item Use the definition to find the derivative of $f(x)=\\frac{1}{x^2}$ at the point $(-1,1)$.',
		'\\item Use the definition to find the derivative of $f(x)=x^3$ at the point $(-2,-8)$.',
		'\\item Use the definition to find the derivative of $f(x)=\\frac{1}{x}$ at the point $(1,1)$.',
		'\\item Use the definition to find the derivative of $f(x)=x-2x^2$ at the point $(1,-1)$.',
		'\\item Use the definition to find the derivative of $f(x)=5x-3x^2$ at the point $(1,2)$.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Use the definition of the derivative to find the derivative of $f(x)=\\sqrt{x}$.',
		'\\item Use the definition of the derivative to find the derivative of $f(x)=\\frac{1}{x}$.',
		'\\item Use the definition of the derivative to find the derivative of $f(x)=\\frac{1}{x^2}$.',
		'\\item Use the definition of the derivative to find the derivative of $f(x)=x^2+x$.',
		'\\item Use the definition of the derivative to show that if $f(x)$ and $g(x)$ are differentiable functions and if $J(x)=f(x)+g(x)$ then $J\'(x)=f\'(x)+g\'(x)$.',
		'\\item Use the definition of the derivative to show that if $f(x)$ and $g(x)$ are differentiable functions and if $J(x)=f(x)-g(x)$ then $J\'(x)=f\'(x)-g\'(x)$.',
		'\\item Use the definition of the derivative to show that if $f(x)$ is differentiable, if $k$ is a constant, and if $J(x)=k \\cdot f(x)$ then $J\'(x)=k \\cdot f\'(x)$.',
		'\\item Use the definition of the derivative to show that if $f(x)=mx+b$ then $f\'(x)=m$. ',
];
//--------------------------------------------------------------------------------------------------
//theType++;
//comps[theComp][theType]=[];
//nums[theComp][theType]=1;
//comps[theComp][theType]=[
//		'\\item Suppose that $f$ is a function which is differentiable at $x=a$. Prove that $f$ is continuous at $x=a$.',
//];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 3.3 Basic Differentiation Rules';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $f(x)=-3x^2+5x-9$',
		'\\item Find the derivative of $y=6t-7+12t^3$',
		'\\item Find the derivative of $g(w)=4w-5w^2+6w^4$',
		'\\item Find the derivative of $y=\\frac{x^3}{2}+\\frac{x^2}{2}+x+1$',
		'\\item Find the derivative of $y=1-2x+3x^2-4x^3$',
		'\\item Find the derivative of $s(t)=2-3t^2+4t^3-5t^4$',
		'\\item Find the derivative of $f(x)=\\frac{1}{3}x^3-\\frac{1}{2}x^2+x-1$',
		'\\item Find the derivative of $y=7x^4-6x^2+2x+6$',
		'\\item Find the derivative of $s(t)=3+8t-9t^3$',
		'\\item Find the derivative of $y=9t^4-3t^2+t-2$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $y=	\\sqrt{x} + \\frac{2}{x^9}-5x^{3/2}+\\frac{5}{\\sqrt{x}}$',
		'\\item Find the derivative of $f(x)=	\\sqrt{x} + \\frac{3}{x^8}-5x^{2/3}+\\frac{6}{\\sqrt{x}}$',
		'\\item Find the derivative of $y=	\\sqrt{x} + \\frac{4}{x^7}-5x^{3/4}+\\frac{7}{\\sqrt{x}}$',
		'\\item Find the derivative of $f(x)=	\\sqrt{x} + \\frac{5}{x^6}-5x^{2/5}+\\frac{8}{\\sqrt{x}}$',
		'\\item Find the derivative of $y=	\\sqrt{x} + \\frac{6}{x^5}-5x^{1/4}+\\frac{9}{\\sqrt{x}}$',
		'\\item Find the derivative of $f(x)=	\\sqrt{x} + \\frac{7}{x^4}-5x^{4/5}+\\frac{2}{\\sqrt{x}}$',
		'\\item Find the derivative of $y=	\\sqrt{x} + \\frac{8}{x^3}-5x^{2/3}+\\frac{3}{\\sqrt{x}}$',
		'\\item Find the derivative of $f(x)=	\\sqrt{x} + \\frac{9}{x^2}-5x^{3/2}+\\frac{4}{\\sqrt{x}}$',
		'\\item Find the derivative of $y=	\\sqrt{x} + \\frac{3}{x^5}-5x^{5/3}+\\frac{5}{\\sqrt{x}}$',
		'\\item Find the derivative of $f(x)=	\\sqrt{x} + \\frac{5}{x^3}-5x^{4/3}+\\frac{3}{\\sqrt{x}}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $f(x)=\\frac{2x+1}{4x+2}$. Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{3x+3}{6x+3}$. Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{4x+5}{8x+4}$. Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{5x+7}{4x+5}$. Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{3x+2}{8x^2+3}$.  Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{5x+4}{6x^2+6}$.  Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{7x+6}{4x^2+3}$.  Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{9x+8}{2x^2+6}$.  Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{5x^2+1}{3x+1}$.  Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{7x^2+4}{7x+2}$.  Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{3x^2+6}{5x+3}$.  Do not simplify.',
		'\\item Find the derivative of $f(x)=\\frac{9x^2+2}{9x+4}$.  Do not simplify.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Use the product rule to find the derivative: $y=(2-3x^2)(x^3+2x^2-5)$. Do not simplify.',
		'\\item Use the product rule to find the derivative: $y=(3-6x^2)(x^3+4x^2-6)$. Do not simplify.',
		'\\item Use the product rule to find the derivative: $y=(4-9x^2)(x^3+6x^2-7)$. Do not simplify.',
		'\\item Use the product rule to find the derivative: $y=(5-2x^2)(x^3+8x^2-6)$. Do not simplify.',
		'\\item Use the product rule to find the derivative: $y=(6-4x^2)(x^3+3x^2-5)$. Do not simplify.',
		'\\item Use the product rule to find the derivative: $y=(7-6x^2)(x^3+6x^2-4)$. Do not simplify.',
		'\\item Use the product rule to find the derivative: $y=(8-8x^2)(x^3+9x^2-3)$. Do not simplify.',
		'\\item Use the product rule to find the derivative: $y=(9-5x^2)(x^3+7x^2-2)$. Do not simplify.',
		'\\item Use the product rule to find the derivative: $y=(5-7x^2)(x^3+3x^2-4)$. Do not simplify.',
		'\\item Use the product rule to find the derivative: $y=(7-9x^2)(x^3+5x^2-7)$. Do not simplify.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 3.3b Tangent Lines';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find an equation of the line tangent to the graph of $y=2x^2+6x+2$ at the point where $x=1$.',
		'\\item Find an equation of the line tangent to the graph of $y=3x^2+5x+3$ at the point where $x=2$.',
		'\\item Find an equation of the line tangent to the graph of $y=4x^2+4x+5$ at the point where $x=3$.',
		'\\item Find an equation of the line tangent to the graph of $y=5x^2+3x+7$ at the point where $x=4$.',
		'\\item Find an equation of the line tangent to the graph of $y=6x^2+2x+9$ at the point where $x=5$.',
		'\\item Find an equation of the line tangent to the graph of $y=2x^3+6x^2+3x$ at the point where $x=1$.',
		'\\item Find an equation of the line tangent to the graph of $y=3x^3+5x^2+5x$ at the point where $x=2$.',
		'\\item Find an equation of the line tangent to the graph of $y=4x^3+4x^2+7x$ at the point where $x=3$.',
		'\\item Find an equation of the line tangent to the graph of $y=5x^3+3x^2+9x$ at the point where $x=2$.',
		'\\item Find an equation of the line tangent to the graph of $y=6x^3+2x^2+4x$ at the point where $x=2$.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the $x$ values of all points on the graph of $y=2x^3+7x^2+4x+1$ where the tangent line is horizontal.',
		'\\item Find the $x$ values of all points on the graph of $y=x^3+7x^2+8x+2$ where the tangent line is horizontal.',
		'\\item Find the $x$ values of all points on the graph of $y=x^3+5x^2+8x+3$ where the tangent line is horizontal.',
		'\\item Find the $x$ values of all points on the graph of $y=x^3+4x^2+4x+4$ where the tangent line is horizontal.',
		'\\item Find the $x$ values of all points on the graph of $y=3x^3+10x^2+4x+5$ where the tangent line is horizontal.',
		'\\item Find the $x$ values of all points on the graph of $y=2x^3-9x^2+12 x+4$ where the tangent line is horizontal.',
		'\\item Find the $x$ values of all points on the graph of $y=2x^3-12x^2+24x+1$ where the tangent line is horizontal.',
		'\\item Find the $x$ values of all points on the graph of $y=2x^3-15x^2+36x+3$ where the tangent line is horizontal.',
		'\\item Find the $x$ values of all points on the graph of $y=2x^3-12x^2+18x+2$ where the tangent line is horizontal.',
		'\\item Find the $x$ values of all points on the graph of $y=2x^3-6x^2+6x+1$ where the tangent line is horizontal.',
		'\\item Find the $x$ values of all points on the graph of $y=2x^3-18x^2+54x-9$ where the tangent line is horizontal.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 3.4 The Derivative as a Rate of Change';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
	'\\item Consider the position function $s(t)=t^3-3t+2$ for $0 \\leq t \\leq 2$ of a body moving on a number line with $t$ measured in seconds and $s$ measured in meters. \\begin{enumerate} \\item Find the body\'s displacement and average velocity on the time interval. \\item Find the body\'s velocity and acceleration at the end of the time interval. When, if ever, does the body change direction? \\end{enumerate}',
	'\\item Consider the position function $s(t)=t^3-12t+5$ for $0 \\leq t \\leq 3$ of a body moving on a number line with $t$ measured in seconds and $s$ measured in meters. \\begin{enumerate} \\item Find the body\'s displacement and average velocity on the time interval. \\item Find the body\'s velocity and acceleration at the end of the time interval. When, if ever, does the body change direction? \\end{enumerate}',
	'\\item Consider the position function $s(t)=t^3-27t+13$ for $0 \\leq t \\leq 4$ of a body moving on a number line with $t$ measured in seconds and $s$ measured in meters. \\begin{enumerate} \\item Find the body\'s displacement and average velocity on the time interval. \\item Find the body\'s velocity and acceleration at the end of the time interval. When, if ever, does the body change direction? \\end{enumerate}',
	'\\item Consider the position function $s(t)=t^3-3t+5$ for $0 \\leq t \\leq 2$ of a body moving on a number line with $t$ measured in seconds and $s$ measured in meters. \\begin{enumerate} \\item Find the body\'s displacement and average velocity on the time interval. \\item Find the body\'s velocity and acceleration at the end of the time interval. When, if ever, does the body change direction? \\end{enumerate}',
	'\\item Consider the position function $s(t)=6t-t^2$ for $0 \\leq t \\leq 6$ of a body moving on a number line with $t$ measured in seconds and $s$ measured in meters. \\begin{enumerate} \\item Find the body\'s displacement and average velocity on the time interval. \\item Find the body\'s velocity and acceleration at the end of the time interval. When, if ever, does the body change direction?  \\end{enumerate}',
	'\\item Consider the position function $s(t)=2t-t^2$ for $0 \\leq t \\leq 6$ of a body moving on a number line with $t$ measured in seconds and $s$ measured in meters. \\begin{enumerate} \\item Find the body\'s displacement and average velocity on the time interval. \\item Find the body\'s velocity and acceleration at the end of the time interval. When, if ever, does the body change direction? \\end{enumerate}',
	'\\item Consider the position function $s(t)=4t-t^2$ for $0 \\leq t \\leq 6$ of a body moving on a number line with $t$ measured in seconds and $s$ measured in meters. \\begin{enumerate} \\item Find the body\'s displacement and average velocity on the time interval. \\item Find the body\'s velocity and acceleration at the end of the time interval. When, if ever, does the body change direction? \\end{enumerate}',
	'\\item Consider the position function $s(t)=6t-t^2$ for $0 \\leq t \\leq 6$ of a body moving on a number line with $t$ measured in seconds and $s$ measured in meters. \\begin{enumerate} \\item Find the body\'s displacement and average velocity on the time interval. \\item Find the body\'s velocity and acceleration at the end of the time interval. When, if ever, does the body change direction? \\end{enumerate}',
	'\\item Consider the position function $s(t)=8t-t^2$ for $0 \\leq t \\leq 6$ of a body moving on a number line with $t$ measured in seconds and $s$ measured in meters. \\begin{enumerate} \\item Find the body\'s displacement and average velocity on the time interval. \\item Find the body\'s velocity and acceleration at the end of the time interval. When, if ever, does the body change direction?	 \\end{enumerate}			',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 3.5 Derivatives of Trig Functions';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $f(x)=2 \\sin(x) +3 \\csc(x)+4\\tan(x)$.',
		'\\item Find the derivative of $f(x)=3 \\sin(x) +5 \\sec(x)+6\\cot(x)$.',
		'\\item Find the derivative of $f(x)=4 \\cos(x) +7 \\sec(x)+8\\tan(x)$.',
		'\\item Find the derivative of $f(x)=5 \\cos(x) +9 \\csc(x)+2\\tan(x)$.',
		'\\item Find the derivative of $f(x)=6 \\cos(x) +7 \\csc(x)+4\\cot(x)$.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $f(x)=\\sin(x) \\sec(x)$.',
		'\\item Find the derivative of $f(x)=\\sin(x) \\csc(x)$.',
		'\\item Find the derivative of $f(x)=\\sin(x) \\cot(x)$.',
		'\\item Find the derivative of $f(x)=\\sin(x) \\tan(x)$.',
		'\\item Find the derivative of $f(x)=\\cos(x) \\sec(x)$.',
		'\\item Find the derivative of $f(x)=\\cos(x) \\csc(x)$.',
		'\\item Find the derivative of $f(x)=\\cos(x) \\tan(x)$.',
		'\\item Find the derivative of $f(x)=\\cos(x) \\cot(x)$.',
		'\\item Find the derivative of $f(x)=\\cos(x) \\sin(x)$.',
		'\\item Find the derivative of $f(x)=x^2 \\sin(x)$.',
		'\\item Find the derivative of $f(x)=x^2 \\cos(x)$.',
		'\\item Find the derivative of $f(x)=x^2 \\sec(x)$.',
		'\\item Find the derivative of $f(x)=x^2 \\csc(x)$.',
		'\\item Find the derivative of $f(x)=x^2 \\tan(x)$.',
		'\\item Find the derivative of $f(x)=x^2 \\cot(x)$.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $f(x)=\\frac{2x+7}{\\sin(x)+2x}$.',
		'\\item Find the derivative of $f(x)=\\frac{3x+6}{\\cos(x)+4x}$.',
		'\\item Find the derivative of $f(x)=\\frac{4x+5}{\\csc(x)+6x}$.',
		'\\item Find the derivative of $f(x)=\\frac{5x+4}{\\sec(x)+8x}$.',
		'\\item Find the derivative of $f(x)=\\frac{6x+3}{\\cot(x)+3x}$.',
		'\\item Find the derivative of $f(x)=\\frac{7x+2}{\\tan(x)+9x}$.',
		'\\item Find the derivative of $f(x)=\\frac{\\sin(x)+2x}{2x+7}$.',
		'\\item Find the derivative of $f(x)=\\frac{\\cos(x)+4x}{3x+6}$.',
		'\\item Find the derivative of $f(x)=\\frac{\\csc(x)+6x}{4x+5}$.',
		'\\item Find the derivative of $f(x)=\\frac{\\sec(x)+8x}{5x+4}$.',
		'\\item Find the derivative of $f(x)=\\frac{\\cot(x)+3x}{6x+3}$.',
		'\\item Find the derivative of $f(x)=\\frac{\\tan(x)+9x}{7x+2}$.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find all $x$ values in the interval $[0,2 \\pi]$ where the graph of $y=x+2 \\sin(x)$ has a horizontal tangent.',
		'\\item Find all $x$ values in the interval $[0,2 \\pi]$ where the graph of $y=x+ 2 \\cos(x)$ has a horizontal tangent.',
		'\\item Find all $x$ values in the interval $[0,2 \\pi]$ where the graph of $y=x \\sqrt{3} +2 \\sin(x)$ has a horizontal tangent.',
		'\\item Find all $x$ values in the interval $[0,2 \\pi]$ where the graph of $y=x \\sqrt{3} + 2 \\cos(x)$ has a horizontal tangent.',
		'\\item Find all $x$ values in the interval $[0,2 \\pi]$ where the graph of $y=x+ \\sin(x) \\sqrt{2}$ has a horizontal tangent.',
		'\\item Find all $x$ values in the interval $[0,2 \\pi]$ where the graph of $y=x+ \\cos(x) \\sqrt{2}$ has a horizontal tangent.',
		'\\item Find all $x$ values in the interval $[0,2 \\pi]$ where the graph of $y=\\cos(x) + \\sin(x)$ has a horizontal tangent.',
		'\\item Find all $x$ values in the interval $[0,2 \\pi]$ where the graph of $y=\\cos(x) + \\sin(x) \\sqrt{3}$ has a horizontal tangent.',
		'\\item Find all $x$ values in the interval $[0,2 \\pi]$ where the graph of $y=\\sin(x) + \\cos(x) \\sqrt{3}$ has a horizontal tangent.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 3.6 Chain Rule';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $f(x)=\\left( 3x^2+\\sin(x) \\right)^2$',
		'\\item Find the derivative of $f(x)=\\left( 4x^2+\\cos(x) \\right)^3$',
		'\\item Find the derivative of $f(x)=\\left( 5^2+\\sec(x) \\right)^{-2}$',
		'\\item Find the derivative of $f(x)=\\left( 6x^2+\\tan(x) \\right)^{-3}$',
		'\\item Find the derivative of $f(x)=\\frac{1}{\\left( 3x^2+\\sin(x) \\right)^2}$',
		'\\item Find the derivative of $f(x)=\\frac{1}{\\left( 4x^2+\\cos(x) \\right)^3}$',
		'\\item Find the derivative of $f(x)=\\frac{1}{\\left( 5^2+\\sec(x) \\right)^{2}}$',
		'\\item Find the derivative of $f(x)=\\frac{1}{\\left( 6x^2+\\tan(x) \\right)^{3}}$',
		'\\item Find the derivative of $f(x)=\\sqrt{2x^2+\\tan(x)}$',
		'\\item Find the derivative of $f(x)=\\sqrt{3x^2+\\cos(x)}$',
		'\\item Find the derivative of $f(x)=\\sqrt{4x^2+\\sin(x)}$',
		'\\item Find the derivative of $f(x)=\\sqrt{6x^2+\\sec(x)}$',
		'\\item Find the derivative of $f(x)=\\frac{1}{\\sqrt{2x^2+\\tan(x)}}$',
		'\\item Find the derivative of $f(x)=\\frac{1}{\\sqrt{3x^2+\\cos(x)}}$',
		'\\item Find the derivative of $f(x)=\\frac{1}{\\sqrt{4x^2+\\sin(x)}}$',
		'\\item Find the derivative of $f(x)=\\frac{1}{\\sqrt{6x^2+\\sec(x)}}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $f(x)=\\sin(2x^3+8x^2-4x-5)$',
		'\\item Find the derivative of $f(x)=\\cos(3x^3+7x^2-5x-9)$',
		'\\item Find the derivative of $f(x)=\\tan(4x^3+6x^2-6x-8)$',
		'\\item Find the derivative of $f(x)=\\sec(5x^3+5x^2-7x-7)$',
		'\\item Find the derivative of $f(x)=\\csc(6x^3+4x^2-8x-6)$',
		'\\item Find the derivative of $f(x)=\\cot(7x^3+3x^2-9x-5)$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $f(x)=x^2 \\sin(2x+8)$',
		'\\item Find the derivative of $f(x)=x^2 \\cos(3x+7)$',
		'\\item Find the derivative of $f(x)=x^2 \\tan(4x+6)$',
		'\\item Find the derivative of $f(x)=x^2 \\cot(5x+5)$',
		'\\item Find the derivative of $f(x)=x^2 \\sec(6x+4)$',
		'\\item Find the derivative of $f(x)=x^2 \\csc(7x+3)$',
		'\\item Find the derivative of $f(x)=\\sin(x) \\sin(2x+8)$',
		'\\item Find the derivative of $f(x)=\\cos(x) \\cos(3x+7)$',
		'\\item Find the derivative of $f(x)=\\tan(x) \\tan(4x+6)$',
		'\\item Find the derivative of $f(x)=\\cot(x) \\cot(5x+5)$',
		'\\item Find the derivative of $f(x)=\\sec(x) \\sec(6x+4)$',
		'\\item Find the derivative of $f(x)=\\csc(x) \\csc(7x+3)$',
		'\\item Find the derivative of $f(x)=\\sin(x) \\sqrt{x^2+1}$',
		'\\item Find the derivative of $f(x)=\\cos(x) \\sqrt{x^2+1}$',
		'\\item Find the derivative of $f(x)=\\tan(x) \\sqrt{x^2+1}$',
		'\\item Find the derivative of $f(x)=\\cot(x) \\sqrt{x^2+1}$',
		'\\item Find the derivative of $f(x)=\\sec(x) \\sqrt{x^2+1}$',
		'\\item Find the derivative of $f(x)=\\csc(x) \\sqrt{x^2+1}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $f(x)=\\frac{x^2}{ \\sin(2x+8)}$',
		'\\item Find the derivative of $f(x)=\\frac{x^2 }{\\cos(3x+7)}$',
		'\\item Find the derivative of $f(x)=\\frac{x^2}{ \\tan(4x+6)}$',
		'\\item Find the derivative of $f(x)=\\frac{x^2}{ \\cot(5x+5)}$',
		'\\item Find the derivative of $f(x)=\\frac{x^2}{ \\sec(6x+4)}$',
		'\\item Find the derivative of $f(x)=\\frac{x^2}{ \\csc(7x+3)}$',
		'\\item Find the derivative of $f(x)=\\frac{\\sin(x) }{\\sin(2x+8)}$',
		'\\item Find the derivative of $f(x)=\\frac{\\cos(x)}{ \\cos(3x+7)}$',
		'\\item Find the derivative of $f(x)=\\frac{\\tan(x) }{\\tan(4x+6)}$',
		'\\item Find the derivative of $f(x)=\\frac{\\cot(x) }{\\cot(5x+5)}$',
		'\\item Find the derivative of $f(x)=\\frac{\\sec(x) }{\\sec(6x+4)}$',
		'\\item Find the derivative of $f(x)=\\frac{\\csc(x) }{\\csc(7x+3)}$',
		'\\item Find the derivative of $f(x)=\\frac{\\sin(x) }{\\sqrt{x^2+1}}$',
		'\\item Find the derivative of $f(x)=\\frac{\\cos(x)}{ \\sqrt{x^2+1}}$',
		'\\item Find the derivative of $f(x)=\\frac{\\tan(x) }{\\sqrt{x^2+1}}$',
		'\\item Find the derivative of $f(x)=\\frac{\\cot(x) }{\\sqrt{x^2+1}}$',
		'\\item Find the derivative of $f(x)=\\frac{\\sec(x) }{\\sqrt{x^2+1}}$',
		'\\item Find the derivative of $f(x)=\\frac{\\csc(x) }{\\sqrt{x^2+1}}$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 3.7 Implicit Differentiation';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find $\\frac{dy}{dx}$ if $x^2y+xy^2=6$',
		'\\item Find $\\frac{dy}{dx}$ if $2xy+y^2=x+y$',
		'\\item Find $\\frac{dy}{dx}$ if $x^2(x-y)^2=x^2-y^2$',
		'\\item Find $\\frac{dy}{dx}$ if $y^2=\\frac{x-1}{x+1}$',
		'\\item Find $\\frac{dy}{dx}$ if $x=\\sec(y)$',
		'\\item Find $\\frac{dy}{dx}$ if $x+\\tan(xy)=0$',
		'\\item Find $\\frac{dy}{dx}$ if $x^3+y^3=18xy$',
		'\\item Find $\\frac{dy}{dx}$ if $x^3-xy+y^3=1$',
		'\\item Find $\\frac{dy}{dx}$ if $(3xy+y)^2=6y$',
		'\\item Find $\\frac{dy}{dx}$ if $x^3=\\frac{2x-y}{x+3y}$',
		'\\item Find $\\frac{dy}{dx}$ if $xy=\\cot(xy)$',
		'\\item Find $\\frac{dy}{dx}$ if $x^4+\\sin(y)=x^3y^2$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the lines that are tangent and normal to the graph of $x^2+xy-y^2=1$ at the point $(2,3)$.',
		'\\item Find the lines that are tangent and normal to the graph of $x^2+y^2=25$ at the point $(3,-4)$.',
		'\\item Find the lines that are tangent and normal to the graph of $x^2y^2=9$ at the point $(-1,3)$.',
		'\\item Find the lines that are tangent and normal to the graph of $y^2-2x-4y-1=0$ at the point $(-2,1)$.',
		'\\item Find the lines that are tangent and normal to the graph of $6x^2+3xy+2y^2+17y-6=0$ at the point $(-1,0)$.',
		'\\item Find the lines that are tangent and normal to the graph of $x^2-xy\\sqrt{3}+2y^2=5$ at the point $(\\sqrt{3},2)$.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 3.8 Related Rates';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
	'\\item When a circular metal plate is heated on an oven, its radius increases at a rate of $0.01cm/min$. At what rate is the plate\'s area increasing when the radius is $50cm$?',
	'\\item The length of a rectangle is decreasing at a rate of $2cm/sec$ while the width is increasing at a rate of $2cm/sec$. Find the rate of change in the area of the rectangle when the length is $12cm$ and the width is $5cm$.',
	'\\item The length of a rectangle is decreasing at a rate of $2cm/sec$ while the width is increasing at a rate of $2cm/sec$. Find the rate of change in the length of the diagonal of the rectangle when the length is $12cm$ and the width is $5cm$.',
	'\\item A $13ft$ ladder is leaning against the side of a house when its base starts to slide away. By the time the base is $12ft$ from the house, the base is moving at a rater of $5ft/sec$. How fast is the top of the ladder sliding down the wall then?',
	'\\item A $13ft$ ladder is leaning against the side of a house when its base starts to slide away. By the time the base is $12ft$ from the house, the base is moving at a rater of $5ft/sec$. At what rate is the angle $\\theta$ between the ladder and the ground changing then?',
	'\\item A girl flies a kite at a height of $300ft$. The wind carries the kite horizontally away from her at a rate of $25ft/sec$. How fast must she let out the string when the kite is $500ft$ from her (diagonally)?',
	'\\item The mechanics at Lincoln Automotive are reboring a $6in$ deep cylinder to fit a new piston. The machine they are using increases the cylinder\'s radius by $.001in$ every three minutes. How rapidly is the cylinder volume increasing when the bore diameter is $3.800in$?',
	'\\item Sand falls from a conveyor belt at a rate of $10ft^3/min$ onto the top of a conical pile. The height of the pile is always $3/8$ of the base diameter. How fast is the height of the pile changing when the pile is $4m$ high?',
	'\\item Sand falls from a conveyor belt at a rate of $10ft^3/min$ onto the top of a conical pile. The height of the pile is always $3/8$ of the base diameter. How fast is the radius of the base of the pile changing when the pile is $4m$ high?',
	'\\item Water is flowing at a rate of $50m^3/min$ from a shallow concrete conical reservoir (pointed down) of base radius $45m$ and height $6m$. How fast is the water level falling when the water is $5m$ deep?',
	'\\item Suppose that a drop of mist is a perfect sphere and that, through condensation, the drop picks up moisture at a rate proportional to its surface area. Show that under these conditions the drop\'s radius increases at a constant rate.',
	'\\item A balloon is rising vertically above a level, straight road at a constant rate of $1ft/sec$. Just when the balloon is $65ft$ above the ground, a bicycle moving at a constant rate of $17ft/sec$ passes under it. How fast is the distance between the bike and the balloon increasing $3sec$ later?',
	'\\item A particle moves along the parabola $y=x^2$ in the first quadrant in such a way that its $x$-coordinate increases at a constant $10m/sec$. How fast is the $y$-coordinate changing when $x=3m$?',
	'\\item A spherical iron ball $8in$ in diameter is coated with a layer of ice of uniform thickness. If the ice melts at a rate of $10in^3/min$, how fast is the thickness of the ice decreasing when it is $2in$ thick?',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 3.9 Linearization and Differentials';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{17}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{15}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{24}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{26}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{35}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{37}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{48}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{50}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{63}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{65}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{80}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{82}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{99}$',
	'\\item Use a linearization of $f(x)=\\sqrt{x}$ to approximate $\\sqrt{101}$',
	'\\item Use a linearization of $f(x)=\\sqrt[3]{x}$ to approximate $\\sqrt[3]{7}$	',
	'\\item Use a linearization of $f(x)=\\sqrt[3]{x}$ to approximate $\\sqrt[3]{9}$	',
	'\\item Use a linearization of $f(x)=\\sqrt[3]{x}$ to approximate $\\sqrt[3]{26}$	',
	'\\item Use a linearization of $f(x)=\\sqrt[3]{x}$ to approximate $\\sqrt[3]{28}$	',
	'\\item Use a linearization of $f(x)=\\sqrt[3]{x}$ to approximate $\\sqrt[3]{63}$	',
	'\\item Use a linearization of $f(x)=\\sqrt[3]{x}$ to approximate $\\sqrt[3]{65}$	',
	'\\item Use a linearization of $f(x)=\\sqrt[3]{x}$ to approximate $\\sqrt[3]{124}$	',
	'\\item Use a linearization of $f(x)=\\sqrt[3]{x}$ to approximate $\\sqrt[3]{126}$	',
];
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 4.1 Extreme Values of Functions';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the absolute minimum and maximum values of $f(x)=2x^3+7x^2+4x+1$on the interval $[-3,-1]$. Give the extreme values and where they occur.',
		'\\item Find the absolute minimum and maximum values of $f(x)=x^3+7x^2+8x+2$on the interval $[-6,-1]$. Give the extreme values and where they occur.',
		'\\item Find the absolute minimum and maximum values of $f(x)=x^3+5x^2+8x+3$on the interval $[-3,-2]$. Give the extreme values and where they occur.',
		'\\item Find the absolute minimum and maximum values of $f(x)=x^3+4x^2+4x+4$on the interval $[-4,-1]$. Give the extreme values and where they occur.',
		'\\item Find the absolute minimum and maximum values of $f(x)=3x^3+10x^2+4x+5$on the interval $[-4,-1]$. Give the extreme values and where they occur.',
		'\\item Find the absolute minimum and maximum values of $f(x)=2x^3-9x^2+12 x+4$on the interval $[0,4]$. Give the extreme values and where they occur.',
		'\\item Find the absolute minimum and maximum values of $f(x)=2x^3-12x^2+24x+1$on the interval $[0,4]$. Give the extreme values and where they occur.',
		'\\item Find the absolute minimum and maximum values of $f(x)=2x^3-15x^2+36x+3$on the interval $[0,4]$. Give the extreme values and where they occur.',
		'\\item Find the absolute minimum and maximum values of $f(x)=2x^3-12x^2+18x+2$on the interval $[0,4]$. Give the extreme values and where they occur.',
		'\\item Find the absolute minimum and maximum values of $f(x)=2x^3-6x^2+6x+1$on the interval $[0,4]$. Give the extreme values and where they occur.',
		'\\item Find the absolute minimum and maximum values of $f(x)=2x^3-18x^2+54x-9$on the interval $[0,4]$. Give the extreme values and where they occur.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the absolute maximum and minimum values of $f(x)=\\sin(x) - \\cos(x)$ on the interval $[0, 2\\pi]$. Give the extreme values and where they occur.		',
		'\\item Find the absolute maximum and minimum values of $f(x)=\\cos(x) - \\sin(x)$ on the interval $[0, 2\\pi]$. Give the extreme values and where they occur.		',
		'\\item Find the absolute maximum and minimum values of $f(x)=\\cos(x) + \\sin(x)$ on the interval $[0, 2\\pi]$. Give the extreme values and where they occur.',
		'\\item Find the absolute maximum and minimum values of $f(x)=\\cos(x) + \\sin(x) \\sqrt{3}$ on the interval $[0, 2\\pi]$. Give the extreme values and where they occur.',
		'\\item Find the absolute maximum and minimum values of $f(x)=\\sin(x) + \\cos(x) \\sqrt{3}$ on the interval $[0, 2\\pi]$. Give the extreme values and where they occur.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 4.2 Mean Value Theorem';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=5-12x+3x^2$ guaranteed by the Mean Value theorem on the interval $[1,3]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=x^3-x^2-6x+2$ guaranteed by the Mean Value theorem on the interval $[0,3]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=\\sqrt{x}-\\frac{x}{3}$ guaranteed by the Mean Value theorem on the interval $[0,9]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=2x^2-3x+1$ guaranteed by the Mean Value theorem on the interval $[0,2]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=x^3-3x+2$ guaranteed by the Mean Value theorem on the interval $[-2,2]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=\\sqrt[3]{x}$ guaranteed by the Mean Value theorem on the interval $[0,1]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=\\frac{1}{x}$ guaranteed by the Mean Value theorem on the interval $[1,3]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=\\sqrt{x}$ guaranteed by the Mean Value theorem on the interval $[0,4]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=x^3-2x$ guaranteed by the Mean Value theorem on the interval $[-2,2]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=x^2+2x-1$ guaranteed by the Mean Value theorem on the interval $[0,1]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=x^{2/3}$ guaranteed by the Mean Value theorem on the interval $[0,1]$.',
		'\\item Find the $x$-coordinates of the points on the graph of $f(x)=x+\\frac{1}{x}$ guaranteed by the Mean Value theorem on the interval $\\left[ \\frac{1}{2}, 2\\right]$.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Prove that the equation $2x+\\cos(x)=0$ has exactly one real solution.',
		'\\item Prove that the equation $2x-1-\\sin(x)=0$ has exactly one real solution.',
		'\\item Prove that the equation $x^4+3x+1=0$ has exactly one real solution in the interval $[-2,-1]$.',
		'\\item Prove that the equation $x^3+\\frac{4}{x^2}+7=0$ has exactly one real solution in the interval $(-\\infty,0)$.',
		'\\item Prove that the equation $2x-\\cos^2(x)+\\sqrt{2}=0$ has exactly one real solution.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 4.3 Monotonicity and the First Derivative Test';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Use the first derivative to analyze the function $f(x)=x^4-4x^3$. ',
		'\\item Use the first derivative to analyze the function $f(x)=2x^3+3x^2-36x$. ',
		'\\item Use the first derivative to analyze the function $f(x)=4x^3+3x^2-6x+1$. ',
		'\\item Use the first derivative to analyze the function $f(x)=x^4-2x^2+3$. ',
		'\\item Use the first derivative to analyze the function $f(x)=1+3x^2-2x^3$. ',
		'\\item Use the first derivative to analyze the function $f(x)=x^3-12x+2$. ',
		'\\item Use the first derivative to analyze the function $f(x)=2+2x^2-x^4$. ',
		'\\item Use the first derivative to analyze the function $f(x)=36x+3x^2-2x^3$. ',
		'\\item Use the first derivative to analyze the function $f(x)=200+8x^3+x^4$. ',
		'\\item Use the first derivative to analyze the function $f(x)=5x^3-3x^5$. ',
		'\\item Use the first derivative to analyze the function $f(x)=2x^2-x^3$.',
		'\\item Use the first derivative to analyze the function $f(x)=2x^3-18x$.',
		'\\item Use the first derivative to analyze the function $f(x)=3x^2-4x^3$.',
		'\\item Use the first derivative to analyze the function $f(x)=6x-x^3$.',
		'\\item Use the first derivative to analyze the function $f(x)=x^4-8x^2$.',
		'\\item Use the first derivative to analyze the function $f(x)=x^4-4x^3+4x^2$.',
		'\\item Use the first derivative to analyze the function $f(x)=15x^3-x^5$.',
		'\\item Use the first derivative to analyze the function $f(x)=12x-x^3$.',
		'\\item Use the first derivative to analyze the function $f(x)=x^3-3x^2$.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Use the first derivative to analyze the function $f(x)=x-6\\sqrt{x-1}$.',
		'\\item Use the first derivative to analyze the function $f(x)=4 \\sqrt{x}-x^2+3$.',
		'\\item Use the first derivative to analyze the function $f(x)=x \\sqrt{8-x^2}$.',
		'\\item Use the first derivative to analyze the function $f(x)=x^2\\sqrt{5-x}$.',
		'\\item Use the first derivative to analyze the function $f(x)=\\frac{x^2-3}{x-2}$.',
		'\\item Use the first derivative to analyze the function $f(x)=\\frac{x^3}{3x^2+1}$.',
		'\\item Use the first derivative to analyze the function $f(x)=x^{1/3}(x+8)$.',
		'\\item Use the first derivative to analyze the function $f(x)=x^{2/3}(x+5)$.',
		'\\item Use the first derivative to analyze the function $f(x)=x^{1/3}(x^2-4)$.',
		'\\item Use the first derivative to analyze the function $f(x)=x^{2/3}(x^2-1)$.',
		'\\item Use the first derivative to analyze the function $f(x)=\\frac{x-2}{x^2-1}$.',
		'\\item Use the first derivative to analyze the function $f(x)=\\frac{x^2}{4-x^2}$.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Use the first derivative to analyze the function $f(x)=sin(x)-\\cos(x)$ on the interval $[0,2\\pi]$.',
		'\\item Use the first derivative to analyze the function $f(x)=\\sqrt{3} \\cos(x) + \\sin(x)$ on the interval $[0, 2 \\pi]$.',
		'\\item Use the first derivative to analyze the function $f(x)=\\tan(x)-2x$ on the interval $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2} \\right)$.',
		'\\item Use the first derivative to analyze the function $f(x)=2\\cos(x)+\\cos^2(x)$ on the interval $[-\\pi,\\pi]$.',
		'\\item Use the first derivative to analyze the function $f(x)=\\csc^2(x)-2\\cot(x)$ on the interval $[0,\\pi]$.',
		'\\item Use the first derivative to analyze the function $f(x)=\\sec^2(x)-2 \\tan(x)$ on the interval $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2} \\right)$.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 4.4 Concavity and Curve Sketching';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Use the first and second derivatives to analyze $f(x)=x^3-3x+3$',
		'\\item Use the first and second derivatives to analyze $f(x)=x(6-2x)^2$',
		'\\item Use the first and second derivatives to analyze $f(x)=-2x^3+6x^2-3$',
		'\\item Use the first and second derivatives to analyze $f(x)=1-9x-6x^2-x^3$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^2(x^2-2)$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^2(6-x^2)$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^3(4-x)$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^3(x+2)$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^4(x-5)$',
		'\\item Use the first and second derivatives to analyze $f(x)=2x^3+3x^2-36x$',
		'\\item Use the first and second derivatives to analyze $f(x)=4x^3+3x^2-6x$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^4-2x^2$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^3-12x$',
		'\\item Use the first and second derivatives to analyze $f(x)=36x+3x^2-2x^3$',
		'\\item Use the first and second derivatives to analyze $f(x)=2+2x^2-x^4$',
		'\\item Use the first and second derivatives to analyze $f(x)=8x^3+x^4$',
		'\\item Use the first and second derivatives to analyze $f(x)=(x+1)^5-5x$',
		'\\item Use the first and second derivatives to analyze $f(x)=5x^3-3x^5$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Use the first and second derivatives to analyze $f(x)=\\frac{x}{\\sqrt{x^2+1}}$',
		'\\item Use the first and second derivatives to analyze $f(x)=\\frac{\\sqrt{1-x^2}}{2x+1}$',
		'\\item Use the first and second derivatives to analyze $f(x)=2x-3x^{2/3}$',
		'\\item Use the first and second derivatives to analyze $f(x)=5x^{2/5}-2x$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^{2/3} \\left( \\frac{5}{2}-x \\right)$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^{2/3}(x-5)$',
		'\\item Use the first and second derivatives to analyze $f(x)=x \\sqrt{8-x^2}$',
		'\\item Use the first and second derivatives to analyze $f(x)=(2-x^2)^{3/2}$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^2 + \\frac{2}{x}$',
		'\\item Use the first and second derivatives to analyze $f(x)=\\frac{x^2-3}{x-2}$',
		'\\item Use the first and second derivatives to analyze $f(x)=\\frac{8x}{x^2+4}$',
		'\\item Use the first and second derivatives to analyze $f(x)=\\frac{5}{x^4+5}$',
		'\\item Use the first and second derivatives to analyze $f(x)=\\frac{x}{x^2+1}$',
		'\\item Use the first and second derivatives to analyze $f(x)=x \\sqrt{6-x}$',
		'\\item Use the first and second derivatives to analyze $f(x)=5x^{2/3}-2x^{5/3}$',
		'\\item Use the first and second derivatives to analyze $f(x)=x^{1/3}(x+4)$',
		'\\item Use the first and second derivatives to analyze $f(x)=x-4\\sqrt{x}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Use the first and second derivatives to analyze $f(x)=x+\\sin(x)$ on the interval $[0,2\\pi]$',
		'\\item Use the first and second derivatives to analyze $f(x)=x-\\sin(x)$ on the interval $[0,2\\pi]$',
		'\\item Use the first and second derivatives to analyze $f(x)=x \\sqrt{3}-2 \\cos(x)$ on the interval $[0, 2 \\pi]$',
		'\\item Use the first and second derivatives to analyze $f(x)=\\sin(x) \\cos(x)$ on the interval $[0,\\pi]$',
		'\\item Use the first and second derivatives to analyze $f(x)=\\cos^2(x)-2\\sin(x)$ on the interval $[0, 2\\pi]$',
		'\\item Use the first and second derivatives to analyze $f(x)=\\cos^2(x)+2 \\cos(x)$ on the interval $[0,2\\pi]$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 4.5 Applied Optimization';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item A cylindrical can is to be made to hold 1 L of oil. Find the dimensions that will minimize the cost of the metal to manufacture the can.',
		'\\item Find the area of the largest rectangle that can be inscribed in a semicircle of radius 1.',
		'\\item Find the dimensions of a rectangle with perimeter 100 m whose area is as large as possible.',
		'\\item Find the dimensions of a rectangle with area $1000m^2$ whose perimeter is as small as possible.',
		'\\item A farmer with 750 ft of fencing wants to enclose a rectangular area and then divide it into four pens with fencing parallel to one side of the rectangle. What is the largest possible total area of the four pens?',
		'\\item A box with an open top is to be constructed from a square piece of cardboard, 3 ft wide, by cutting out a square from each of the four corners and bending up the sides. Find the largest volume that such a box can have.',
		'\\item A box with a square base and open top must have a volume of $32,000 cm^3$. Find the dimensions of the box that mini mize the amount of material used.',
		'\\item If $1200 cm^2$ of material is available to make a box with a square base and an open top, find the largest possible volume of the box.',
		'\\item A rectangular storage container with an open top is to have a volume of $10 m^3$ . The length of its base is twice the width. Material for the base costs 10 dollars per square meter. Material for the sides costs 6 dollars per square meter. Find the cost of materials for the cheapest such container.',
		'\\item Find the point on the line $y=2x+3$ that is closest to the origin.',
		'\\item Find the point on the curve that is closest to the point $(3,0)$.',
		'\\item Find the points on the ellipse $4x^2+y^2=4$ that are farthest away from the point $(1,0)$.',
		'\\item Find the dimensions of the rectangle of largest area that can be inscribed in an equilateral triangle of side 1 if one side of the rectangle lies on the base of the triangle.',
		'\\item Find the area of the largest rectangle that can be inscribed in a right triangle with legs of lengths 3 cm and 4 cm if two sides of the rectangle lie along the legs.',
		'\\item A Norman window has the shape of a rectangle surmounted by a semicircle. (Thus the diameter of the semicircle is equal to the width of the rectangle.) If the perimeter of the window is 30 ft, find the dimensions of the window so that the greatest possible amount of light is admitted.',
		'\\item The top and bottom margins of a poster are each 6 cm and the side margins are each 4 cm. If the area of printed material on the poster is fixed at 384 cm , find the dimensions of the poster with the smallest area.',
		'\\item A poster is to have an area of $180 in^2$ with 1-inch margins at the bottom and sides and a 2-inch margin at the top. What dimensions will give the largest printed area?',
		'\\item A piece of wire 10 m long is cut into two pieces. One piece is bent into a square and the other is bent into an equilateral triangle. How should the wire be cut so that the total area enclosed is (a) a maximum? (b) A minimum?',
		'\\item A cylindrical can without a top is made to contain 1000 cubic centimeters of liquid. Find the dimensions that will minimize the cost of the metal to make the can.',
		'\\item Let $a$ and $b$ be positive numbers. Find the length of the shortest line segment that is cut off by the first quadrant and passes through the point $(a, b)$.',
		'\\item At which points on the curve $y=1+40x^3-3x^5$ does the tangent line have the largest slope?',
		'\\item A baseball team plays in a stadium that holds 55,000 spectators. With ticket prices at 10 dollars, the average attendance had been 27,000. When ticket prices were lowered to 8 dollars, the average attendance rose to 33,000. (a) Find the demand function, assuming that it is linear. (b) How should ticket prices be set to maximize revenue?',
		'\\item During the summer months Terry makes and sells necklaces on the beach. Last summer he sold the necklaces for 10 dollars each and his sales averaged 20 per day. When he increased the price by 1 dollar he found that the average decreased by two sales per day. (a) Find the demand function, assuming that it is linear. (b) If the material for each necklace costs Terry 6 dollars, what should the selling price be to maximize his profit?',
		'\\item Show that of all the isosceles triangles with a given perimeter, the one with the greatest area is equilateral.',
		'\\item One pole is twenty feet tall, and another is 10 feet tall. A rope is run from the top of one pole to a point on the ground between the poles and then to the top of the other pole. Find the shortest length of such a rope.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 4.7 Antiderivatives';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the antiderivative: $\\int \\left( 3x^2+\\frac{x}{2} + \\sqrt{x} \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\frac{t^2}{2} + 4 t^3 + \\frac{1}{\\sqrt{t}} \\right) dt$',
		'\\item Find the antiderivative: $\\int \\left( 2x^2 + 5x+ 7 - \\frac{1}{x^2} + \\sqrt{x} \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\frac{1}{x^3} -x^3 + \\sqrt[3]{x} \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\frac{1}{5}-\\frac{2}{x^3} +2x -\\sqrt{x} \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( 3 \\sqrt{x} + \\frac{4}{x^2} \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\frac{1}{2 \\sqrt{x}} - \\frac{3}{x^4} \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\frac{1}{x^2} + \\frac{x^{1/3}}{3} + \\frac{1}{4} \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\frac{1}{2} + \\frac{x^3}{4} + \\frac{5}{x^{1/6}} \\right) dx$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the antiderivative: $\\int x^{-3} \\left( x+1 \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\frac{x \\sqrt{x} + \\sqrt{x}}{x^2}  \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\frac{4+ \\sqrt{x}}{x^3} \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\frac{x(x+1)}{\\sqrt{x}} \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left(  1- \\frac{x^3+1}{x^3} \\right) dx$',
		'\\item Find the antiderivative: $\\int 2x(1-x^{-3}dx$',
		'\\item Find the antiderivative: $\\int x^{-3}(x+1)dx$',
		'\\item Find the antiderivative: $\\int \\frac{x\\sqrt{x}+\\sqrt{x}}{x^2}dx$',
		'\\item Find the antiderivative: $\\int \\frac{4+\\sqrt{x}}{x^3}dx$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the antiderivative: $\\int \\left( \\sin(x) - \\sec^2(2x) \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\csc(x) \\cot(x) + \\csc^2(x) \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\frac{1+\\cos^2(x)}{\\sin^2(x)} \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\sec(3x) \\tan(3x) - \\cos(4x) \\right) dx$',
		'\\item Find the antiderivative: $\\int \\left( \\cos(x) (\\tan(x) + \\sec(x) ) \\right) dx$',
		'\\item Find the antiderivative: $\\int \\frac{\\csc(x) \\cot(x) }{2}dx$',
		'\\item Find the antiderivative: $\\int (\\sin(2x) + \\csc^2(x))dx$',
		'\\item Find the antiderivative: $\\int (2 \\csc(2x)-2 \\sin(3x))dx$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 4.7b Initial Value Problems';
//--------------------------------------------------------------------------------------------------
theType=0;

comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Solve the initial value problem: $f\'(x)=2x-7$ and $f(1)=2$',
		'\\item Solve the initial value problem: $f\'(x)=1+ \\sin(x)$ and $f(0)=3$',
		'\\item Solve the initial value problem: $f\'(x)=x^2+x+1$ and $f(1)=2$',
		'\\item Solve the initial value problem: $f\'(x)=\\frac{1}{x^2}+x^2$ and $f(2)=3$',
		'\\item Solve the initial value problem: $f\'(x)=\\frac{1}{\\sqrt{x}}$ and $f(4)=3$	',
		'\\item Solve the initial value problem: $f\'(x)=10-x$ and $f(0)=-1$',
		'\\item Solve the initial value problem: $f\'(x)=\\frac{1}{x^2}+x$ and $f(2)=1$',
		'\\item Solve the initial value problem: $f\'(x)=9x^2-4x+5$ and $f(-1)=0$',
		'\\item Solve the initial value problem: $f\'(x)=1+\\cos(x)$ and $f(0)=4$',
		'\\item Solve the initial value problem: $f\'(x)=\\cos(x) + \\sin(x)$ and $f(\\pi)=1$',
		'\\item Solve the initial value problem: $f\'(x)=\\frac{1}{2}\\sec(x) \\tan(x)$ and $f(0)=1$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item An object moving along a number line begins at rest at 0. Its acceleration $t$ seconds after it begins moving is given by $a(t)=t-t^2$ meters per second squared. Where is the object located when $t=2$?',
		'\\item An object moving along a number line begins at rest at 1. Its acceleration $t$ seconds after it begins moving is given by $a(t)=t^2-t^3$ meters per second squared. Where is the object located when $t=3$?',
		'\\item An object moving along a number line begins at rest at 2. Its acceleration $t$ seconds after it begins moving is given by $a(t)=t^4 -\\frac{1}{t^4}$ meters per second squared. Where is the object located when $t=4$?',
		'\\item An object moving along a number line begins at rest at 3. Its acceleration $t$ seconds after it begins moving is given by $a(t)=10$ meters per second squared. Where is the object located when $t=2$?',
		'\\item An object moving along a number line begins at rest at 0. Its acceleration $t$ seconds after it begins moving is given by $a(t)=t-t^2$ meters per second squared. What is the displacement of the object from $t=1$ to $t=2$ seconds?',
		'\\item An object moving along a number line begins at rest at 1. Its acceleration $t$ seconds after it begins moving is given by $a(t)=t^2-t^3$ meters per second squared. What is the displacement of the object from $t=1$ to $t=2$ seconds?',
		'\\item An object moving along a number line begins at rest at 2. Its acceleration $t$ seconds after it begins moving is given by $a(t)=t^4 -\\frac{1}{t^4}$ meters per second squared. What is the displacement of the object from $t=1$ to $t=2$ seconds?',
		'\\item An object moving along a number line begins at rest at 3. Its acceleration $t$ seconds after it begins moving is given by $a(t)=10$ meters per second squared. What is the displacement of the object from $t=1$ to $t=2$ seconds?		',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 5.2 Sigma Notation';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the summation: $\\sum_{k=1}^{5} \\left( k+\\frac{1}{k}\\right) $',
		'\\item Evaluate the summation: $\\sum_{k=1}^{5} \\left( (-1)^k k \\right) $',
		'\\item Evaluate the summation: $\\sum_{k=1}^{5} \\left( 1+\\frac{(-1)^k}{k} \\right) $',
		'\\item Evaluate the summation: $\\sum_{k=1}^{5} \\left( 1+2k \\right)^2 $',
		'\\item Evaluate the summation: $\\sum_{k=1}^{5} \\left( \\sin(k \\pi) + \\cos(k \\pi) \\right) $',
		'\\item Evaluate the summation: $\\sum_{k=1}^{5} \\left( \\frac{1}{k} - \\frac{1}{k+1} \\right) $',
		'\\item Evaluate the summation: $\\sum_{k=1}^{5} \\left( k^2-2k \\right) $',
		'\\item Evaluate the summation: $\\sum_{k=1}^{5} \\left(  \\frac{1+(-1)^k}{k}\\right) $',
		'\\item Evaluate the summation: $\\sum_{k=1}^{5} \\left( 2k+4k^2 \\right) $',
		'\\item Evaluate the summation: 	$\\sum_{k=1}^{5} \\left(  k^2-4\\right) $',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the summation using summation rules:  $\\sum_{k=1}^{20} \\left( 2k + 8k^2\\right)$',
		'\\item Evaluate the summation using summation rules:  $\\sum_{k=1}^{20} \\left( 4k + 6k^2\\right)$',
		'\\item Evaluate the summation using summation rules:  $\\sum_{k=1}^{20} \\left( 6k + 4k^2\\right)$',
		'\\item Evaluate the summation using summation rules:  $\\sum_{k=1}^{20} \\left( 8k + 2k^2\\right)$',
		'\\item Evaluate the summation using summation rules:  $\\sum_{k=1}^{20} \\left( 2k + 3k^2\\right)$',
		'\\item Evaluate the summation using summation rules:  $\\sum_{k=1}^{20} \\left( 4k + 6k^2\\right)$',
		'\\item Evaluate the summation using summation rules:  $\\sum_{k=1}^{20} \\left( 6k + 9k^2\\right)$',
		'\\item Evaluate the summation using summation rules:  $\\sum_{k=1}^{20} \\left( 8k + 12k^2\\right)$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 5.2b Riemann Sums';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
	'\\item Find the area under $f(x)=1-x^2$ over $[0,1]$ as a limit of Riemann Sums. Use regular partitions with right-hand endpoints.',
	'\\item Find the area under $f(x)=1-x^3$ over $[0,1]$ as a limit of Riemann Sums. Use regular partitions with right-hand endpoints.',
	'\\item Find the area under $f(x)=2x^2+3$ over $[0,2]$ as a limit of Riemann Sums. Use regular partitions with right-hand endpoints.',
	'\\item Find the area under $f(x)=4x^2+4$ over $[0,3]$ as a limit of Riemann Sums. Use regular partitions with right-hand endpoints.',
	'\\item Find the area under $f(x)=6x^2+5$ over $[0,4]$ as a limit of Riemann Sums. Use regular partitions with right-hand endpoints.',
	'\\item Find the area under $f(x)=8x^2+6$ over $[0,5]$ as a limit of Riemann Sums. Use regular partitions with right-hand endpoints.',
	'\\item Find the area under $f(x)=2x^3+3$ over $[0,2]$ as a limit of Riemann Sums. Use regular partitions with right-hand endpoints.',
	'\\item Find the area under $f(x)=4x^3+4$ over $[0,3]$ as a limit of Riemann Sums. Use regular partitions with right-hand endpoints.',
	'\\item Find the area under $f(x)=6x^3+5$ over $[0,4]$ as a limit of Riemann Sums. Use regular partitions with right-hand endpoints.',
	'\\item Find the area under $f(x)=8x^3+6$ over $[0,5]$ as a limit of Riemann Sums. Use regular partitions with right-hand endpoints.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 5.4 The Fundamental Theorem of Calculus';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $F(x)=\\int_{0}^{x} \\frac{1}{1+t}dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x} \\sin^2(t) dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x} \\frac{t}{1+t^2}dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x} \\cos^2(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x} t \\sin(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x} t \\cos(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x} \\sqrt{1+t^2}dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x} \\frac{1}{\\sqrt{1+t^2}}dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x} \\frac{1}{1+\\sin^2(t)}dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x} \\frac{1}{1+\\cos^2(t)}dt$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $F(x)=\\int_{x}^{0} \\frac{1}{1+t}dt$',
		'\\item Find the derivative of $F(x)=\\int_{x}^{0} \\sin^2(t) dt$',
		'\\item Find the derivative of $F(x)=\\int_{x}^{0} \\frac{t}{1+t^2}dt$',
		'\\item Find the derivative of $F(x)=\\int_{x}^{0} \\cos^2(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{x}^{0} t \\sin(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{x}^{0} t \\cos(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{x}^{0} \\sqrt{1+t^2}dt$',
		'\\item Find the derivative of $F(x)=\\int_{x}^{0} \\frac{1}{\\sqrt{1+t^2}}dt$',
		'\\item Find the derivative of $F(x)=\\int_{x}^{0} \\frac{1}{1+\\sin^2(t)}dt$',
		'\\item Find the derivative of $F(x)=\\int_{x}^{0} \\frac{1}{1+\\cos^2(t)}dt$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $F(x)=\\int_{0}^{x^2} \\frac{1}{1+t}dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x^2+2x} \\sin^2(t) dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{\\sin(x)} \\frac{t}{1+t^2}dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x^3} \\cos^2(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{2x+1} t \\sin(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x^2+3x} t \\cos(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{\\cos(x)} \\sqrt{1+t^2}dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{x^2} \\frac{1}{\\sqrt{1+t^2}}dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{1+x^2} \\frac{1}{1+\\sin^2(t)}dt$',
		'\\item Find the derivative of $F(x)=\\int_{0}^{1-x^2} \\frac{1}{1+\\cos^2(t)}dt$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative of $F(x)=\\int_{x^3}^{x^2} \\frac{1}{1+t}dt$',
		'\\item Find the derivative of $F(x)=\\int_{x^2}^{x^2+2x} \\sin^2(t) dt$',
		'\\item Find the derivative of $F(x)=\\int_{\\cos(x)}^{\\sin(x)} \\frac{t}{1+t^2}dt$',
		'\\item Find the derivative of $F(x)=\\int_{x^2}^{x^3} \\cos^2(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{x^2}^{2x+1} t \\sin(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{2x}^{x^2+3x} t \\cos(t)dt$',
		'\\item Find the derivative of $F(x)=\\int_{\\sin(x)}^{\\cos(x)} \\sqrt{1+t^2}dt$',
		'\\item Find the derivative of $F(x)=\\int_{x^3}^{x^2} \\frac{1}{\\sqrt{1+t^2}}dt$',
		'\\item Find the derivative of $F(x)=\\int_{x^2}^{1+x^2} \\frac{1}{1+\\sin^2(t)}dt$',
		'\\item Find the derivative of $F(x)=\\int_{2x}^{1-x^2} \\frac{1}{1+\\cos^2(t)}dt$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 5.4b Fundamental Theorem and Definite Integrals';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the integral: $\\int_{-1}^{1} \\left( x^2-2x+3  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{1}^{4} \\left( 3x^2-\\frac{x^3}{4}  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{1} \\left(  x^2+\\sqrt{x}\\right) dx$',
		'\\item Evaluate the integral: $\\int_{-2}^{3} \\left( x^3-2x+3 \\right) dx$',
		'\\item Evaluate the integral: $\\int_{\\sqrt{2}}^{1} \\left( \\frac{x^7}{2}-\\frac{1}{x^5} \\right) dx$',
		'\\item Evaluate the integral: $\\int_{-1}^{2} \\left( x^3-2x \\right) dx$',
		'\\item Evaluate the integral: $\\int_{1}^{4} \\left( 5-2t+3t^2 \\right) dt$',
		'\\item Evaluate the integral: $\\int_{0}^{1} \\left( 1+\\frac{1}{2}x^4-\\frac{2}{5}x^9 \\right) dx$',
		'\\item Evaluate the integral: $\\int_{-2}^{3} \\left( x^3-3x^2+4 \\right) dx$',
		'\\item Evaluate the integral: $\\int_{-1}^{1} \\left( 6x^5-4x^3+2x \\right) dx$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the integral: $\\int_{0}^{2} \\left( x (x-3)  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{-1}^{1} \\left( (x+1)^2  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{-3}^{-1} \\left( \\frac{x^5-2x}{x^3}  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{1}^{4} \\left( \\frac{x^2+\\sqrt{x}}{x^2} \\right) dx$',
		'\\item Evaluate the integral: $\\int_{1}^{2} \\left( (x+1)(x^2+1) \\right) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{1} (x+2)(x-3) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{4} (4-x) \\sqrt{x} dx$',
		'\\item Evaluate the integral: $\\int_{1}^{9} \\frac{x-1}{\\sqrt{x}} dx$',
		'\\item Evaluate the integral: $\\int_{1}^{2} \\frac{x^4+1}{x^2} dx$',
		'\\item Evaluate the integral: $\\int_{1}^{4} \\frac{\\sqrt{x} + x^2}{x^4} dx$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the integral: $\\int_{\\pi/4}^{\\pi/2} ( \\sin(x) + \\cos(x) )dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi/3} (\\sec^2(x)+ \\sec(x) \\tan(x)) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi/4} (\\sec^2(x)+ \\sec(x) \\tan(x)) dx$',
		'\\item Evaluate the integral: $\\int_{\\pi/6}^{\\pi/4} (\\csc^2(x) + \\csc(x) \\cot(x)) dx$',
		'\\item Evaluate the integral: $\\int_{\\pi/3}^{2\\pi/3} (\\sin(x) + \\cos(x)) dx$		',
		'\\item Evaluate the integral: $\\int_{\\pi/4}^{3\\pi/4} (\\sin(x) + \\cos(x)) dx$		',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi/3} \\left( \\sec^2(x) + \\sin(x)  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi/4} \\left( \\sec^2(x) + \\sin(x)  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi} \\left( 1+\\cos(x)  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi/2} \\left( 1+\\cos(x)  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi} \\left( 1+\\sin(x)  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi/2} \\left( 1+\\sin(x)  \\right) dx$',
		'\\item Evaluate the integral: $\\int_{\\pi/4}^{3\\pi/4} \\left( \\csc(x) \\cot(x)  \\right) dx$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the area under the graph of $y=\\sin(x)$ over the interval $[0,\\pi]$.',
		'\\item Find the area under the graph of $y=\\cos(x)$ over the interval $[0,\\pi/2]$.',
		'\\item Find the area under the graph of $y=\\sqrt{x}$ over the interval $[0,1]$.',
		'\\item Find the area under the graph of $y=1-x^2$ over the interval $[-1,1]$.',
		'\\item Find the area under the graph of $y=\\frac{1}{x^2}$ over the interval $[1,2]$.',
		'\\item A particle is moving along a number line so that its velocity at time $t$ is given by $v(t)=t^2+1$ meters per second. Find the distance travelled by the particle from $t=1$ to $t=2$. (Note that the velocity is always positive.)',
		'\\item A particle is moving along a number line so that its velocity at time $t$ is given by $v(t)=\\sqrt(t)$ meters per second. Find the distance travelled by the particle from $t=0$ to $t=1$. (Note that the velocity is always positive.)',
		'\\item A particle is moving along a number line so that its velocity at time $t$ is given by $v(t)=16t^2+2t+1$ meters per second. Find the distance travelled by the particle from $t=1$ to $t=2$. (Note that the velocity is always positive.)',
		'\\item A particle is moving along a number line so that its velocity at time $t$ is given by $v(t)=16t^2+16t+16$ meters per second. Find the distance travelled by the particle from $t=0$ to $t=1$. (Note that the velocity is always positive.)',
		'\\item A particle is moving along a number line so that its velocity at time $t$ is given by $v(t)=16t^2+5t$ meters per second. Find the distance travelled by the particle from $t=1$ to $t=2$. (Note that the velocity is always positive.)',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 5.5 Indefinite integrals and Substitution';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the integral: $\\int \\sqrt{2x+1} dx$',
		'\\item Evaluate the integral: $\\int x \\sqrt{x+1} dx$',
		'\\item Evaluate the integral: $\\int \\frac{x}{\\sqrt{3x^2+4}}dx$',
		'\\item Evaluate the integral: $\\int x (x^2+2)^{7}dx$',
		'\\item Evaluate the integral: $\\int \\frac{4x^3}{(x^4+1)^2}dx$',
		'\\item Evaluate the integral: $\\int \\frac{\\sqrt{1+\\sqrt{x}}}{\\sqrt{x}}dx$',
		'\\item Evaluate the integral: $\\int \\frac{3x^2}{\\sqrt{4x^3+5}} dx$',
		'\\item Evaluate the integral: $\\int \\frac{1}{x^2} \\cos\\left(\\frac{1}{x}\\right)dx$',
		'\\item Evaluate the integral: $\\int \\frac{1}{\\sqrt{5x+5}}dx$',
		'\\item Evaluate the integral: $\\int x \\sqrt{1-x^2} dx$',
		'\\item Evaluate the integral: $\\int \\frac{1}{\\sqrt{x} (1+\\sqrt{x})^2}dx$',
		'\\item Evaluate the integral: $\\int x^2 \\left( \\frac{x^3}{15}-1 \\right)^{5} dx$',
		'\\item Evaluate the integral: $\\int \\frac{1}{\\sqrt{x}} cos\\left( \\sqrt{x} +3 \\right)dx$',
		'\\item Evaluate the integral: $\\int \\frac{x}{1+x}dx$',
		'\\item Evaluate the integral: $\\int \\frac{1}{x^2} \\sqrt{2-\\frac{1}{x}} dx$',
		'\\item Evaluate the integral: $\\int x(x-1)^{10} dx$',
		'\\item Evaluate the integral: $\\int x^3 (x^2+1)^{10}dx$',
		'\\item Evaluate the integral: $\\int \\frac{1}{x^3} \\sqrt{\\frac{x^2-1}{x^2}}dx$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the integral: $\\int x \\sec^2 (3x^2+1)dx$',
		'\\item Evaluate the integral: $\\int \\cos(2x+7) dx$',
		'\\item Evaluate the integral: $\\int x^2 \\sin (x^3)dx$',
		'\\item Evaluate the integral: $\\int \\sin^2(x)dx$',
		'\\item Evaluate the integral: $\\int \\sin(x) \\cos(x) dx$',
		'\\item Evaluate the integral: $\\int \\sin^4(x) \\cos(x)dx$',
		'\\item Evaluate the integral: $\\int \\tan(x) \\sec^2(x)dx$',
		'\\item Evaluate the integral: $\\int \\sec^3(x) \\tan(x) dx$',
		'\\item Evaluate the integral: $\\int \\csc^2(2x) \\cot(2x) dx$',
		'\\item Evaluate the integral: $\\int \\frac{\\sec(x)\\tan(x)}{\\sqrt{\\sec(x)}}  dx$',
		'\\item Evaluate the integral: $\\int (\\tan(x) \\sec(x))^2dx$',
		'\\item Evaluate the integral: $\\int x^{1/2} \\sin(x^{3/2}+1)dx$',
		'\\item Evaluate the integral: $\\int \\frac{\\sin(x)}{\\cos^2(x)}dx$	',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 5.6 Definite Integral Substitutions';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the integral: $\\int_{0}^{4} \\sqrt{2x+1} dx$',
		'\\item Evaluate the integral: $\\int_{0}^{3} x \\sqrt{x+1} dx$',
		'\\item Evaluate the integral: $\\int_{0}^{1} x (x^2+2)^{7}dx$',
		'\\item Evaluate the integral: $\\int_{1}^{2} \\frac{4x^3}{(x^4+1)^2}dx$',
		'\\item Evaluate the integral: $\\int_{-1}^{1} x \\sqrt{1-x^2} dx$',
		'\\item Evaluate the integral: $\\int_{4}^{9} \\frac{1}{\\sqrt{x} (1+\\sqrt{x})^2}dx$',
		'\\item Evaluate the integral: $\\int_{1}^{2} \\frac{x}{(1+x)^5}dx$',
		'\\item Evaluate the integral: $\\int_{0}^{1} x(x-1)^{10} dx$',
		'\\item Evaluate the integral: $\\int_{0}^{50} (2x-1) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{1} \\frac{1}{(5x+1)^5} dx$',
		'\\item Evaluate the integral: $\\int_{0}^{1} x \\sqrt{1-x^2} dx$',
		'\\item Evaluate the integral: $\\int_{1}^{2} x \\sqrt{x-1} dx$',
		'\\item Evaluate the integral: $\\int_{0}^{4} \\frac{x}{\\sqrt{1+2x}} dx$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the integral: $\\int_{0}^{\\pi} \\sin^2(x)dx$',
		'\\item Evaluate the integral: $\\int_{\\pi/6}^{\\pi/4} \\sin(x) \\cos(x) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi/3} \\sin^4(x) \\cos(x)dx$',
		'\\item Evaluate the integral: $\\int_{-\\pi/4}^{\\pi/4} \\tan(x) \\sec^2(x)dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi/3} \\sec^3(x) \\tan(x) dx$',
		'\\item Evaluate the integral: $\\int_{\\pi/6}^{\\pi/3} \\csc^2(2x) \\cot(2x) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi/4} \\frac{\\sec(x)\\tan(x)}{\\sqrt{\\sec(x)}}  dx$',
		'\\item Evaluate the integral: $\\int_{\\pi/4}^{\\pi/6} (\\tan(x) \\sec(x))^2dx$',
		'\\item Evaluate the integral: $\\int_{-\\pi/2}^{\\pi/2} \\frac{\\sin(x)}{\\cos^2(x)}dx$',
		'\\item Evaluate the integral: $\\int_{0}^{1} \\cos(\\pi x/2) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi} \\sec^2(x/4) dx$',
		'\\item Evaluate the integral: $\\int_{1/6}^{1/2} \\csc(\\pi x) \\cot(\\pi x) dx$',
		'\\item Evaluate the integral: $\\int_{0}^{\\pi/2} \\cos(x) \\sin(\\sin(x)) dx$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 5.6b Area Between Curves';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the area of the region bounded between $y=x^2$ and $y=2x-x^2$.',
		'\\item Find the area of the region bounded between $y=5x-x^2$ and $y=x$.',
		'\\item Find the area of the region bounded between $y=2x$ and $y=x^2-4x$.',
		'\\item Find the area of the region bounded by $y=(x-2)^2$ and $y=x$.',
		'\\item Find the area of the region bounded by $y=x^2-2x$ and $y=x+4$.',
		'\\item Find the area of the region bounded by $y=\\sqrt{x+3}$ and $y=\\frac{x+3}{2}$.',
		'\\item Find the area of the region bounded by $y=12-x^2$ and $y=x^2-6$.',
		'\\item Find the area of the region bounded by $y=x^2$ and $y=4x-x^2$.',
		'\\item Find the area of the region bounded by $y=\\sqrt{x-1}$ and $x-y=1$.',
		'\\item Find the area of the region bounded by $y=2-x$ and $y=4-x^2$.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the area of the region bounded between $y=x^2-4$ and $y=-x^2-2x$ over the interval $[-3,1]$.',
		'\\item Find the area of the region bounded by $y=3x-x^2$ and $y=2x^3-x^2-5x$.',
		'\\item Find the area of the region bounded between $x=y^2-1$ and $y=x^2$ from $y=0$ to $y=1$.',
		'\\item Find the area of the region bounded between $x=2y-y^2$ and $x=y^2-4y$.',
		'\\item Find the area of the region bounded between $y=x-1$ and $y^2=2x+6$.',
		'\\item Find the area of the region bounded by $x=y^4$ and $y=\\sqrt{2-x}$.',
		'\\item Find the area of the region bounded by $x=2y^2-2y$ and $x=12y^2-12y^3$.',
		'\\item Find the area of the region bounded by $x=1-y^2$ and $x=y^2-1$.',
		'\\item Find the area of the region bounded by $4x+y^2=12$ and $x=y$.',
		'\\item Find the area of the region bounded by $x=2y^2$ and $x=4+y^2$.',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the area of the region  between $y=\\sin(x)$ and $y=\\cos(x)$ over the interval $[0,\\pi]$. (Be careful of the intersection.)',
		'\\item Find the area of the region bounded between $y=\\sin(x)$ and $y=x$ over the interval $[\\pi/2, \\pi]$.',
		'\\item Find the area of the region bounded by $y=\\sec^2(x)$ and $y=8 \\cos(x)$ over the interval  $[-\\pi/3, \\pi/3]$.',
		'\\item Find the area of the region bounded by $y=\\cos(x)$ and $y=2-\\cos(x)$ over the interval $[0, 2 \\pi]$.',
		'\\item Find the area of the region bounded by $y=2 \\sin(x)$ and $y=\\sin(2x)$ over the interval  $[0,\\pi]$.',
		'\\item Find the area of the region bounded by $y=\\cos(\\pi x/2)$ and $y=1-x^2$.',
		'\\item Find the area of the region bounded by $y=\\sin(\\pi x/2)$ and $y=x$.',
		'\\item Find the area of the region bounded by $y=\\sec^2(x)$ and $y=\\tan^2(x)$ for $-\\pi/4 \\leq x \\leq \\pi/4$.',
		'\\item Find the area of the region bounded by $y=\\tan^2(x)$ and $y=-\\tan^2(x)$ for $-\\pi/4 \\leq x \\leq \\pi/4$.',
		'\\item Find the area of the region bounded by $y=3\\sin(x) \\sqrt{\\cos(x)}$ and $x=0$ for $0 \\leq x \\leq \\pi/2$.',
		'\\item Find the area of the region bounded by $y=\\cos(\\pi x)$ and $y=4x^2-1$.',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 7.2 Natural Logarithms';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Express in terms of $\\ln(2)$ and $\\ln(3)$: $\\ln \\left( 0.75 \\right)$',
		'\\item Express in terms of $\\ln(2)$ and $\\ln(3)$: $\\ln \\left( \\frac{4}{9} \\right)$',
		'\\item Express in terms of $\\ln(2)$ and $\\ln(3)$: $\\ln \\left( \\frac{1}{2} \\right)$',
		'\\item Express in terms of $\\ln(2)$ and $\\ln(3)$: $\\ln \\left( \\sqrt[3]{9}\\right)$',
		'\\item Express in terms of $\\ln(2)$ and $\\ln(3)$: $\\ln \\left( 3 \\sqrt{2} \\right)$',
		'\\item Express in terms of $\\ln(2)$ and $\\ln(3)$: $\\ln \\left( \\sqrt{13.5}\\right)$',
		'\\item Express in terms of $\\ln(5)$ and $\\ln(7)$: $\\ln \\left( \\frac{1}{125}\\right)$',
		'\\item Express in terms of $\\ln(5)$ and $\\ln(7)$: $\\ln \\left( 9.8 \\right)$',
		'\\item Express in terms of $\\ln(5)$ and $\\ln(7)$: $\\ln \\left( 7 \\sqrt{7} \\right)$',
		'\\item Express in terms of $\\ln(5)$ and $\\ln(7)$: $\\ln \\left( 1225 \\right)$',
		'\\item Express in terms of $\\ln(5)$ and $\\ln(7)$: $\\ln \\left( 0.056 \\right)$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative: $f(x)=\\ln(x^2)$',
		'\\item Find the derivative: $f(x)=\\ln(\\sqrt[3]{x})$',
		'\\item Find the derivative: $f(x)=\\ln\\left( \\frac{1}{1+x^2} \\right)$',
		'\\item Find the derivative: $f(x)=\\ln(1+\\sin(x))$',
		'\\item Find the derivative: $f(x)=\\ln(1+\\cos(x))$',
		'\\item Find the derivative: $f(x)=\\ln(1+\\tan(x))$',
		'\\item Find the derivative: $f(x)=\\ln(1+\\cot(x))$',
		'\\item Find the derivative: $f(x)=\\ln(1+\\sec(x))$',
		'\\item Find the derivative: $f(x)=\\ln(1+\\csc(x))$',
		'\\item Find the derivative: $f(x)=\\ln(\\ln(x))$',
		'\\item Find the derivative: $f(x)=x \\ln(x)$',
		'\\item Find the derivative: $f(x)=\\frac{1+\\ln(x)}{x}$',
		'\\item Find the derivative: $f(x)=\\frac{\\ln(x)}{1+\\ln(x)}$',
		'\\item Find the derivative: $f(x)=\\ln(\\sec(x) + \\tan(x))$',
		'\\item Find the derivative: $f(x)=\\ln(\\sec(x))$',
		'\\item Find the derivative: $f(x)=\\ln\\left( \\frac{\\sqrt{1+x^2}}{x^2} \\right)$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the integral: $\\int_{-1}^0 \\frac{1}{3x-2} dx$',
		'\\item Evaluate the integral: $\\int \\frac{x}{x^2-25}dx$',
		'\\item Evaluate the integral: $\\int \\frac{x}{4x^2-5}dx$',
		'\\item Evaluate the integral: $\\int_0^\\pi \\frac{\\sin(x)}{2-\\cos(x)} dx$',
		'\\item Evaluate the integral: $\\int_0^{\\pi/3} \\frac{4 \\sin(x)}{1-4 \\cos(x)} dx$',
		'\\item Evaluate the integral: $\\int_1^2 \\frac{2\\ln(x)}{x}  dx$',
		'\\item Evaluate the integral: $\\int_2^4 \\frac{1}{x \\ln(x)}  dx$',
		'\\item Evaluate the integral: $\\int_2^4 \\frac{1}{x(\\ln(x))^2}  dx$',
		'\\item Evaluate the integral: $\\int_2^{16} \\frac{1}{2x\\sqrt{\\ln(x)}} dx$',
		'\\item Evaluate the integral: $\\int \\frac{\\sec^2(x)}{6+3\\tan(x)} dx$',
		'\\item Evaluate the integral: $\\int \\frac{\\sec(x) \\tan(x)}{1+\\sec(x)} dx$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the integral: $\\int \\left( \\sec(2x) + \\tan(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\sec(2x) + \\cot(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\sec(2x) + \\csc(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\tan(2x) + \\sec(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\tan(2x) + \\cot(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\tan(2x) + \\csc(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\cot(2x) + \\tan(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\cot(2x) + \\sec(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\cot(2x) + \\csc(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\csc(2x) + \\tan(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\csc(2x) + \\cot(x/2) \\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( \\csc(2x) + \\sec(x/2) \\right) dx$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Use Logarithmic Differentiation to find the derivative: $y=\\sqrt{x(2x+1)}$',
		'\\item Use Logarithmic Differentiation to find the derivative: $y=\\sqrt{(x^2+1)(x-1)^2}$',
		'\\item Use Logarithmic Differentiation to find the derivative: $y=\\sqrt{\\frac{x}{2x+1}}$',
		'\\item Use Logarithmic Differentiation to find the derivative: $y=\\sqrt{\\frac{1}{x(2x+1)}}$',
		'\\item Use Logarithmic Differentiation to find the derivative: $y=x \\sqrt{2x+1}$',
		'\\item Use Logarithmic Differentiation to find the derivative: $y=\\frac{1+2x}{x\\sin(x)}$',
		'\\item Use Logarithmic Differentiation to find the derivative: $y=\\frac{x \\sin(x)}{2x+1}$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 7.3 Exponential Functions';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Solve for $t$: $e^{-0.3 t} =27$',
		'\\item Solve for $t$: $e^{kt}=\\frac{1}{2}$',
		'\\item Solve for $t$: $e^{\\ln(0.2)t}=0.4$',
		'\\item Solve for $t$: $e^{-0.01t}=1000$',
		'\\item Solve for $t$: $e^{kt}=\\frac{1}{10}$',
		'\\item Solve for $t$: $e^{\\ln(2)t} = \\frac{1}{2}$',
		'\\item Solve for $t$: $e^{\\sqrt{t}}=x^2$',
		'\\item Solve for $t$: $e^{\\ln(3)t}=\\frac{1}{3}$',
		'\\item Solve for $t$: $e^{kt}=\\frac{1}{3}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the derivative: $f(x)=e^{4x+x^2}$',
		'\\item Find the derivative: $f(x)=xe^x-e^x$',
		'\\item Find the derivative: $f(x)=(1+2x)e^{2x}$',
		'\\item Find the derivative: $f(x)=(x^2-2x)e^{x^2+2x}$',
		'\\item Find the derivative: $f(x)=(9x^2-6x)e^{3x}$',
		'\\item Find the derivative: $f(x)=e^x(\\sin(x) + \\cos(x))$',
		'\\item Find the derivative: $f(x)=e^{\\cos(x) + \\ln(x)}$',
		'\\item Find the derivative: $f(x)=\\ln(x e^{x})$',
		'\\item Find the derivative: $f(x)=e^{x \\ln(x)}$',
		'\\item Find the derivative: $f(x)=\\frac{e^x }{e^x+1}$',
		'\\item Find the derivative: $f(x)=\\ln \\left( \\frac{e^x }{e^x+1} \\right)$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Evaluate the integral: $\\int \\left( e^{3x}+5e^{-x}\\right) dx$',
		'\\item Evaluate the integral: $\\int \\left( 2e^{-x}+3 e^{2x} \\right)dx$',
		'\\item Evaluate the integral: $\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} dx$',
		'\\item Evaluate the integral: $\\int \\frac{e^{-\\sqrt{x}}}{\\sqrt{x}}dx$',
		'\\item Evaluate the integral: $\\int x e^{-x^2} dx$',
		'\\item Evaluate the integral: $\\int x^3 e^{-x^4}dx$',
		'\\item Evaluate the integral: $\\int \\frac{e^{\\ln(x)}}{x}dx$',
		'\\item Evaluate the integral: $\\int \\frac{e^{1/x}}{x^2}dx$',
		'\\item Evaluate the integral: $\\int \\frac{e^{-1/x^2}}{x^3}dx$',
		'\\item Evaluate the integral: $\\int_0^{\\pi/4} \\sec^2(x) e^{\\tan(x)} dx$',
		'\\item Evaluate the integral: $\\int_0^{\\pi/2} \\cos(x) e^{\\sin(x)} dx$',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 7.4 Exponential Change and Differential Equations';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Solve this separable differentiable equation: $2\\sqrt{xy} \\frac{dy}{dx}=1$',
		'\\item Solve this separable differentiable equation: $\\frac{dy}{dx} =x^2 \\sqrt{y}$',
		'\\item Solve this separable differentiable equation: $\\frac{dy}{dx}=e^{x-y}$',
		'\\item Solve this separable differentiable equation: $\\frac{dy}{dx} = 3x^2e^{-y}$',
		'\\item Solve this separable differentiable equation: $\\frac{dy}{dx} = \\sqrt{y} \\cos^2(\\sqrt{y})$',
		'\\item Solve this separable differentiable equation: $\\sqrt{2xy} \\frac{dy}{dx} = 1$',
		'\\item Solve this separable differentiable equation: $\\frac{dy}{dx}=2xy$',
		'\\item Solve this separable differentiable equation: $\\frac{dy}{dx}=-2 \\sqrt{y}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Suppose that the bacteria in a colony can grow unchecked, by the law of exponential change. The colony starts with 1 bacterium and doubles every half-hour. How many bacteria will the colony contain at the end of 24 hours? (Round your answer to the nearest whole number.)',
		'\\item A colony of bacteria is grown under ideal conditions in a laboratory so that the population increases exponentially with time. At the end of 3 hours there are 10,000 bacteria. At the end of 5 hours there are 40,000. How many bacteria were present initially? (Round your answer to the nearest whole number.)',
		'\\item A colony of bacteria is grown under ideal conditions in a laboratory so that the population increases exponentially with time. At the end of 2 hours there are 10,000 bacteria. At the end of 5 hours there are 40,000. How many bacteria were present initially? (Round your answer to the nearest whole number.)',
		'\\item A colony of bacteria is grown under ideal conditions in a laboratory so that the population increases exponentially with time. At the end of 3 hours there are 5,000 bacteria. At the end of 5 hours there are 40,000. How many bacteria were present initially? (Round your answer to the nearest whole number.)',
		'\\item The half-life of the plutonium isotope is 24,360 years. If 10 g of plutonium is released into the atmosphere by a nuclear accident, how many years will it take for $80\\%$ of the isotope to decay? (Round to the nearest year.)',
		'\\item The half-life of polonium is 139 days, but your sample will not be useful to you after $95\\%$ of the radioactive nuclei present on the day the sample arrives has disintegrated. For about how many days after the sample arrives will you be able to use the polonium? (Round to the nearest day.)',
		'\\item Californium-252 is a radioactive isotope so rare that only 8 g of it have been made in the western world since its discovery by Glenn Seaborg in 1950. The half-life of the isotope is 965 days. How long will it take $95\\%$ of a sample\'s radioactive nuclei to disintegrate? (Round to the nearest day.)',
		'\\item The charcoal from a tree killed in the volcanic eruption that formed Crater Lake in Oregon contained $44.5\\%$ of the carbon-14 found in living matter. About how old is Crater Lake? Assume that the half-life of carbon-14 is 5700 years. (Round your answer to the nearest year.)',
		'\\item A painting attributed to Vermeer (1632-1675), which should contain no more than $96.2\\%$ of its original carbon-14, contains $99.5\\%$ instead. About how old is the forgery? Assume that the half-life of carbon-14 is 5700 years. (Round your answer to the nearest year.)',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': 7.5 L\'Hopital\'s Rule';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{\\sin(x^2)}{x}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{8x^2}{\\cos(x)-1}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{\\sin(x)-x}{x^3}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\pi/2} \\frac{2x-\\pi}{\\cos(2\\pi-x)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\pi/2} \\frac{1-\\sin(x)}{1+\\cos(2x)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 1} \\frac{x-1}{\\ln(x)-\\sin(\\pi x)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{x^2}{\\ln(\\sec(x))}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{x(1-\\cos(x))}{x-\\sin(x)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0} \\frac{x \\sin(x)}{1-\\cos(x)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0^+} \\frac{\\ln(x^2+2x)}{\\ln(x)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0^+} \\frac{\\ln(e^x-1)}{\\ln(x)}$',
];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=[
		'\\item Find the limit: $\\lim_{x \\rightarrow 1^+} x^{1/(1-x)}$',
		'\\item Find the limit: $\\lim_{x \\rightarrow 1^+} x^{1/(x-1)}$		',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} (\\ln(x))^{1/x}$		',
		'\\item Find the limit: $\\lim_{x \\rightarrow e^+} (\\ln(x))^{1/(x-e)}$		',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0^+} x^{-1/\\ln(x)}$		',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} x^{1/\\ln(x)}$		',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0^+} x^x$		',
		'\\item Find the limit: $\\lim_{x \\rightarrow 0^+} \\left( 1+ \\frac{1}{x} \\right)^x$		',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\left( \\frac{x+2}{x-1} \\right)^x$		',
		'\\item Find the limit: $\\lim_{x \\rightarrow \\infty} \\left( \\frac{x^2+1}{x+2} \\right)^{1/x}$		',
];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

/*

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': COMPNAME';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=['\\item Question 1 Type '+theType,
					'\\item Question 2 Type '+theType,
					'\\item Question 3 Type '+theType,
					'\\item Question 4 Type '+theType,
					'\\item Question 5 Type '+theType,
					];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=['\\item Question 1 Type '+theType,
					'\\item Question 2 Type '+theType,
					'\\item Question 3 Type '+theType,
					'\\item Question 4 Type '+theType,
					'\\item Question 5 Type '+theType,
					];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=['\\item Question 1 Type '+theType,
					'\\item Question 2 Type '+theType,
					'\\item Question 3 Type '+theType,
					'\\item Question 4 Type '+theType,
					'\\item Question 5 Type '+theType,
					];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=['\\item Question 1 Type '+theType,
					'\\item Question 2 Type '+theType,
					'\\item Question 3 Type '+theType,
					'\\item Question 4 Type '+theType,
					'\\item Question 5 Type '+theType,
					];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
comps[theComp]=[];
nums[theComp]=[];
names[theComp]='Competency '+theComp+': COMPNAME';
//--------------------------------------------------------------------------------------------------
theType=0;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=['\\item Question 1 Type '+theType,
					'\\item Question 2 Type '+theType,
					'\\item Question 3 Type '+theType,
					'\\item Question 4 Type '+theType,
					'\\item Question 5 Type '+theType,
					];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=['\\item Question 1 Type '+theType,
					'\\item Question 2 Type '+theType,
					'\\item Question 3 Type '+theType,
					'\\item Question 4 Type '+theType,
					'\\item Question 5 Type '+theType,
					];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=['\\item Question 1 Type '+theType,
					'\\item Question 2 Type '+theType,
					'\\item Question 3 Type '+theType,
					'\\item Question 4 Type '+theType,
					'\\item Question 5 Type '+theType,
					];
//--------------------------------------------------------------------------------------------------
theType++;
comps[theComp][theType]=[];
nums[theComp][theType]=1;
comps[theComp][theType]=['\\item Question 1 Type '+theType,
					'\\item Question 2 Type '+theType,
					'\\item Question 3 Type '+theType,
					'\\item Question 4 Type '+theType,
					'\\item Question 5 Type '+theType,
					];
//--------------------------------------------------------------------------------------------------
theComp++;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



*/
