//////////////////////////////// menu nav ///////////////////////////////////////////

const hookNav = () => {
    const viewmenu = document.getElementById('menu');

    viewmenu.addEventListener('click', () => {
        const menubar = document.getElementById('menuNav');

        menubar.classList.toggle('hidden');
    })

}
hookNav();

const mainMenu = document.querySelector( '#navbar' );
window.addEventListener( 'scroll', ()=> {
    if( this.scrollY > 100 ){
        mainMenu.classList.add( 'slidedown' );
    }else{
        mainMenu.classList.remove( 'slidedown' );
    }
} );


////////////////////////////////// button nextstate ///////////////////////////////////////////

const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function scrollByCard(direction) {
    const card = track.querySelector('article');
    const distance = card.offsetWidth;
    track.scrollBy({ left: direction * distance, behavior: 'smooth' });
}

prevBtn.addEventListener('click', () => scrollByCard(-4));
nextBtn.addEventListener('click', () => scrollByCard(4));

function updateButtons() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= 2;
    nextBtn.disabled = track.scrollLeft >= maxScroll - 2;
}

track.addEventListener('scroll', updateButtons);
window.addEventListener('resize', updateButtons);
updateButtons();

////////////////////////////////// button navigation ///////////////////////////////////////////



const btnabout = () => {
    const btnskills = document.getElementById('btnskill')
    const btntact = document.getElementById('btncontact')
    ///
    const pathskil = document.getElementById('scrollskills')
    const pathcontact = document.getElementById('scrocontact')

    
    btnskills.addEventListener('click', () => {
        pathcontact.classList.add('hidden')
        pathskil.classList.remove('hidden')

    })
}
btnabout();


////////////// cards project ////////////////////

let projectcards = [
    { id: 1, title: "Silent Paranoia", description: "This is a full version of the psychological horror game", thumbnail:"https://img.itch.zone/aW1nLzI3Njg1MjEzLnBuZw==/315x250%23c/s2XHj2.png",toggle:0 },
    { id: 2, title: "Dashbord", description: "This is a full version of the psychological horror game", thumbnail: "#", toggle:1}
];

let projectDialog = [
    {id:1, }
]

const createCardject = (projectcard) => {
    const projectCard = document.createElement('article');
    projectCard.className = 'flex flex-col rounded-2xl w-xl min-w-sm bg-[#07182E] text-white overflow-hidden snap-start [&_button]:self-center';

    const projectThumbnail = document.createElement('img');
    projectThumbnail.className = 'w-full'
    projectThumbnail.src = projectcard.thumbnail;

    const projecttitle = document.createElement('h2');
    projecttitle.className = 'text-2xl font-semibold mx-3 mb-3'
    projecttitle.innerText = projectcard.title;

    const headerCard = document.createElement('header')

    const productPrice = document.createElement('div');
    productPrice.className = 'wrap-anywhere mx-3';

    const productcomment = document.createElement('p')
    productcomment.className = 'mb-3'
    productcomment.innerText = projectcard.description;

    const productbutton = document.createElement('button')
    productbutton.className = 'btn-project '
    productbutton.innerText = 'Read'
    productbutton.popoverTarget = projectDialog

    productbutton.className = projectcard.toggle === 0 ? 'btn-project' : 'btn-project-disabled';

    

    projectCard.append(headerCard,productPrice,productbutton);
    headerCard.append(projectThumbnail,projecttitle);
    productPrice.append(productcomment);

    document.querySelector('#projectList').appendChild(projectCard)
};

// const dialog = () => {

// };

const creatcards = () => {
    projectcards.forEach(project => {
        createCardject(project)
    })
}

creatcards();
console.log("ทำงาน")