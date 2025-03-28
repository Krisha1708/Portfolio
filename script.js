document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar"); // Select the correct navbar

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", () => {
            navbar.classList.toggle("active");

            // Adjust body overflow to prevent scrolling when sidebar is open
            if (navbar.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        });
    } else {
        console.error("Menu icon or navbar not found in the DOM.");
    }
});