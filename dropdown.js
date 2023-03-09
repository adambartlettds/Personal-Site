// Add interactivity to dropdown menus
var dropdownToggle = document.querySelectorAll('.dropdown-toggle');

dropdownToggle.forEach(function(el) {
  el.addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('active');
  });
});
