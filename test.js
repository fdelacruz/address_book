var Contact = require('./contact')

var name = Contact.parseName("John Smith,604-123-9090")

console.log(name) // -> should print "John Smith"
