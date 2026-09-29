// Theme toggle (remembers choice), mobile menu, footer year, active nav link
(function () {
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".theme-toggle");
    const isDark = () => root.dataset.theme === "dark" ||
      (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    const paint = () => { if (btn) btn.textContent = isDark() ? "☀" : "☾"; };
    paint();
    btn && btn.addEventListener("click", () => {
      root.dataset.theme = isDark() ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
      paint();
    });

    const menu = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");
    menu && menu.addEventListener("click", () => nav.classList.toggle("open"));
    nav && nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

    document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

    // Highlight the section currently in view
    const links = [...document.querySelectorAll('.nav a[href^="#"]')];
    if (links.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      links.forEach(l => { const s = document.querySelector(l.getAttribute("href")); s && io.observe(s); });
    }
  });
})();
