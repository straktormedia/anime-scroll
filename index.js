// Animation
const animation = anime({
  targets: ".text-animate",
  translateX: 800,
  duration: 4000,
  autoplay: false,
});

// animation.play();

// Scroll on div function
const scrollOnDiv = function (divSelector, speed = 1, offset = 0) {
  return (
    (window.pageYOffset -
      document.querySelector(divSelector).offsetTop +
      offset) /
    (speed * 100)
  );
};

// Scroll Listener
window.onscroll = function () {
  animation.seek(scrollOnDiv(".section-2") * animation.duration);
};
