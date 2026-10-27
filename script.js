/* Oria Central SDA Church interactions */
(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  const updateHeader = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  if (header && toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        header.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("open")) {
        header.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
        toggle.focus();
      }
    });
  }
})();
