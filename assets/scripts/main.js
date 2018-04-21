(function() {
	'use strict';


	showVersion();


	function showVersion() {
		let tag = document.querySelector( '.version span' );
		console.log( tag.textContent );
	}
})();