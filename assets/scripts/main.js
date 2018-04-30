(function() {
	'use strict';


	alert( 'Артур уёбок' );
	console.dir( getResult() );


	function getResult() {
		return [];
	}

	function getFirstArray() {
		return [
			{
				ident: '13',
				value: '13-first',
				version: '100'
			},
			{
				ident: '15',
				value: '15-first',
				version: '100'
			},
			{
				ident: '1',
				value: '01-first',
				version: '2'
			},
			{
				ident: '3',
				value: '03-first',
				version: '8'
			},
			{
				ident: '5',
				value: '05-first',
				version: '4'
			},
			{
				ident: '7',
				value: '07-first',
				version: '5'
			},
			{
				ident: '9',
				value: '09-first',
				version: '2'
			},
			{
				ident: '11',
				value: '11-first',
				version: '8'
			},
			{
				ident: '17',
				value: '17-first',
				version: '100'
			},
			{
				ident: '19',
				value: '19-first',
				version: '100'
			}
		];
	}

	function getSecondArray() {
		return [
			{
				ident: '1',
				value: '01-second',
				version: '2'
			},
			{
				ident: '2',
				value: '02-second',
				version: '5'
			},
			{
				ident: '3',
				value: '03-second',
				version: '11'
			},
			{
				ident: '4',
				value: '04-second',
				version: '7'
			},
			{
				ident: '5',
				value: '05-second',
				version: '4'
			},
			{
				ident: '6',
				value: '06-second',
				version: '1'
			},
			{
				ident: '7',
				value: '07-second',
				version: '9'
			},
			{
				ident: '8',
				value: '08-second',
				version: '12'
			},
			{
				ident: '9',
				value: '09-second',
				version: '3'
			},
			{
				ident: '10',
				value: '10-second',
				version: '15'
			},
			{
				ident: '11',
				value: '11-second',
				version: '8'
			}
		];
	}
})();