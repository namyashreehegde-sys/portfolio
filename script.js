const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const themeToggle = document.getElementById("themeToggle");


// =============================
// MOBILE MENU
// =============================

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.textContent =
        nav.classList.contains("active")
        ? "✕"
        : "☰";

});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// =============================
// DARK / LIGHT MODE
// =============================

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    themeToggle.textContent =
        document.body.classList.contains("light")
        ? "☾"
        : "☀";

});


// =============================
// SCROLL REVEAL
// =============================

const elements = document.querySelectorAll(
    ".section, .project, .skill-box, .timeline-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach(element => {

    observer.observe(element);

});


// =============================
// ACTIVE NAVIGATION
// =============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#8b7cff";
        }

    });

});


// =============================
// MOUSE GLOW
// =============================

const glow = document.querySelector(".glow-one");

document.addEventListener("mousemove", event => {

    const x = event.clientX;
    const y = event.clientY;

    glow.style.transform =
        `translate(${x * 0.03}px, ${y * 0.03}px)`;

});


// =============================
// CONSOLE MESSAGE
// =============================

console.log(
    "%cHello! 👋 Welcome to Namyashree's portfolio.",
    "color:#8b7cff;font-size:16px;font-weight:bold;"
);