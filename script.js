document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("show");
    }
  });
}

const slideElements = document.querySelectorAll(".slide-in");
slideElements.forEach((element) => {
  if (isInViewport(element)) {
    element.classList.add("show");
  }
});

window.addEventListener("scroll", handleScroll);

handleScroll();
