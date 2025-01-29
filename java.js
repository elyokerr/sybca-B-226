document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuContainer = document.getElementById('menu-container');
    const backButton = document.getElementById('back-button');

    if (hamburgerMenu && menuContainer && backButton) {
        hamburgerMenu.addEventListener('click', () => {
            menuContainer.classList.toggle('active');
        });

        backButton.addEventListener('click', () => {
            menuContainer.classList.remove('active');
        });
    }

    // Header Blur on Scroll
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    if (header) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                header.classList.add('blurred');
            } else {
                header.classList.remove('blurred');
            }
            lastScrollTop = scrollTop;
        });
    }

    // Dynamic Text Color Based on Scroll Position
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    const container = document.querySelector('.container');

    if (title && description && container) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const containerTop = container.offsetTop;
            const containerHeight = container.offsetHeight;

            if (scrollPosition > containerTop && scrollPosition < containerTop + containerHeight) {
                title.style.color = '#333';
                description.style.color = '#333';
            } else {
                title.style.color = '#333';
                description.style.color = '#333';
            }
        });
    }

    // Share Options Toggle Logic
    const shareButton = document.querySelector('.share-button');
    const shareOptions = document.querySelector('.share-options');

    if (shareButton && shareOptions) {
        shareButton.addEventListener('click', () => {
            shareOptions.classList.toggle('active');
        });
    }

    // Menu Popup Logic
    const menuButton = document.getElementById('menu-button');
    const menuPopup = document.getElementById('menu-popup');
    const closeMenu = document.getElementById('close-menu');
    const menuPdf = document.getElementById('menu-pdf');

    if (menuButton && menuPopup && closeMenu && menuPdf) {
        menuButton.addEventListener('click', () => {
            menuPdf.src = 'menu.pdf';
            menuPopup.classList.add('active');
            mainContainer.classList.add('blur');
        });

        closeMenu.addEventListener('click', () => {
            menuPopup.classList.remove('active');
            mainContainer.classList.remove('blur');
        });

        window.addEventListener('click', (e) => {
            if (e.target === menuPopup) {
                menuPopup.classList.remove('active');
                mainContainer.classList.remove('blur');
            }
        });
    }

    // Pay Popup Logic
    const payButton = document.getElementById('pay-button');
    const payPopup = document.getElementById('pay-popup');
    const closePay = document.getElementById('close-pay');

    if (payButton && payPopup && closePay) {
        payButton.addEventListener('click', () => {
            payPopup.classList.add('active');
            mainContainer.classList.add('blur');
        });

        closePay.addEventListener('click', () => {
            payPopup.classList.remove('active');
            mainContainer.classList.remove('blur');
        });

        window.addEventListener('click', (e) => {
            if (e.target === payPopup) {
                payPopup.classList.remove('active');
                mainContainer.classList.remove('blur');
            }
        });
    }

    // Reviews Logic
    const stars = document.querySelectorAll('.star');
    const reviewText = document.getElementById('review-text');
    const submitButton = document.getElementById('submit-review');
    let selectedRating = 0;

    if (stars && reviewText && submitButton) {
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                selectedRating = index + 1;
                stars.forEach((s, i) => {
                    s.classList.toggle('selected', i < selectedRating);
                });
            });
        });

        submitButton.addEventListener('click', () => {
            const review = reviewText.value.trim();
            if (selectedRating === 0) {
                alert('Please select a star rating.');
                return;
            }
            if (!review) {
                alert('Please write a review.');
                return;
            }
            alert(`Thanks for your review!\nRating: ${selectedRating} stars\nReview: "${review}"`);
            selectedRating = 0;
            reviewText.value = '';
            stars.forEach((s) => s.classList.remove('selected'));
        });
    }

    // Address Popup Logic
    const addressButton = document.getElementById('address-button');
    const addressPopup = document.getElementById('address-popup');
    const closeAddressButton = document.getElementById('close-address');
    const googleMapIframe = document.getElementById('google-map');

    if (addressButton && addressPopup && closeAddressButton && googleMapIframe) {
        addressButton.addEventListener('click', () => {
            googleMapIframe.src = 'https://www.google.com/maps/embed?...';
            addressPopup.classList.add('active');
            mainContainer.classList.add('blur');
        });

        closeAddressButton.addEventListener('click', () => {
            addressPopup.classList.remove('active');
            mainContainer.classList.remove('blur');
        });
    }

    // Gallery Modal Logic
    const galleryModal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const galleryImages = document.querySelectorAll('.gallery-image');

    let currentImageIndex = 0;

    if (galleryModal && modalImage && closeModal && prevBtn && nextBtn && galleryImages) {
        galleryImages.forEach((image, index) => {
            image.addEventListener('click', () => {
                galleryModal.classList.add('active');
                modalImage.src = image.src;
                currentImageIndex = index;
            });
        });

        closeModal.addEventListener('click', () => {
            galleryModal.classList.remove('active');
        });

        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            modalImage.src = galleryImages[currentImageIndex].src;
        });

        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            modalImage.src = galleryImages[currentImageIndex].src;
        });
    }
});
function saveContact() {
    // Open the system's contact save interface (this will depend on browser capabilities)
    // We can use an SMS link with a pre-filled number or create a "mailto:" link
    window.location.href = "sms:+919637086846?body=Add%20this%20contact%20to%20my%20contacts"; // SMS link to save contact
}
function shareLocation() {
    // The link to the brand outlet's location
    const locationLink = "https://maps.app.goo.gl/1D5xJSZm6BfURcVVA"; 

    // Use the native sharing API if available (on supported mobile browsers)
    if (navigator.share) {
        navigator.share({
            title: 'Brand Outlet Location',
            text: 'Check out this brand outlet location!',
            url: locationLink
        }).then(() => {
            console.log('Location shared successfully');
        }).catch((error) => {
            console.error('Error sharing location:', error);
            alert('Sharing failed. Please try again.');
        });
    } else {
        // Fallback: For devices/browsers that don't support navigator.share
        // Create a textarea to allow user to copy the link manually
        const textarea = document.createElement('textarea');
        textarea.value = locationLink;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        alert('Location link copied to clipboard! You can now share it via your preferred app.');
    }
}
