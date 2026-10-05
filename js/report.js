const reportTabs = document.querySelectorAll(".report-tab");
const reportForms = document.querySelectorAll(".report-form-content");

reportTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const type = tab.dataset.type;

        reportTabs.forEach(item => {
            item.classList.remove("active");
        });

        reportForms.forEach(form => {
            form.classList.remove("active");
        });

        tab.classList.add("active");

        const targetForm =
            document.getElementById(`${type}Form`);

        if (targetForm) {
            targetForm.classList.add("active");
        }
    });

});

const reportForm =
    document.getElementById("reportForm");

if (reportForm) {

    reportForm.addEventListener("submit", event => {

        event.preventDefault();

        alert("ขอบคุณสำหรับความคิดเห็นของคุณ");

        reportForm.reset();

    });

}
