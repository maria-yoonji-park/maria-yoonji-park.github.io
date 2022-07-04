const contact_form = document.getElementById("contact-form");
const reader = new FileReader();

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function go_contact() {
    document.querySelector(".active-btn").classList.remove("active-btn");
    document.querySelector('[data-id="contact"]').classList.add("active-btn");
    document.querySelector(".active").classList.remove("active");
    document.getElementById("contact").classList.add("active");
};

function send_email() {
    contact_form.submit();
    contact_form.reset();
};