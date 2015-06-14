var Contact = require('./contact')

var number = Contact.parseNumber("John Smith,604-123-9090")

console.log(number) // -> should print "604-123-9090"
