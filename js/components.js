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

    initCountryMegaMenu();

    window.addEventListener("scroll", () => {
        const header = document.querySelector(".site-header");

        if (!header) return;

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

function initCountryMegaMenu() {

    const countryItems =
        document.querySelectorAll(".country-item");

    const countryTitle =
        document.getElementById("countryTitle");

    const countryLinks =
        document.querySelectorAll("#countryLinks a");

    if (!countryItems.length || !countryTitle) return;

    countryItems.forEach(item => {

        item.addEventListener("mouseenter", () => {

            const country =
                item.dataset.country;

            countryTitle.textContent = country;

            countryItems.forEach(countryItem => {
                countryItem.classList.remove("active");
            });

            item.classList.add("active");

            countryLinks.forEach(link => {

                const url =
                    new URL(
                        link.href,
                        window.location.origin
                    );

                url.searchParams.set(
                    "country",
                    country
                );

                link.href =
                    url.pathname + url.search;
            });

        });

    });
}

loadComponent("navbar", "/components/navbar.html");
loadComponent("footer", "/components/footer.html");