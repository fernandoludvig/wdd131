// Update Year in Footer
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Update Last Modified Date
const lastModifiedElement = document.getElementById("last-modified");
if (lastModifiedElement) {
  lastModifiedElement.textContent = document.lastModified;
}

// Carousel Functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
let autoCarouselInterval;

function showNextImage() {
  if (totalImages > 0) {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
  }
}

function showPrevImage() {
  if (totalImages > 0) {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    images[currentIndex].classList.add('active');
  }
}

// Start Auto Carousel
function startAutoCarousel(interval = 5000) {
  autoCarouselInterval = setInterval(showNextImage, interval);
}

// Stop Auto Carousel
function stopAutoCarousel() {
  clearInterval(autoCarouselInterval);
}

startAutoCarousel();

// Pause Carousel on Hover
const carousel = document.querySelector('.carousel');
if (carousel) {
  carousel.addEventListener('mouseenter', stopAutoCarousel);
  carousel.addEventListener('mouseleave', () => startAutoCarousel());
}

// Carousel Navigation Buttons
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    showNextImage();
    stopAutoCarousel();
    startAutoCarousel();
  });

  prevBtn.addEventListener('click', () => {
    showPrevImage();
    stopAutoCarousel();
    startAutoCarousel();
  });
}

// Like Button Functionality with Conditional Branching
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const destination = button.closest('.destination-card').querySelector('h3').textContent;
    const likes = JSON.parse(localStorage.getItem('likes')) || {};

    // Conditional Branching
    if (likes[destination]) {
      likes[destination]++;
    } else {
      likes[destination] = 1;
    }

    localStorage.setItem('likes', JSON.stringify(likes));
    alert(`You liked ${destination}! Total likes: ${likes[destination]}`);
  });
});

// Form Submission with Template Literals and localStorage
const tipForm = document.getElementById('tipForm');
const tipList = document.getElementById('tipList');

if (tipForm && tipList) {
  tipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const tip = document.getElementById('tip').value;

    if (name && tip) {
      // Save to localStorage
      const tipData = { name, tip };
      const tips = JSON.parse(localStorage.getItem('tips')) || [];
      tips.push(tipData);
      localStorage.setItem('tips', JSON.stringify(tips));

      // Display the tip using template literals
      const tipItem = document.createElement('div');
      tipItem.innerHTML = `<strong>${name}:</strong> ${tip}`;
      tipList.appendChild(tipItem);
      tipForm.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });

  // Load tips from localStorage on page load
  const savedTips = JSON.parse(localStorage.getItem('tips')) || [];
  savedTips.forEach(tipData => {
    const tipItem = document.createElement('div');
    tipItem.innerHTML = `<strong>${tipData.name}:</strong> ${tipData.tip}`;
    tipList.appendChild(tipItem);
  });
}