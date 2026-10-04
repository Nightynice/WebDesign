document.addEventListener("DOMContentLoaded", () => {

    const questions =
        document.querySelectorAll(".faq-question");

    const searchInput =
        document.getElementById("faqSearch");

    const faqItems =
        document.querySelectorAll(".faq-item");

    const faqGroups =
        document.querySelectorAll(".faq-group");

    const noResult =
        document.getElementById("faqNoResult");


    /* =========================
       ACCORDION
    ========================= */

    questions.forEach(question => {

        question.addEventListener("click", () => {

            const item =
                question.closest(".faq-item");

            const isOpen =
                item.classList.contains("open");

            item.classList.toggle("open");

            question.setAttribute(
                "aria-expanded",
                !isOpen
            );

            const icon =
                question.querySelector("i");

            if (isOpen) {
                icon.classList.remove("bi-dash");
                icon.classList.add("bi-plus");
            } else {
                icon.classList.remove("bi-plus");
                icon.classList.add("bi-dash");
            }

        });

    });


    /* =========================
       SEARCH
    ========================= */

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const keyword =
                searchInput.value
                    .trim()
                    .toLowerCase();

            let visibleCount = 0;


            faqItems.forEach(item => {

                const question =
                    item.querySelector(".faq-question span");

                const answer =
                    item.querySelector(".faq-answer");

                const questionText =
                    question
                        ? question.textContent.toLowerCase()
                        : "";

                const answerText =
                    answer
                        ? answer.textContent.toLowerCase()
                        : "";

                const matched =
                    questionText.includes(keyword) ||
                    answerText.includes(keyword);

                if (matched) {

                    item.style.display = "";
                    visibleCount++;

                } else {

                    item.style.display = "none";

                }

            });


            faqGroups.forEach(group => {

                const visibleItems =
                    group.querySelectorAll(
                        ".faq-item:not([style*='display: none'])"
                    );

                if (keyword && visibleItems.length === 0) {
                    group.style.display = "none";
                } else {
                    group.style.display = "";
                }

            });


            if (keyword && visibleCount === 0) {
                noResult.classList.add("show");
            } else {
                noResult.classList.remove("show");
            }

        });

    }


    /* =========================
       CATEGORY LINKS
    ========================= */

    const categoryLinks =
        document.querySelectorAll(".faq-category-link");

    categoryLinks.forEach(link => {

        link.addEventListener("click", () => {

            categoryLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

});