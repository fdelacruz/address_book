var Contact = {};

Contact.parseName = function(str) {
	return str.split(',')[0].trim();
};

Contact.parseNumber = function(str) {
	return str.split(',')[1].trim();
};

Contact.createContact = function(str) {
	return {
		name : this.parseName(str),
		number : this.parseNumber(str)
	};
};

Contact.loadContacts = function(done) {
	var jf = require('jsonfile');
	
	// long form
	// jf.readFile('data.json', function(err, data) {
	// 	done(err, data);
	// });
	
	// short form
	jf.readFile('data.json', done);
};

Contact.saveContacts = function(contacts, done) {
	var jf = require('jsonfile');
	jf.writeFile('data.json', contacts, done);
};

module.exports = Contact;
