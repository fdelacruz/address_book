var Contact = {};

Contact.parseName = function(str) {
	return str.split(',')[0].trim();
};

module.exports = Contact;
