//////////////////////////////// menu nav ///////////////////////////////////////////

const viewmenu = document.getElementById('menu');

viewmenu.addEventListener('click', () => {
    const menubar = document.getElementById('menuNav');

    menubar.classList.toggle('hidden');
})


const mainMenu = document.querySelector('#navbar');
window.addEventListener('scroll', () => {
    if (this.scrollY > 100) {
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

const projectcards = [
    { id: 1, title: "Silent Paranoia", description: "This is a full version of the psychological horror game", thumbnail: "https://img.itch.zone/aW1nLzI3Njg1MjEzLnBuZw==/315x250%23c/s2XHj2.png", toggle: 0 },
    { id: 2, title: "Dashbord", description: "comiong soon!", thumbnail: "src/assets/Dashbord.png", toggle: 1 }
];

const projectDialog = [
    { id: 1, Link: "https://phxpha10.itch.io/silent-paranoia" }
]

const createCardject = (projectcard) => {
    const projectCard = document.createElement('article');
    projectCard.className = 'flex flex-col rounded-2xl w-sm min-w-sm bg-[#07182E] text-white overflow-hidden shrink-0 [&_button]:self-center ';

    const projectThumbnail = document.createElement('img');
    projectThumbnail.className = 'w-full object-cover h-50'
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
    productbutton.innerText = 'Read'
    productbutton.popoverTarget = projectDialog

    productbutton.className = projectcard.toggle === 0 ? 'btn-project' : 'btn-project-disabled';

    productcomment.className = projectcard.toggle === 0 ? 'text-white' : 'text-red-500';

    projectCard.append(headerCard, productPrice, productbutton);
    headerCard.append(projectThumbnail, projecttitle);
    productPrice.append(productcomment);

    document.querySelector('#projectList').appendChild(projectCard)
};

const creatcards = () => {
    projectcards.forEach(project => {
        createCardject(project)
    })
}

creatcards();

///////////////////////// btn-link ///////////////////////////////

// document.querySelectorAll('.copy').forEach((btn) => {
//   const original = btn.textContent;

//   btn.addEventListener('click', async () => {
//     try {
//       await navigator.clipboard.writeText(btn.dataset.copy);
//       btn.textContent = 'คัดลอกแล้ว ';
//     } catch {
//       btn.textContent = 'คัดลอกไม่สำเร็จ';
//     }
//     setTimeout(() => (btn.textContent = original), 2000);
//   });
// });

// btn.classList.add('done');
// setTimeout(() => btn.classList.remove('done'), 2000);

///// a link ////

document.querySelectorAll('a.copy').forEach((link) => {
    const original = link.textContent;

    link.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(link.dataset.copy);
            link.textContent = 'คัดลอกแล้ว';
        } catch {
            link.textContent = 'คัดลอกไม่สำเร็จ';
        }
        setTimeout(() => (link.textContent = original), 1000);
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

window.addEventListener("scroll",setActiveLink)