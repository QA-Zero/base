(function() {

	'use strict';

	let tag = document.querySelector( '.version span' );

	let showVersion = function (text) {
		console.log(text.textContent);
	};

	showVersion( tag );

})();