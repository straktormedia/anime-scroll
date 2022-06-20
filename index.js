// Animation
const animation = anime({
  targets: ".text-animate",
  translateX: 800,
  duration: 4000,
  autoplay: false,
});

const section2 = document.querySelector(".section-2");

// Animate on scroll
const animateOnScroll = function (div, speed = 100, offset = 0) {
  const scrollPercent = window.pageYOffset - div.offsetTop;
  return (scrollPercent + offset) / speed;
};

// Scroll listener
window.onscroll = function () {
  animation.seek(animateOnScroll(section2, 1000, 200) * animation.duration);
};
