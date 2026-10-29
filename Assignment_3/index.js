const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

function toggleMenu(forceClose = false) {
const isHidden = menu.classList.contains("hidden");
if (forceClose || !isHidden) {
menu.classList.add("hidden");
iconOpen.classList.remove("hidden");
iconClose.classList.add("hidden");
} else {
menu.classList.remove("hidden");
iconOpen.classList.add("hidden");
iconClose.classList.remove("hidden");
}
}
btn.addEventListener("click", () => toggleMenu());
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(true)));

// Demo contact form
document.getElementById("contact-form").addEventListener("submit", (e) => {
e.preventDefault();
document.getElementById("form-msg").classList.remove("hidden");
e.target.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
