(function () {
  "use strict";
  document.querySelectorAll("[data-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
      const value = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(function (other) {
        const active = other === button;
        other.classList.toggle("active", active);
        other.setAttribute("aria-pressed", String(active));
      });
      document.querySelectorAll("[data-category]").forEach(function (card) {
        card.hidden = value !== "all" && !card.dataset.category.split(" ").includes(value);
      });
    });
  });
})();