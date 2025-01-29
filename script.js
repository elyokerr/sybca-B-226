document.addEventListener('DOMContentLoaded', function () {
    const translateButton = document.getElementById('translate-button');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageSelector = document.getElementById('language-selector');
    const translateElement = document.getElementById('google_translate_element');

    translateButton.addEventListener('click', function () {
        languageDropdown.classList.toggle('active'); // Toggle dropdown visibility
    });

    languageSelector.addEventListener('change', function () {
        const selectedLanguage = languageSelector.value;
        if (translateElement && translateElement.querySelector('.goog-te-combo')) {
            // Set the selected value for the Google Translate dropdown
            translateElement.querySelector('.goog-te-combo').value = selectedLanguage;
            // Dispatch the change event to trigger the translation
            translateElement.querySelector('.goog-te-combo').dispatchEvent(new Event('change'));
        } else {
            console.error('Google Translate element or dropdown not found.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const leftButton = document.getElementById('carousel-left');
    const rightButton = document.getElementById('carousel-right');
    const totalItems = carouselItems.length;
    const swipeInterval = 5000; // Auto-swipe interval in milliseconds
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Move by 100% of the container width
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Wrap around to the last item
        }
        updateCarousel();
    });

    rightButton.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Wrap around to the first item
        }
        updateCarousel();
    });

    // Auto-swipe functionality
    function autoSwipe() {
        setInterval(() => {
            currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }, swipeInterval);
    }

    autoSwipe();
    
});



