var Command = {};

Command.getOperation = function() {
	return process.argv[2];
};

Command.getOperationData = function() {
	return process.argv[3];
};

Command.add = function(done) {
	var Contact = require('./contact');
	var data = this.getOperationData();
	var contactObj = Contact.createContact(data);

	Contact.saveContact(contactObj, done);
};

Command.find = function(done) {
	var Contact = require('./contact');
	var data = this.getOperationData();

	Contact.findContacts(data, function(err, foundContacts) {
		if (err) {
			return done(err);
		}

		foundContacts.forEach(function(contact) {
			console.log(contact.name, contact.number);
		});

		done(null, foundContacts);
	});
};

module.exports = Command;
