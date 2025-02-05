gsap.registerPlugin(ScrollTrigger);

const profileItems1 = document.querySelectorAll("#profile1 .contents li");
const profileItems2 = document.querySelectorAll("#profile2 .contents li");

// 초기 opacity 설정
for(let i of profileItems1) i.style.opacity = '0'
for(let i of profileItems2) i.style.opacity = '0'

// ScrollTriggerr=================profile1
gsap.to(profileItems1, {
    scrollTrigger: {
        trigger: "#profile1 .contents",
        start: "top 80%",
        end: "top 20%",
        scrub:true,
        toggleActions: "play reverse restart reverse",
        markers: false, // 디버깅 마커 (테스트 후 false)
        onEnter: () => {
            gsap.to(profileItems1,{
                opacity: 1,
                y: 50,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeaveBack: () => {
            gsap.to(profileItems1, {
                opacity: 0,
                y: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
        onEnterBack: () => {
            gsap.to(profileItems1,{
                opacity: 1,
                y: 50,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeave: () => {
            gsap.to(profileItems1, {
                opacity: 0,
                y: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
    },
});
// ScrollTrigger=================profile2
gsap.to(profileItems2, {
    scrollTrigger: {
        trigger: "#profile2 .contents",
        start: "top 80%",
        end: "top 20%",
        scrub:true,
        toggleActions: "play reverse restart reverse",
        markers: false, // 디버깅 마커 (테스트 후 false)
        onEnter: () => {
            gsap.to(profileItems2,{
                opacity: 1,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeaveBack: () => {
            gsap.to(profileItems2, {
                opacity: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
        onEnterBack: () => {
            gsap.to(profileItems2,{
                opacity: 1,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeave: () => {
            gsap.to(profileItems2, {
                opacity: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
    },
});
