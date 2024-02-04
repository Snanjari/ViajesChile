// script.js
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
  
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carrusel
    new bootstrap.Carousel(document.getElementById('carousel'));
});

