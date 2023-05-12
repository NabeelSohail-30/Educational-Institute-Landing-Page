// Add fade-in animation to sections
const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
    section.classList.add("fadeIn");
});

function toggleNav() {
    var navbarItems = document.getElementById("navbarItems");
    if (navbarItems.style.display === "block") {
        navbarItems.style.display = "none";
    } else {
        navbarItems.style.display = "block";
    }
}