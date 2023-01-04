const contact = document.createElement('div')
    header = document.createElement('h1');
    header.textContent = `Get in touch!`;

    contact.appendChild(header);

    copy = document.createElement('p');
    copy.textContent = `So call me maybe!`;

    contact.appendChild(copy);

module.exports = {contact: contact};