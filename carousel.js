const rightBtn = document.querySelector('[data-slide = right]');
const leftBtn = document.querySelector('[data-slide = left]');
const teamContainer = document.querySelector('.teams-container');
const staff = document.querySelector('.member');
const width = staff.clientWidth;

const team = teamContainer.children;
const dottedNav = document.querySelector('#dotted-nav');
const dots = document.querySelectorAll('.dots');

let currentSlide = 0;
// console.log(team.length);

//check if theres anything on the left or right
//use data attribute?

leftBtn.addEventListener('click', () => {
  if (currentSlide <= 0) return;
  teamContainer.style.transition = 'transform 0.4s ease-in-out';
  currentSlide--;
  teamContainer.style.transform = 'translateX(' + -width * currentSlide + 'px';
  console.log(currentSlide)
});

rightBtn.addEventListener('click', () => {
  if (currentSlide >= team.length - 1) return;
  teamContainer.style.transition = 'transform 0.4s ease-in-out';
  currentSlide++;
  teamContainer.style.transform = 'translateX(' + -width * currentSlide + 'px';
  
console.log(currentSlide)
});


dottedNav.addEventListener('click' , (e)=> {
  const num = e.target.dataset.member;
  console.log(num)
  if(num) {
    dots.forEach((btn) =>{
      btn.classList.remove('selected');
      e.target.classList.add('selected');
      currentSlide = num - 1;
      teamContainer.style.transition = 'transform 0.4s ease-in-out';
      teamContainer.style.transform =
        'translateX(' + -width * currentSlide + 'px';
    })
    
  }
})
// dottedNav.forEach((btn) => {
//   // console.log(btn)
//   btn.addEventListener('click', (e) => {
//     const currentDotNum = e.currentTarget.dataset.member;
//     if (true) {
//       btn.classList.remove('selected');
//       currentSlide = currentDotNum - 1;
//       teamContainer.style.transition = 'transform 0.4s ease-in-out';
//       teamContainer.style.transform =
//         'translateX(' + -width * currentSlide + 'px';
//       e.currentTarget.classList.add('selected');
//     }
//   });
// });



teamContainer.addEventListener('transitionend', () => {
  if (currentSlide === 0) {
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

// ----------------------------------------------------------------------
// const teams = [
//   {
//     id: 'josh',
//     picture: `/14-scroll/assets/josh.jpg`,
//     name: `Joshua Roberts`,
//     role: `Head of Broadcast`,
//   },
//   {
//     id: 'jerome',
//     picture: `/14-scroll/assets/Truce.jpg`,
//     name: `Jerome Gabriel`,
//     role: `Head of Creative`,
//   },
//   {
//     id: 'luke',
//     picture: `/14-scroll/assets/lu.jpg`,
//     name: `Luke Nguyen`,
//     role: `Designer / Developer`,
//   },
// ];

// const body = document;
// const carouselBtn = document.querySelectorAll('.carousel-btn');
// const team = document.querySelector('.teams-container');

// body.addEventListener('DOMContentLoaded', () => {
//   ourTeam(teams);
// });

// function ourTeam() {
//   const members = teams
//     .map((obj) => {
//       return `
//     <div id=${obj.id} class="member">
//       <div class="team-pic">
//         <img src=${obj.picture} alt="" />
//       </div>

//       <div class="team-description">
//         <h3 class="name">${obj.name}</h3>
//         <p class="role">${obj.role}</p>
//       </div>
//     </div>`;
//     })
//     .join('');
//   team.innerHTML = members;

//   const staff = document.querySelector('.member')
//   const width = staff.getBoundingClientRect().width;

//   carouselBtn.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       let currentSlide = 1;
//       const slide = e.currentTarget.dataset.slide;
//       if (slide == 'left') {
//         team.style.transform = 'translateX(' + (-width * currentSlide) + 'px';
//       } else {
//         team.style.transform = 'translateX(' + (-width * currentSlide) + 'px';
//       }
//     });
//   });

// }
