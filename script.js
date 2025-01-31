document.addEventListener("scroll", function () {
  let birds = document.querySelectorAll(".birds");
  let scrollPosition = window.scrollY;
  birds.forEach((bird) => {
    bird.style.transform = `translateX(${scrollPosition * 0.5}px)`;
  });
});
