// Add some interactivity to the page
var menuToggle = document.querySelector('.menu-toggle');
var nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('active');
});
