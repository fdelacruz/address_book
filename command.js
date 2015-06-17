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

module.exports = Command;
