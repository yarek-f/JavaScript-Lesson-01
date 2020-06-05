'use strict'

let login = 'Admin';
let password = 'TheMaster';

switch (login) {
case 'Admin': {
	console.log('Please enter your password');

	switch (password) {
	case 'TheMaster': {
		console.log('Welcome!');
		break;
	}
	default:
		console.log("Wrong password");
	}
	break;
}
default:
	console.log("I don't know you");
}
