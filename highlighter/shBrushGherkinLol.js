SyntaxHighlighter.brushes.GherkinLol = function()
{
	var keywords	= "I.CAN.HAZ WEN DEN AN BUT";

	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,			css: 'comments' },
		{ regex: /@.*$/gmi,													css: 'comments' },
		{ regex: /OH HAI:/gmi,												css: 'keyword' },
		{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),				css: 'variable' },
		{ regex: /MISHUN:/gmi,											css: 'keyword' },
		{ regex: /In order to/gmi,											css: 'variable' },
		{ regex: /As an?/gmi,												css: 'variable' },

		{ regex: /I want to/gmi,											css: 'variable' },
		{ regex: /I wish to/gmi,											css: 'variable' },
		{ regex: /So that/gmi,												css: 'variable' }
		];
};
SyntaxHighlighter.brushes.GherkinLol.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.GherkinLol.aliases    = ['gherkinlol'];
