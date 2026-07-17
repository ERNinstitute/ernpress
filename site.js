(function () {
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const button = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "A") {
      document.body.classList.remove("nav-open");
      button.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("nav-open")) return;
    if (nav.contains(event.target) || button.contains(event.target)) return;
    document.body.classList.remove("nav-open");
    button.setAttribute("aria-expanded", "false");
  });
})();
