<<<<<<< HEAD
// Function to handle the greeting
function sayHello() {
  const userName = prompt("Siapa nama Anda?");

  if (userName) {
    alert("Halo, " + userName + "! Selamat datang di Landing Page Jeffwiyan.");
    
    // DOM Manipulation: Change the main heading
    const mainHeading = document.querySelector('.hero-text h1');
    if (mainHeading) {
        const highlightSpan = mainHeading.querySelector('.highlight');
        if (highlightSpan) {
            highlightSpan.textContent = userName;
        }
        mainHeading.innerHTML = "Selamat datang, <span class=\"highlight\">" + userName + "</span>!";
    }

  } else {
    alert("Halo! Selamat datang di Landing Page Jeffwiyan.");
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Pesan terkirim. Terima kasih, " + name + ".");
        
        console.log("Form submitted:", { name, email, message });

        document.getElementById('contactForm').reset();
    } else {
        alert("Harap lengkapi semua bidang formulir.");
    }
}

// Event Listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
=======
// Function to handle the greeting
function sayHello() {
  const userName = prompt("Siapa nama Anda?");

  if (userName) {
    alert("Halo, " + userName + "! Selamat datang di Landing Page Jeffwiyan.");
    
    // DOM Manipulation: Change the main heading
    const mainHeading = document.querySelector('.hero-text h1');
    if (mainHeading) {
        const highlightSpan = mainHeading.querySelector('.highlight');
        if (highlightSpan) {
            highlightSpan.textContent = userName;
        }
        mainHeading.innerHTML = "Selamat datang, <span class=\"highlight\">" + userName + "</span>!";
    }

  } else {
    alert("Halo! Selamat datang di Landing Page Jeffwiyan.");
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Pesan terkirim. Terima kasih, " + name + ".");
        
        console.log("Form submitted:", { name, email, message });

        document.getElementById('contactForm').reset();
    } else {
        alert("Harap lengkapi semua bidang formulir.");
    }
}

// Event Listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
>>>>>>> 920ff8684368d60dedaaefc34c1acf3d10e1da78
});