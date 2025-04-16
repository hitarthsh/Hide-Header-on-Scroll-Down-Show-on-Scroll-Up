var lastScrollTop = 0;
navbar = document.querySelector("#navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px"; // Adjust this value based on your navbar height
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
