

window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loader').style.display = 'none';
  }, 1500); // 10000ms = 10s
});


var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 7,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 35,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiperSlides = document.querySelectorAll('.swiper-slide');
let Img= document.querySelector('#img');
let gameName= document.getElementById('gameName');
let gameType= document.getElementById('gameType');
let Bgimg= document.getElementById('home');

swiperSlides.forEach((slide)=> {
slide.addEventListener("mouseenter", ()=>{
  let title = slide.getAttribute('data-title');
  let img = slide.getAttribute('data-img');
  let bgimg = slide.getAttribute('data-bgimg');
  let gametype = slide.getAttribute('data-gametype');

  gameName.innerHTML = title;
  gameType.innerHTML = gametype;
  Bgimg.style.background= `linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.8)), url(${bgimg})`;
  Bgimg.style.backgroundSize = 'cover';
  Bgimg.style.backgroundPosition = 'center';
  Img.src = img;
})
});

document.getElementById('progressBar').addEventListener('click', function () {
  // Hide the download button
  this.style.display = 'none';

  // Show the progress bar
  var progressBar = document.getElementById('progressBar');
  progressBar.style.display = 'block';

  var progress = 0;
  var interval = setInterval(function () {
    progress += 10;
    progressBar.value = progress;
    if (progress >= 100) clearInterval(interval);
  }, 500);
});

// var home = document.getElementById('home');
// document.querySelector('.mySwiper').addEventListener('mouseover', function (event) {
//   if (event.target.matches('.swiper-slide')) {
//     // home.style.backgroundColor = 'red';
//   }
// });
