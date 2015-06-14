var Contact = {};

Contact.parseName = function(str) {
	return str.split(',')[0].trim();
};

Contact.parseNumber = function(str) {
	return str.split(',')[1].trim();
};

module.exports = Contact;
