const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


// Open / Close menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.textContent = "X";
    }
    else{
        menuBtn.textContent = "☰";
    }
});


// Close menu when clicking a link
const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

const startBauttons = document.querySelectorAll('.nexora-btn');
    startBauttons.forEach((button) =>{
        button.addEventListener("click", () =>{
             alert("Thanks for choosing Nexora! 🚀");
        });
    });
