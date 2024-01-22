// Get the modal
var modal = document.getElementById("contactFormModal");

// Get the button that opens the modal
var btn = document.getElementById("contactButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the body element
var body = document.body;

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  body.style.overflow = "hidden"; // Prevent scrolling
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "auto"; // Re-enable scrolling
}

// Function to check for messages and show the modal
function checkForMessages() {
  // Check if there's an error message and show the modal
  var errorMessage = document.querySelector('.error-message');
  var successMessage = document.querySelector('.success-message');

  if (errorMessage || successMessage) {
    modal.style.display = 'block';
    body.style.overflow = "hidden"; // Prevent scrolling when modal is displayed
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "auto"; // Re-enable scrolling
  }
}

// Run the check for messages when the window loads
window.onload = checkForMessages;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var myBtn = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

function topFunction() {
  // Grab the button
  var btn = document.getElementById("myBtn");
  
  // Add the 'animate' class to start the animation
  btn.classList.add('animate');
  
  // Scroll to the top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Wait for the scroll to finish then remove the 'animate' class
  // This assumes that the scroll takes less than 2 seconds; adjust as needed
  setTimeout(function() {
    btn.classList.remove('animate');
  }, 1000); // Adjust time as needed
}

$(document).ready(function() {
  $('#form').submit(function(event) {
      event.preventDefault();
      var formData = $(this).serialize();

      // Envío de formulario con AJAX
      $.ajax({
          url: 'https://formspree.io/f/mjvnkoyl',
          method: 'POST',
          data: formData,
          dataType: 'json',
          success: function(response) {
              alert('¡Mensaje enviado!');
              $('#form').trigger("reset");
          },
          error: function(xhr, status, error) {
              alert('Hubo un error al enviar el mensaje: ' + xhr.responseText);
          }
      });
  });
});
 
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


document.addEventListener('DOMContentLoaded', (event) => {
  const hamburger = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', function() {
      navbar.classList.toggle('active');
  });
});