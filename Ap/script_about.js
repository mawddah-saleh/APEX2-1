const desc = document.querySelector(".description");

window.addEventListener("load", () => {
  desc.style.opacity = "0";
  desc.style.transform = "translateY(20px)";

  setTimeout(() => {
    desc.style.transition = "0.8s ease";
    desc.style.opacity = "1";
    desc.style.transform = "translateY(0)";
  }, 300);
});