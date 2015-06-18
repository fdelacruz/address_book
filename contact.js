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
	var jf = require('jsonfile'),
	util = require('./util'),
	jsonPath = util.getDataPath();

	jf.readFile(jsonPath, done);
};

Contact.saveContacts = function(contacts, done) {
	var jf = require('jsonfile'),
	util = require('./util'),
	jsonPath = util.getDataPath();
	
	jf.writeFile(jsonPath, contacts, done);
};

Contact.saveContact = function(contact, done) {
	var _this = this;

	this.loadContacts(function(err, contacts) {
		if (err) { return done(err); }
		contacts.push(contact);
		_this.saveContacts(contacts, done);
	});
};

Contact.findContacts = function(name, done) {
	this.loadContacts(function(err, contacts) {
		if (err) { return done(err); }

		var foundContacts = contacts.filter(function(contact) {
			return contact.name == name;
		});	

		done(err, foundContacts);
	});
};

module.exports = Contact;
