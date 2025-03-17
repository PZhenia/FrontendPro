const contactBook = {
    contacts: [{name: 'John', phone: '0123456789', email: 'john@gmail.com'}, {name: 'Alex', phone: '9876543210', email: 'alex@gmail.com'}, {name: 'Lisa', phone: '0122455788', email: 'lisa@gmail.com'}],
    contactByName(name){
        const contact = this.contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLowerCase());
        if(contact){
            return contact;
        } else{
            console.log('Contact with name "'+name+'" not found');
            return null;
        }
    },
    addContact(name, phone = '*', email = '*'){
        const newContact = {name: name, phone: phone, email: email};
        const contact = this.contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLowerCase() && contact.phone === phone && contact.email === email);
        if(contact){
            console.log("This contact is already exists");
            return null;
        } else{
            this.contacts.push(newContact);
            return newContact;
        }
    },
}
console.log(contactBook.contactByName('Alex'));
console.log(contactBook.addContact('Zhenia','0111155688', 'zzzh@gmail.com'));
console.log(contactBook.contactByName('Maria'));
console.log(contactBook.addContact('Karen'));
console.log(contactBook.addContact('Alex', '9876543210', 'alex@gmail.com'));