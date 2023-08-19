import {loadHome, createHome} from './home';
import {loadMenu, createMenu} from './menu';
import {loadAbout, createAbout} from './about';

function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');

    const name = document.createElement('div');
    name.classList.add('restName');
    name.textContent = 'ShakeCraft Milk Co.'

    header.appendChild(name);
    header.appendChild(createNav());

    return header;
};

function createNav() {
    const nav = document.createElement("nav");
  
    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("active")) return;
      setActiveButton(homeButton);
      loadHome();
    });
  
    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("active")) return;
      setActiveButton(menuButton);
      loadMenu();
    });
  
    const aboutButton = document.createElement("button");
    aboutButton.classList.add("button-nav");
    aboutButton.textContent = "About";
    aboutButton.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("active")) return;
      setActiveButton(aboutButton);
      loadAbout();
    });
  
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);
  
    return nav;
  }
  
  function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

function createMain(){
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    return main;
};

function initializeWebsite() {
  const content = document.getElementById("content");

  if(content){
    content.appendChild(createHeader());
    content.appendChild(createMain());
    loadHome();
    //  setActiveButton(document.querySelector(".button-nav"));
    return;
  };
};

export default initializeWebsite();


