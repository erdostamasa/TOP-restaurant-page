import './style.css';
import loadHomeContent from './homePage';
import loadMenuContent from './menuPage';
import loadAboutContent from './aboutPage';
import loadContactContent from './contactPage';

const tabContentLoaders = {
    'home' : loadHomeContent,
    'menu' : loadMenuContent,
    'about': loadAboutContent,
    'contact' : loadContactContent
}

let activeTab = 'home'

const tabButtons = document.querySelectorAll('.tab-button');
const content = document.querySelector('#content');

tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick)
})

function handleTabClick(event){
    const tabName = event.target.dataset.tab;
    console.log(tabName);
    
    // Remove active class from all buttons
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    content.replaceChildren();
    content.appendChild(tabContentLoaders[tabName]());
}

// Load the initial content when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active state for home tab
    const homeButton = document.querySelector('[data-tab="home"]');
    homeButton.classList.add('active');
    
    content.appendChild(tabContentLoaders['home']());
});

console.log("Test message kapibaara");
