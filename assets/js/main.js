
const swiperTwo = new Swiper('.portfolio__slider', {
    loop: true,
    spaceBetween: 100,
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    on: {
    init: function () {
        this.el.addEventListener('mouseover', function () {
        this.autoplay.stop();
        }.bind(this));
        this.el.addEventListener('mouseout', function () {
        this.autoplay.start();
        }.bind(this));
    }
    },
    breakpoints: {
        450: {
            spaceBetween: 100,
            slidesPerView: 2,
        },
        640: {
            spaceBetween: 100,
            slidesPerView: 2,
        }
    }
});
const swiper = new Swiper(".stack__mySwiper", {
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    on: {
    init: function () {
        this.el.addEventListener('mouseover', function () {
        this.autoplay.stop();
        }.bind(this));
        this.el.addEventListener('mouseout', function () {
        this.autoplay.start();
        }.bind(this));
    }
    },
    breakpoints: {
        360: {
            slidesPerView: 3,
        },
        490: {
            slidesPerView: 4,
        },
        650: {
            slidesPerView: 5,
        },
        960: {
            slidesPerView: 6,
        },
    }
});

const swiperFree = new Swiper(".reviews__mySwiper", {
    loop: true,
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
    on: {
        init: function () {
            this.el.addEventListener('mouseover', function () {
            this.autoplay.stop();
            }.bind(this));
            this.el.addEventListener('mouseout', function () {
            this.autoplay.start();
            }.bind(this));
        }
        },

});

const btnHide = document.querySelector('.btn-hide');
const educationItem =document.querySelector('.education__item');
btnHide.addEventListener('click', () => {
    educationItem.classList.toggle('btn-hide_active');
    btnHide.classList.add('btn-hide-add')
});


// Кнопка наверх
let scrollBtn = document.querySelector('.isShowBtn');
window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.remove('isShowBtn_hide');
    } else if (window.scrollY < 200) {
        scrollBtn.classList.add('isShowBtn_hide');
    }
};
scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
};


//бургер меню
const iconMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
if(iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('active_menu')
        menu.classList.toggle('active')
    })
}
// плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

        if(iconMenu.classList.contains('active_menu')) {
            document.body.classList.remove('lock')
            iconMenu.classList.remove('active_menu')
            menu.classList.remove('active')
        }
    })
}

// Анимации

let tl = gsap.timeline();

tl.from('.header', {opacity: 0, duration: .5})
  .from('.main__wrapper-inner', {opacity: 0, x: -100, duration: 0.5})
  .from('.pulse', {opacity: 0, x: 100, duration: 0.5}, '-=0.5')
  .from('.main__mobile', {opacity: 0, x: -100, duration: 0.5}, '-=0.5')
  .from('.advantages__titel', {opacity: 0, x: -100, duration: 0.5}, '-=0.5')
//    .to('.orange', {duration: 1, x: 200, scale: 0.2}, '+=1')
//    .addLabel('greyAndPink')
//    .to('.grey', {duration: 1, x: 200, scale: 2, y: 20}, 'greyAndPink');