//////////////////////////////// menu nav ///////////////////////////////////////////

const hookNav = () => {
    const viewmenu = document.getElementById('menu');

    viewmenu.addEventListener('click', () => {
        const menubar = document.getElementById('menuNav');

        menubar.classList.toggle('hidden');
    })

}
hookNav();

///////////////////////////////  nav ///////////////////////////////////////////
const links = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.toggle(
        'active', a.getAttribute('href') === '#' + entry.target.id
      ));
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });  // นับเมื่อ section อยู่กลางจอ

sections.forEach(s => observer.observe(s));

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

    btntact.addEventListener('click', () => {
       pathskil.classList.add('hidden');
        console.log('tact');
       pathcontact.classList.remove('hidden'); 
       
    })
    btnskills.addEventListener('click', () => {
        pathcontact.classList.add('hidden')
        console.log('skills')
        pathskil.classList.remove('hidden')

    })
}
btnabout();