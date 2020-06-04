'use strict'

let login = 'Admin';
let password = 'TheMaster';

if (login == 'Admin') {
	console.log('Please enter your password');
} else if (login !== 'Admin') {
	console.log("I don't know you");
} else {
	comsol.log('Canceled')
}

if (password == 'TheMaster') {
	console.log('Welcome!');
} else if (password !== 'TheMaster') {
	console.log('Wrong password')
} else {
	comsol.log('Canceled')
}