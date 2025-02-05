// window.alert('이 웹페이지는 포트폴리오 템플릿 샘플페이지입니다.')
const slides = document.querySelectorAll('.wrap > .swiper-wrapper > .swiper-slide')
const nav = document.querySelectorAll('nav a')
const contact = document.querySelector('header .contact')
const slide1Btn = document.querySelector('#intro .btn a')


const wrap = new Swiper('.wrap', {
    direction:'vertical',
    mousewheel:true,
    speed:1000,
    on: {
        slideChangeTransitionEnd: function () {
            for(let i of nav) i.classList.remove('active')
            nav[this.activeIndex].classList.add('active')
            setTimeout(() => {
                ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
            }, 0);
        }
    },
})

const webslide = new Swiper('#project1 .web', {
    autoplay:{delay:2000,},
    loop:true,
})
const designslide1 = new Swiper('#project2 .design1', {
    autoplay:{delay:0, desableOnInteraction: false,},
    speed:4000,
    loop:true,
    slidesPerView:3,
    spaceBetween:10,
})
const designslide2 = new Swiper('#project2 .design2', {
    autoplay:{delay:0, desableOnInteraction: false, },
    speed:6000,
    loop:true,
    slidesPerView:3,
    spaceBetween:10,
})
const designslide3 = new Swiper('#project2 .design3', {
    autoplay:{delay:2000,},
    effect:'fade',
    loop:true,
    pagination:{
        el:'#project2 .swiper-pagination', //대상만 연결하면 자동으로 bullets 형태의 페이지네이션이 들어간다.
        type:'bullets', //필수
    },
})


contact.addEventListener('click',function(e){ //3행 소개영역으로 이동
    e.preventDefault();
    wrap.slideTo(2, 1000); //3번째 슬라이드로 1초동안 이동
})
slide1Btn.addEventListener('click',function(e){ //4행 작품영역으로 이동
    e.preventDefault();
    wrap.slideTo(3, 1000); //4번째 슬라이드로 1초동안 이동
})
nav.forEach((t, i)=>{ //header-nav click event
    t.addEventListener('click',function(e){
        e.preventDefault();
        wrap.slideTo(i, 1000); //클릭한 메뉴와 동일한 index번째 슬라이드로 1초동안 이동
        setTimeout(() => {
            ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
        }, 0);
    })
})

