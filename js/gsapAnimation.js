  gsap.registerPlugin(ScrollTrigger);

  const video = document.querySelector('#video-container video');

  gsap.to(video, {
    scrollTrigger: {
      trigger: '#video-container',
      start: 'top bottom',
      end: 'bottom 95%',
      scrub: true,
      markers: false
    },
    scale: 1.85,
    ease: 'none'
  });

  