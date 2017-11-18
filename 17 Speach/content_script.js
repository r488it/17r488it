"use strict";

// DOMNodeInserted
var code = 
	document.getElementsByXPath = function(expression, parentElement) {
		var r = []
		var x = document.evaluate(expression, parentElement || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
		for (var i = 0, l = x.snapshotLength; i < l; i++) {
			r.push(x.snapshotItem(i))
		}
		return r
	};
	var num = 0;
	window.open('https://r488it.github.io/', "r488it", 'width=200, height=200');
  $(document).on('click DOMNodeInserted', function() {
		var elements = document.getElementsByXPath('//aside/div/div/div/ul/li');
		if (elements.length >= 1 && elements.length>num) {
			num = num + 1
			var elements2 = document.getElementsByXPath('//aside/div/div/div/ul/li[position()=' + elements.length + ']/span');
			var comment = elements2[elements2.length - 1].innerText
			// alert(num);
			speechSynthesis.speak(new SpeechSynthesisUtterance(comment));
		};

  	 
});

// Scriptタグの挿入
var script = document.createElement('script');
script.text = '(' + code.toString() + ')()';
document.body.appendChild(script);




