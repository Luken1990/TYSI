// console.log('live')

const NAV_BTN_CONTAINER = document.querySelector('#links-container');
const NAV_BTN = document.querySelector('#links-wrapper');
const NAV_TOGGLE = document.querySelector('#main-nav-toggle');

NAV_TOGGLE.addEventListener('click', () => {
  const NAV_BTN_CONTAINER_HEIGHT =
    NAV_BTN_CONTAINER.getBoundingClientRect().height;
  const NAV_BTN_HEIGHT = NAV_BTN.getBoundingClientRect().height;
  console.log('clicked');
  if (NAV_BTN_CONTAINER_HEIGHT === 0) {
    NAV_BTN_CONTAINER.style.height = `${NAV_BTN_HEIGHT}px`;
  } else {
    NAV_BTN_CONTAINER.style.height = 0;
  }
});

// ----- NAV FIXED -------

const HEADER_NAV = document.querySelector('#header-nav');

window.addEventListener('scroll', () => {
  const HEADER_NAV_HEIGHT = HEADER_NAV.getBoundingClientRect().height;
  let scroll_Y = window.pageYOffset;
  if (scroll_Y > HEADER_NAV_HEIGHT) {
    HEADER_NAV.classList.add('fixed-nav');
  } else {
    HEADER_NAV.classList.remove('fixed-nav');
  }
});

// ----- SMOOTH SCROLLING -------

const SCROLL_LINKS = document.querySelectorAll('.scroll-link');

SCROLL_LINKS.forEach((link) => {
  link.addEventListener('click', (e) => {
    //prevent default scroll event
    e.preventDefault();
    const ID = e.currentTarget.getAttribute('href').slice(1);
    //slice.() = removes characters from a string
    const SECTION = document.getElementById(ID);
    const HEADER_NAV_HEIGHT = HEADER_NAV.getBoundingClientRect().height;
    const NAV_BTN_HEIGHT = NAV_BTN.getBoundingClientRect().height;
    const FIXED_NAV = HEADER_NAV.classList.contains('fixed-nav');

    let position = SECTION.offsetTop - HEADER_NAV_HEIGHT;

    // if(!FIXED_NAV){ //if fixed nav is equals to false
    //   position = position - HEADER_NAV_HEIGHT;
    // }

    if(NAV_BTN_HEIGHT !== 0){
      position = position + NAV_BTN_HEIGHT;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    NAV_BTN_CONTAINER.style.height = 0;
  });
});

