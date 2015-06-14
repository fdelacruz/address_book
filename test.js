var Contact = require('./contact');

var contact = Contact.createContact("John Smith,604-123-9090");

console.log(contact); // -> should print {name: "John Smith", number: "604-123-9090"}
