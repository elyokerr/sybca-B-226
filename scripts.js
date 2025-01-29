// Full updated scripts.js - Fixes all issues
function closeMenu() {
    document.getElementById('menu-popup').style.display = 'none';
}
function openMenu() {
    document.getElementById('menu-popup').style.display = 'block';
}

function openMenu() {
    document.getElementById('menu-popup').style.display = 'block';
}

function closeMenu() {
    document.getElementById('menu-popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Close menu button click handler
    document.getElementById('close-menu-btn').addEventListener('click', closeMenu);

    // Close menu when clicking outside
    window.addEventListener('click', function(event) {
        const menuPopup = document.getElementById('menu-popup');
        if (event.target === menuPopup) {
            closeMenu();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve stored values from localStorage
        //const title = localStorage.getItem('businessTitle');

         // Show the stored menu when clicking the menu button
    document.getElementById('menu-button').addEventListener('click', function() {
        const menuSrc = localStorage.getItem('businessMenu');
        if (menuSrc) {
            document.getElementById('menu-pdf').src = menuSrc;
        } else {
            document.getElementById('menu-pdf').src = 'default-menu.pdf';  // Fallback menu
        }
        document.getElementById('menu-popup').style.display = 'block'; 
});

// Function to close the menu popup
function closeMenu() {
    document.getElementById('menu-popup').style.display = 'none';
}
   
    const location = localStorage.getItem('businessLocation');
    const instagram = localStorage.getItem('instagramEmbed');
    const whatsapp = localStorage.getItem('whatsappLink');
    const facebook = localStorage.getItem('facebookLink');
    const sms = localStorage.getItem('smsLink');
    const gpay = localStorage.getItem('gpayLink');
    const phonepe = localStorage.getItem('phonepeLink');
    const paytm = localStorage.getItem('paytmLink');

    window.addEventListener('DOMContentLoaded', () => {
        const logo = localStorage.getItem('businessLogo');
        const logoImg = document.getElementById('logo-img');
    
        if (logo) {
            logoImg.src = logo;  // Set logo from local storage
        } else {
            logoImg.src = 'default-logo.png';  // Default image if no logo is uploaded
        } 
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Retrieve business title and description from localStorage
        const title = localStorage.getItem('businessTitle') || 'Default Business Title';
        const fullDescription = localStorage.getItem('businessDescription') || 'Hover to read more about the business.';
    
        // Update title and description dynamically
        document.getElementById('business-title').innerText = title;
    
        const maxLength = 15; // Limit description to 15 characters
        const shortDescription = fullDescription.length > maxLength 
            ? fullDescription.substring(0, maxLength) + "..." 
            : fullDescription;
    
        // Update shortened description
        document.getElementById('short-description').innerText = shortDescription;
    
        // Show Read More button only if description is long
        if (fullDescription.length > maxLength) {
            document.getElementById('read-more-btn').style.display = 'inline';
        }
    
        // Set full description in popup
        document.getElementById('full-description').innerText = fullDescription;
    
        // Read More Popup Logic
        const readMoreBtn = document.getElementById('read-more-btn');
        const readMorePopup = document.getElementById('read-more-popup');
        const closeReadMore = document.getElementById('close-read-more');
        const mainContainer = document.getElementById('main-container');
    
        readMoreBtn.addEventListener('click', () => {
            readMorePopup.classList.add('active');
            mainContainer.classList.add('blur');
        });
    
        closeReadMore.addEventListener('click', () => {
            readMorePopup.classList.remove('active');
            mainContainer.classList.remove('blur');
        });
    
        // Close popup when clicking outside of it
        window.addEventListener('click', (e) => {
            if (e.target === readMorePopup) {
                readMorePopup.classList.remove('active');
                mainContainer.classList.remove('blur');
            }
        });
    });

    // Retrieve and update business title
    const title = localStorage.getItem('businessTitle');
        if (title) {
         document.getElementById('business-title').innerText = title;
        } else {
        document.getElementById('business-title').innerText = 'Default Business Title';
        }

    // Retrieve stored description from localStorage and update the page
    const description = localStorage.getItem('businessDescription');
    if (description) {
     document.getElementById('business-description').innerText = description;
    } else {
    document.getElementById('business-description').innerText = 'Description not provided.';
    }

    // Update template elements dynamically
        //if (title) document.querySelector('.title').innerText = title;
    if (location) document.getElementById('google-map').src = location;
    if (instagram) {
        const instaScript = document.createElement('script');
        instaScript.src = instagram;
        instaScript.defer = true;
        document.body.appendChild(instaScript);
    }
    if (whatsapp) document.querySelector('.share-option[href*="wa.me"]').href = whatsapp;
    if (facebook) document.querySelector('.share-option[href*="facebook.com/sharer"]').href = facebook;
    if (sms) document.querySelector('.share-option[href*="sms:"]').href = sms;
    if (gpay) document.querySelector('.payment-option[onclick*="pay.google"]').setAttribute('onclick', `window.open('${gpay}', '_blank')`);
    if (phonepe) document.querySelector('.payment-option[onclick*="phonepe"]').setAttribute('onclick', `window.open('${phonepe}', '_blank')`);
    if (paytm) document.querySelector('.payment-option[onclick*="paytm"]').setAttribute('onclick', `window.open('${paytm}', '_blank')`);


     // Retrieve and update logo from localStorage

                // Function to update the logo dynamically
        window.addEventListener('DOMContentLoaded', () => {
            const logo = localStorage.getItem('businessLogo');
            const logoImg = document.getElementById('logo-img');

            if (logo) {
                logoImg.src = logo;
            } else {
                logoImg.src = 'default-logo.png';  // Default image if no logo is uploaded
            }
        });

     // Logo Upload Handling
    const logoInput = document.getElementById('logo');
    const logoImg = document.querySelector('.home-icon img');
    if (logoInput && logoImg) {
        logoInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    logoImg.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Menu PDF Upload Handling
    

    // Restore Translate Functionality
    const translateButton = document.getElementById('translate-button');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageSelector = document.getElementById('language-selector');
    const translateElement = document.getElementById('google_translate_element');

    if (translateButton && languageDropdown) {
        translateButton.addEventListener('click', function() {
            languageDropdown.classList.toggle('active');
        });

        languageSelector?.addEventListener('change', function() {
            const selectedLanguage = languageSelector.value;
            if (translateElement?.querySelector('.goog-te-combo')) {
                translateElement.querySelector('.goog-te-combo').value = selectedLanguage;
                translateElement.querySelector('.goog-te-combo').dispatchEvent(new Event('change'));
            } else {
                console.error('Google Translate element or dropdown not found.');
            }
        });
    }

    console.log('All features initialized successfully!');
    window.location.href = 'template.html';

});
