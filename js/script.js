const portals = document.querySelectorAll('.portal');
const business = document.querySelector('.business');
const imaginary = document.querySelector('.imaginary');
const hole = document.querySelector('.black-hole');
const lamp = document.querySelector('#lamp');
const bottle = document.querySelector('#bottle');
const mail = document.querySelector('.mail-sea');
const scroll = document.querySelector('.form-div-i');
const mailbusiness = document.querySelector('.form-div-b');
const arrowscroll = document.querySelectorAll('.arrow-box')
const dimmer = document.querySelector('#dimmer');
const dimmer1 = document.querySelector('#dimmer1');
const body = document.querySelector('body');
const bcontacts = document.querySelector('.socials');
const socialgit = document.querySelector('.git');
const socialli = document.querySelector('.li');
const socialmail = document.querySelector('.mail');
const gitbi = document.querySelector('.git-b');
const libi = document.querySelector('.li-b');
const mailbi = document.querySelector('.mail-b');
const anchor = document.querySelector('#anchor-business')
let x = 0;

// #region Event Listeners
arrowscroll.forEach(arrow =>{
arrow.addEventListener('click',() => {
  scroll.style.transform = "translateX(-350%)";
  scroll.style.transition = "2s";
  mailbusiness.style.transform = "translateX(-350%)";
  mailbusiness.style.transition = "2s";
  dimmer.style.opacity = "0";
  dimmer.style.visibility = "hidden"
  dimmer.style.transition = "1s"
  dimmer1.style.opacity = "0";
  dimmer1.style.visibility = "hidden"
  dimmer1.style.transition = "1s"
  body.style.overflowX = "hidden";
  body.style.overflowY = "scroll";
  body.style.height = "auto"
})
})

bottle.addEventListener('click',() => {
  scroll.style.transform = "translateX(0)";
  scroll.style.transition = "2s";
  dimmer1.style.visibility = "visible"
  dimmer1.style.opacity = "1"
  dimmer1.style.transition = "1.5s"
  body.style.overflow = "hidden";
  body.style.height = "100%"

})

mailbi.addEventListener('click',() => {
  mailbusiness.style.transform = "translateX(0)";
  mailbusiness.style.transition = "2s";
  dimmer.style.visibility = "visible"
  dimmer.style.opacity = "1"
  dimmer.style.transition = "1.5s"
  body.style.overflow = "hidden";
  body.style.height = "100%"
})

socialmail.addEventListener('click',() => {
  mailbusiness.style.transform = "translateX(0)";
  mailbusiness.style.transition = "2s";
  dimmer.style.visibility = "visible"
  dimmer.style.opacity = "1"
  dimmer.style.transition = "1.5s"
  body.style.overflow = "hidden";
  body.style.height = "100%"
})

mail.addEventListener('click',() => {
  scroll.style.transform = "translateX(0)";
  scroll.style.transition = "2s";
  dimmer1.style.visibility = "visible"
  dimmer1.style.opacity = "1"
  dimmer1.style.transition = "1.5s"
  body.style.overflow = "hidden";
  body.style.height = "100%"

})


dimmer.addEventListener('click',() =>{
  scroll.style.transform = "translateX(-350%)";
  scroll.style.transition = "2s";
  mailbusiness.style.transform = "translateX(-350%)";
  mailbusiness.style.transition = "2s";
  dimmer.style.opacity = "0";
  dimmer.style.visibility = "hidden"
  dimmer.style.transition = "1s"
  dimmer1.style.opacity = "0";
  dimmer1.style.visibility = "hidden"
  dimmer1.style.transition = "1s"
  body.style.overflowX = "hidden";
  body.style.overflowY = "scroll";
  body.style.height = "auto"
})

dimmer1.addEventListener('click',() =>{
  scroll.style.transform = "translateX(-350%)";
  scroll.style.transition = "2s";
  mailbusiness.style.transform = "translateX(-350%)";
  mailbusiness.style.transition = "2s";
  dimmer.style.opacity = "0";
  dimmer.style.visibility = "hidden"
  dimmer.style.transition = "1s"
  dimmer1.style.opacity = "0";
  dimmer1.style.visibility = "hidden"
  dimmer1.style.transition = "1s"
  body.style.overflowX = "hidden";
  body.style.overflowY = "scroll";
  body.style.height = "auto"
})

hole.addEventListener('click',() => {
  socialgit.style.animation = 0;
  socialli.style.animation = 0;
  socialmail.style.animation = 0;
  x = 0;
  document.body.style.backgroundColor = "#070311"
})

lamp.addEventListener('click',() => {
  document.body.style.backgroundColor = "#6091aa";
})


document.querySelectorAll('.portals').forEach(portal => {
    portal.addEventListener('click', () => {
        business.classList.toggle('active');
        imaginary.classList.toggle('active');
    })
  })
// #endregion Event Listeners



$(window).scroll(function() {    
  let scroll = $(window).scrollTop();

  if(x != 0 && scroll < 500) {
    anchor.style.animation = "menurev 1s ease-in-out forwards";
    socialgit.style.animation = "menurev1 1.2s ease-in-out forwards";
    socialli.style.animation = "menurev2 1.4s ease-in-out forwards";
    socialmail.style.animation = "menurev3 1.6s ease-in-out forwards";
    gitbi.style.animation = "git-b-rev 1.5s ease-in-out forwards";
    libi.style.animation = "li-b-rev 2.5s ease-in-out forwards";
    mailbi.style.animation = "mail-b-rev 3.5s ease-in-out forwards";

  }
  else if (scroll >= 500) {
    anchor.style.animation = "menuanchor 1s ease-in-out forwards";
    socialgit.style.animation = "menugit 1.2s ease-in-out forwards";
    socialli.style.animation = "menuli 1.4s ease-in-out forwards";
    socialmail.style.animation = "menumail 1.6s ease-in-out forwards";
    gitbi.style.animation = "git-b 1.5s ease-in-out forwards";
    libi.style.animation = "li-b 2s ease-in-out forwards";
    mailbi.style.animation = "mail-b 2.5s ease-in-out forwards";
    x++;
    console.log(x);
  }
});

function timeOut(){
  setTimeout(() => {
    business.classList.toggle('active');
    gitbi.style.animation = "git-b-rev 1.5s ease-in-out forwards";
    libi.style.animation = "li-b-rev 2.5s ease-in-out forwards";
    mailbi.style.animation = "mail-b-rev 3.5s ease-in-out forwards";

  }, 1000);
}

timeOut();  

$(document).ready(function (){
  if(!$("#myCanvas").tagcanvas({
      textColour: "#dfa11c",
      outlineColour: "transparent",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      weight: true,
  }, "tags")){
      // something went wrong hide the canvas container,
      $("#myCanvasContainer");
  }
})


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 100,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  loop: true,
});