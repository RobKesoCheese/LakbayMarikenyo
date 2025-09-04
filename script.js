function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
  }
  
 // Get the header element
const header = document.getElementById("navbar");

// Add an event listener to monitor scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    // Add the "scrolled" class when the page is scrolled
    header.classList.add("scrolled");
  } else {
    // Remove the "scrolled" class when at the top of the page
    header.classList.remove("scrolled");
  }
});


function moveSlide(direction, carousel = null) {
  if (!carousel) {
    carousel = document.querySelector('.team-carousel');
  }
  
  const slides = carousel.querySelector('.team-slides');
  const cards = carousel.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 30; // width + gap
  const scrollPosition = slides.scrollLeft;
  
  if (window.innerWidth <= 768) {
    // Mobile behavior
    let targetScroll;
    
    if (direction === -1) {
      targetScroll = Math.max(scrollPosition - cardWidth, 0);
    } else {
      targetScroll = Math.min(scrollPosition + cardWidth, slides.scrollWidth - slides.clientWidth);
    }
    
    slides.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  } else {
    // Desktop behavior (optional - could just do nothing)
    if (direction === -1) {
      slides.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else {
      slides.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }
}
