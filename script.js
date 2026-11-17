
// BURGER MENU
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// MENU LINK BOSILGANDA YOPILADI
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

// SCROLL REVEAL
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

revealItems.forEach((item) => {
    observer.observe(item);
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    const target = Number(counter.dataset.target);
    let current = 0;

    const step = Math.ceil(target / 100);

    const timer = setInterval(() => {
        current += step;

        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        counter.textContent = current;
    }, 20);
});

// FORM
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === "" || phone === "") {
        message.textContent = "Barcha maydonlarni to'ldiring!";
        message.style.color = "red";
        return;
    }

    message.textContent = "Muvaffaqiyatli yuborildi!";
    message.style.color = "green";

    form.reset();
});
