document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("nav-header");
    var headerOffset = header.offsetTop;

    // Add an event listener to detect scrolling
    window.addEventListener("scroll", function() {
        // Check if the user has scrolled past the header's initial position
        if (window.pageYOffset >= headerOffset) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });
});

document.getElementById('home-link').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

document.getElementById('food-link').addEventListener('click', function() {
    window.location.href = 'page1.html';
  });
  document.getElementById('contact-link').addEventListener('click', function() {
    window.location.href = '#footer';
  });