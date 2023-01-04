import {homepage} from './home';
import {menu} from './menu';
import {contact} from './contact';
const body = document.querySelector('body');
const content = document.querySelector('#content');
const tab_bar = document.createElement('nav');
body.insertBefore(tab_bar, document.querySelector('#content'));

content.appendChild(homepage);

const homeTab = document.createElement('div');
homeTab.textContent = 'Home';
homeTab.page = homepage;
const menuTab = document.createElement('div');
menuTab.textContent = 'Menu';
menuTab.page = menu;
const contactTab = document.createElement('div');
contactTab.textContent = 'Contact';
contactTab.page = contact;

const tabs = [homeTab, menuTab, contactTab];
tabs.forEach(tab => {
    tab.classList.add('tab');
    tab.addEventListener('click', () => {
        changePage(tab.page);
    })
    tab_bar.appendChild(tab);
});

function changePage(page) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(page);
}