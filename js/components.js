async function loadComponent(id, path) {
    const response = await fetch(path);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;

    if (id === "navbar") {
        initNavbar();
    }
}

function initNavbar() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
        toggle.addEventListener("click", event => {
            if (window.innerWidth <= 768) {
                event.preventDefault();

                const parent = toggle.parentElement;

                parent.classList.toggle("open");
            }
        });
    });
}

loadComponent("navbar", "/components/navbar.html");
loadComponent("footer", "/components/footer.html");