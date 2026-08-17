const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon) {

    menuIcon.addEventListener("click", () => {

        menuIcon.classList.toggle("bx-x");

        navbar.classList.toggle("active");

    });

}


const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (menuIcon) {

            menuIcon.classList.remove("bx-x");

        }

        if (navbar) {

            navbar.classList.remove("active");

        }

    });

});



const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting me! " +
            "I will get back to you soon."
        );

        contactForm.reset();

    });

}