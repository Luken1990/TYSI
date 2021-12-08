const rightBtn = document.querySelector('[data-slide = right]');
const leftBtn = document.querySelector('[data-slide = left]');
const teamContainer = document.querySelector('.teams-container');
const staff = document.querySelector('.member');
const width = staff.clientWidth;

const team = teamContainer.children;
const dottedNav = document.querySelector('#dotted-nav');
const dots = document.querySelectorAll('.dots');



let currentSlide = 0;


leftBtn.addEventListener('click', () => {
  if (currentSlide <= 0) return;
  currentSlide--;
  teamContainer.style.transition = 'transform 0.4s ease-in-out';
  teamContainer.style.transform = 'translateX(' + -width * currentSlide + 'px';
  dotsBtn()
});

rightBtn.addEventListener('click', () => {
  if (currentSlide >= team.length - 1) return;
  currentSlide++;
  teamContainer.style.transition = 'transform 0.4s ease-in-out';
  teamContainer.style.transform = 'translateX(' + -width * currentSlide + 'px';
  dotsBtn()
});


function dotsBtn(){
  for (let i = 0 ; i < dots.length ; i++){
    dots[i].classList.remove('selected');

    if(dots[i].dataset.member == currentSlide){
      dots[i].classList.add('selected');
    }
  }
  
}

dottedNav.addEventListener('click' , (e)=> {
  const num = e.target.dataset.member;
  if(num) {
    dots.forEach((btn) =>{
      btn.classList.remove('selected');
      e.target.classList.add('selected');
      currentSlide = num ;
      teamContainer.style.transition = 'transform 0.4s ease-in-out';
      teamContainer.style.transform =
        'translateX(' + -width * currentSlide + 'px';
    })
  }
})


teamContainer.addEventListener('transitionend', () => {
  if (currentSlide == 0) {
    leftBtn.classList.add('deactivate');
  } else {
    leftBtn.classList.remove('deactivate');
  }

  if (currentSlide >= team.length - 1) {
    rightBtn.classList.add('deactivate');
  } else {
    rightBtn.classList.remove('deactivate');
  }
});


// detect screen and reset transition to 0 

const phoneMedia = window.matchMedia('(max-width:428px)')

function screenSize (){
  if(!window.matchMedia('(max-width:428px)').matches){
    teamContainer.style.transition = 'transform 0.4s ease-in-out';
    teamContainer.style.transform = `translateX(0px)`
  }
  screenSize()
}