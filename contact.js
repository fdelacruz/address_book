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

module.exports = Contact;
