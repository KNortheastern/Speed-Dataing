(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.rconsole = {
		'input': />.*/,
		'error': /(Error).*/
	};

}(Prism));