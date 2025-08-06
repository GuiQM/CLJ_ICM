/*ESTUDAR E VERIFICAR CÓDIGO*/


gsap.registerPlugin(ScrollTrigger);

gsap.to("#igrejaImg", {
    scrollTrigger: {
        trigger: ".gsap-parallax",
        start: "top 80%", // quando o topo da div atingir 80% da tela
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power2.out"
});