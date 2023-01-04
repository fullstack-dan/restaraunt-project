const menu = document.createElement('div')
    header = document.createElement('h1');
    header.textContent = `Our Menu`;

    menu.appendChild(header);

    copy = document.createElement('p');
    copy.textContent = `Food! Food food food food food!`;

    menu.appendChild(copy);

module.exports = {menu: menu};