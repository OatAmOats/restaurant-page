function createAbout(){
    const about = document.createElement('div');
    about.classList.add('about');

    const abthead = document.createElement('div');
        abthead.classList.add('abthead');
        abthead.textContent = 'About the ShakeCraft Milk Company';
    
    const abtmain = document.createElement('div');
        abtmain.classList.add('abtmain');
        abtmain.appendChild(createParagraph('The ShakeCraft Milk Company was founded in 2023 when its founder, Vicente Tapia, was trying to come up with an idea for a fake restaurant.'));
        abtmain.appendChild(createParagraph('Since its founding, SCM Co. has opened over a dozen locations worldwide, and critics around the world are celebrating it.'));
        abtmain.appendChild(createParagraph('Unfortunately, it is not real, and you will not be able to try it.'));
        abtmain.appendChild(createParagraph(`Here's Vicente's github page though!`))
        const link = document.createElement('a');
        link.href="https://github.com/OatAmOats";
        link.textContent = "github";
        link.setAttribute('target', '_blank');
        abtmain.appendChild(link);

    about.appendChild(abthead);
    about.appendChild(abtmain);

    return about;
}       

function loadAbout(){
    const main = document.querySelector('.main');
    if(main){
        main.textContent = '';
        main.appendChild(createAbout());
    };
};

function createParagraph(text){
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
};

export {createAbout, loadAbout};