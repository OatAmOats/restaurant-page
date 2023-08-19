function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const mealCont = document.createElement('div');
        mealCont.classList.add('mealCont');

        const glassOfMilk = document.createElement('img');
        glassOfMilk.src = './images/glass-of-milk.jpg'
        glassOfMilk.alt = 'glass of milk';
        
        const milkTxt = document.createElement('div');
        milkTxt.classList.add('vMealTxt');

            const milkName = document.createElement('div');
            milkName.appendChild(createBig('Our Signature Shake: A Glass of Milk™!'));

            const milkDesc = document.createElement('div');
            milkDesc.appendChild(createParagraph(`Our Glass of Milk™ will blow your mind. Order it warm or chilled depending on your preference, 
            and for just $2.99 you get a side of cookies to dunk.`));
            
            milkTxt.appendChild(milkName);
            milkTxt.appendChild(milkDesc);

        mealCont.appendChild(glassOfMilk);
        mealCont.appendChild(milkTxt);
        
    const testCont1 = document.createElement('div');
    testCont1.classList.add('testimonial');

        const test1txt = document.createElement('div');
        test1txt.append(createParagraph(`Wow, these shakes are on another level. The signature Glass of Milk™ will blow your socks off!`));

        const test1au = document.createElement('div');
        test1au.classList.add('testAU');
        test1au.textContent = "-Dairy Dan, milkman by trade, milkshake reviewer by passion";

        testCont1.appendChild(test1txt);
        testCont1.appendChild(test1au);

    const testCont2 = document.createElement('div');
    testCont2.classList.add('testimonial');

        const test2txt = document.createElement('div');
        test2txt.append(createParagraph(`This is a restaurant worth coming back from the dead for. The milkshakes are incredible and the Glass of Milk™ with cookies
         will really get your body Moo-ving!`));

        const test2au = document.createElement('div');
        test2au.classList.add('testAU');
        test2au.textContent = "-The Ghost of Larry Longhorn, cattle";

        testCont2.appendChild(test2txt);
        testCont2.appendChild(test2au);
    
    home.appendChild(mealCont);
    home.appendChild(testCont1);
    home.appendChild(testCont2);

    return home;
};
function createBig(text){
    let big = document.createElement('div');
    big.classList.add('desc');
    big.textContent = text;
    return big;
};

function createParagraph(text){
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
};

function loadHome(){
    const main = document.querySelector('.main');
    if(main){
        main.textContent = '';
        main.appendChild(createHome());
    };
};

export {loadHome, createHome};