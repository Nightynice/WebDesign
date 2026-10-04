document.addEventListener("DOMContentLoaded", () => {
    const heroButton = document.querySelector(".season-hero-button");

    if (heroButton) {
        heroButton.addEventListener("click", event => {
            const target = document.querySelector("#destinations");

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});