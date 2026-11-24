//////////////////////////////// menu nav ///////////////////////////////////////////

const viewmenu = document.getElementById('menu');

viewmenu.addEventListener('click', () => {
    const menubar = document.getElementById('menuNav');

    menubar.classList.toggle('hidden');
})


const mainMenu = document.querySelector('#navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        mainMenu.classList.add('slidedown');
    } else {
        mainMenu.classList.remove('slidedown');
    }
});


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


////////////// cards project ////////////////////

let projectcards = [
    { id: 1, title: "Silent Paranoia", description: "This is a full version of the psychological horror game", thumbnail: "https://img.itch.zone/aW1nLzI3Njg1MjEzLnBuZw==/315x250%23c/s2XHj2.png", link: "https://phxpha10.itch.io/silent-paranoia", toggle: true },
    { id: 2, title: "UX/Ui Design app", description: "My 3rd-year university project is a UX/UI design app that uses AI to generate color themes and design elements.", thumbnail: "/homelogin uxui.png", link: "https://www.figma.com/proto/d2Sk7XD8DKKurXAQz3NzoO/Final-Project?node-id=0-1&t=b8SxgB7c7jrOhaKs-1", toggle: true },
    { id: 3, title: "My SQL", description: "This project analyzes existing playable games to identify and reverse-engineer their underlying databases.", thumbnail: "/SQL.png", link: "https://canva.link/9u0r7gsqv40mgmr", toggle: true },
    { id: 4, title: "3D Modeling", description: "Designed and optimized 3D game assets using a standard game-ready pipeline, ensuring high visual quality while maintaining optimal performance in the game engine.", thumbnail: "/humen.jpg", link: "https://canva.link/r7dexuojj6ccqhl", toggle: true },
    { id: 5, title: "Cart", description: "comiong soon!", thumbnail: "/Dashbord.png", link: "#", toggle: false },
];


const createCardject = (projectcard) => {
    const projectCard = document.createElement('article');
    projectCard.className = 'flex flex-col rounded-2xl w-[22rem] min-w-xs bg-[#07182E] text-white overflow-hidden shrink-0 [&_button]:self-center [&_button]:justify-self-end snap-start card-pj';

    const projectThumbnail = document.createElement('img');
    projectThumbnail.className = 'w-full object-top object-cover h-50 bg-top mb-3';
    projectThumbnail.src = projectcard.thumbnail;

    const projecttitle = document.createElement('h2');
    projecttitle.className = 'text-2xl font-semibold mx-5 mb-3'
    projecttitle.innerText = projectcard.title;

    const headerCard = document.createElement('header')

    const track = document.createElement('div');
    track.className = 'wrap-anywhere mx-3';

    const cardfooter = document.createElement('div');
    cardfooter.className = 'wrap-anywhere mx-3';

    const productcomment = document.createElement('p')
    productcomment.className = 'mb-3'
    productcomment.innerText = projectcard.description;

    const projectbutton = document.createElement('button')
    projectbutton.innerText = 'View Project'
    projectbutton.addEventListener('click', () => {
        if (projectcard.toggle === true) {
            window.open(projectcard.link, '_blank');
        }
    });

    projectbutton.className = projectcard.toggle === true ? 'btn-project' : 'btn-project-disabled';

    productcomment.className = projectcard.toggle === true ? 'text-white' : 'text-red-500';

    projectCard.append(headerCard, track, cardfooter, projectbutton);
    headerCard.append(projectThumbnail, projecttitle);
    cardfooter.append(productcomment);

    document.querySelector('#projectList').appendChild(projectCard)
};

const creatcards = () => {
    projectcards.forEach(project => {
        createCardject(project)
    })
}

creatcards();

///////////////////////// copy to clipboard //////////////////////////////

document.querySelectorAll('a.copy').forEach((link) => {
    const original = link.textContent;

    link.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(link.dataset.copy);
            alert("คัดลอกสำเร็จ: " + link.dataset.copy); 
           
        } catch {
            alert("คัดลอกไม่สำเร็จ");
        }
        
    });
});

//////////////////////// scroll spy //////////////////////////////

const navlink = document.querySelectorAll("nav a")

function setAtive (){
    let currentSection = "";
    document.querySelectorAll("section")

    .forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionbuttom = sectionTop + section.offsetHeight;
        if(window.scrollY >= sectionTop && window.scrollY < sectionbuttom) {
            currentSection = section.getAttribute("id")
        }
    })

    navlink.forEach((link) => {
        link.classList.remove("active");
        if(link.getAttribute("href").substring(1) === currentSection){
            link.classList.add("active");
        }
    })
}

window.addEventListener("scroll",setAtive)