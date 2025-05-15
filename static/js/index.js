// js code for collapsible sidebar
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

function updateSidebarState() {
  if (window.innerWidth < 1024) {
    sidebar.classList.remove("collapsed");
    sidebar.classList.add("mobile-collapsed");
  } else {
    sidebar.classList.remove("mobile-active", "mobile-collapsed");
    sidebar.classList.remove("collapsed");
  }
}

hamburger.addEventListener("click", () => {
  if (window.innerWidth >= 1024) {
    sidebar.classList.toggle("collapsed");
  } else {
    sidebar.classList.toggle("mobile-active");
    sidebar.classList.toggle("mobile-collapsed");
  }
});

window.addEventListener("click", (e) => {
  if (
    window.innerWidth < 1024 &&
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    sidebar.classList.remove("mobile-active");
    sidebar.classList.add("mobile-collapsed");
  }
});

window.addEventListener("resize", updateSidebarState);
window.addEventListener("DOMContentLoaded", updateSidebarState);
