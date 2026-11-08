(function () {
  "use strict";
  function init() {
    document.querySelectorAll(".site-header .menu-toggle").forEach(function (toggle) {
      const shell = toggle.closest(".header-shell");
      const nav = document.getElementById(toggle.getAttribute("aria-controls"));
      if (!shell || !nav) return;
      toggle.addEventListener("click", function () {
        const open = shell.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      nav.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
          shell.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          shell.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();