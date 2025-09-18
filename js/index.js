document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if(menuToggle) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
  }

  // Slideshow auto
  let slideIndex = 0;
  const slides = document.getElementsByClassName("mySlides");

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if(slides[slideIndex-1]) slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
  }
  showSlides();

  // Optional arrow controls
  window.changeSlide = (n) => {
    slideIndex += n - 1;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides();
  }

  // Popup video
  const openBtn = document.getElementById('openVideo');
  const overlay = document.getElementById('videoOverlay');
  const closeBtn = document.getElementById('closePopup');

  if(openBtn && overlay && closeBtn) {
    // Open popup when hex button clicked
    openBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      overlay.style.display = 'flex';
    });

    // Close popup when clicking X
    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    // Close popup if click outside popup
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  alert(`This website is created for educational and testing purposes only.
It is not intended to copy or claim ownership of any other site.`);
});