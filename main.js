       function toggleProfile(profile) {
            profile.classList.toggle('expanded');
        }
             function submitForm(event) {
            event.preventDefault();
            const form = document.getElementById('reportForm');
            const formData = new FormData(form);
            let message = 'Report:\n';
            formData.forEach((value, key) => {
                message += `${key}: ${value}\n`;
            });
            const encodedMessage = encodeURIComponent(message);
            window.location.href = `sms:?body=${encodedMessage}`;
        }
        function checkAvailability(event) {
    event.preventDefault();
    
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    
    const availableDays = ['saturday', 'sunday'];
    const availableTimes = ['morning', 'evening'];

    if (availableDays.includes(day) && availableTimes.includes(time)) {
        document.getElementById('availabilityMessage').textContent = 'Available!';
    } else {
        document.getElementById('availabilityMessage').textContent = 'Not available.';
    }
}
document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const slides = document.querySelector('.slider');
  const slideWidth = document.querySelector('.slide').clientWidth;
  const pagination = document.querySelector('.pagination');
  const slideCount = slides.childElementCount;
  let currentIndex = 0;
  
  // Create pagination buttons
  for (let i = 0; i < slideCount; i++) {
    const button = document.createElement('button');
    button.textContent = i + 1;
    button.addEventListener('click', function() {
      currentIndex = i;
      showSlide(currentIndex);
    });
    pagination.appendChild(button);
  }

  function showSlide(index) {
    slides.style.transform = `translateX(-${slideWidth * index}px)`;
    updatePagination(index);
  }

  function updatePagination(index) {
    const buttons = pagination.querySelectorAll('button');
    buttons.forEach((button, i) => {
      if (i === index) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex === slideCount - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex === 0) ? slideCount - 1 : currentIndex - 1;
    showSlide(currentIndex);
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Automatic sliding
  let intervalId;
  function startSlider() {
    intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  startSlider();

  // Pause on hover
  slides.addEventListener('mouseenter', stopSlider);
  slides.addEventListener('mouseleave', startSlider);
});
function toggleSection(sectionId) {
        var section = document.querySelector('.' + sectionId);
        section.classList.toggle('expanded');
    }
function redirect() {
            var selectedLanguage = document.getElementById("languageDropdown").value;
            if (selectedLanguage === "english") {
                window.location.href = "index.html";
            } else if (selectedLanguage === "hindi") {
                window.location.href = "indexhin.html";
            }
        }