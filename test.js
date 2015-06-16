var Contact = require('./contact');

var contacts = [ { name: "John Smith", number: "604-123-9090" } ];

var contact = 'John Smith';

Contact.findContacts(contact, function(err) {
	console.log('success');
});
