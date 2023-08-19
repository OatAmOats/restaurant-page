function createMenu(){
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menugrid')
        const milk = document.createElement('div');
        milk.classList.add('milkcont');
            const milkimg = document.createElement('img');
            milkimg.src = './images/glass-of-milk.jpg'
            milkimg.alt = 'glass of milk'

            const milkText = document.createElement('div');
            milkText.classList.add('milktxt');
            milkText.textContent = 'The ShakeCraft Milk Co. Signature Glass of Milk™'
            
            milk.appendChild(milkText);
            milk.appendChild(milkimg);
        
        const flavors = document.createElement('div');
        flavors.classList.add('flavors');
        flavors.textContent = 'Alternatively, you can choose a milkshake combining any of our flavors!';

        const chocolate = createMenuItem('Chocolate');
            const chocim = document.createElement('img');
                chocim.src = './images/choc.jpeg';
                chocim.alt = 'chocolate milkshake'
            chocolate.appendChild(chocim);
        const vanilla = createMenuItem('Vanilla');
            const vanim = document.createElement('img')
                vanim.src = './images/vanilla.jpeg';
                vanim.alt = 'vanilla milkshake';
            vanilla.appendChild(vanim);
        const strawberry = createMenuItem('Strawberry');
            const strawim = document.createElement('img');
                strawim.src = './images/strawberry.jpeg';
                strawim.alt = 'strawberry milkshake'
            strawberry.appendChild(strawim);
        const mint = createMenuItem('Mint');
            const mintim = document.createElement('img');
                mintim.src = './images/mint.jpeg';
                mintim.alt = 'mint milkshake'
            mint.appendChild(mintim);
        const raspberry = createMenuItem('Raspberry');
            const raspim = document.createElement('img');
                raspim.src = './images/rasp.jpeg';
                raspim.alt = 'raspberry milkshake'
            raspberry.appendChild(raspim);
        const cookncream = createMenuItem(`Cookies n' Cream`);
            const cncim = document.createElement('img');
                cncim.src = './images/cookncream.jpeg';
                cncim.alt = 'cookies n cream milkshake';
            cookncream.appendChild(cncim);
        const pb = createMenuItem('Peanut Butter');
            const pbim = document.createElement('img');
                pbim.src = './images/pbm.jpeg';
                pbim.alt = 'peanut butter milkshake ';
            pb.appendChild(pbim);
        const coffee = createMenuItem('Coffee');
            const coffim = document.createElement('img');
                coffim.src = './images/coffee.jpeg';
                coffim.alt = 'coffee milkshake';
            coffee.appendChild(coffim);
        const banana = createMenuItem('Banana');
            const banim = document.createElement('img');
                banim.src = './images/banan.jpeg';
                banim.alt = 'banana milkshake';
            banana.appendChild(banim);

    menuContainer.appendChild(milk);
    menuContainer.appendChild(flavors);
    menuContainer.appendChild(chocolate);
    menuContainer.appendChild(vanilla);
    menuContainer.appendChild(strawberry);
    menuContainer.appendChild(mint);
    menuContainer.appendChild(raspberry);
    menuContainer.appendChild(cookncream);
    menuContainer.appendChild(pb);
    menuContainer.appendChild(coffee);
    menuContainer.appendChild(banana);

    return menuContainer;
};

function createMenuItem(name){
    let item = document.createElement('div');
    item.classList.add('menuItem');
    let title = document.createElement('div');
    title.classList.add('menuTitle');
    title.textContent = name;
    item.appendChild(title);

    return item;
};

function loadMenu(){
    const main = document.querySelector('.main');
    if(main){
        main.textContent = '';
        main.appendChild(createMenu());
    };
};

export {createMenu, loadMenu};