var Contact = require('./contact');

var contacts = [ { name: "John Smith", number: "604-123-9090" } ];

Contact.saveContact(contacts, function(err) {
	console.log('success');
});
